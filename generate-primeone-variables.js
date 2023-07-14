import chokidar from 'chokidar';
import fs from 'fs';

const root = './themes/primeone';
const inputDir = root + '/tokens';
const outputDir = root + '/variables';

const PrimeOneUtils = {
    isEmpty(value) {
        return value === null || value === undefined || value === '' || (Array.isArray(value) && value.length === 0) || (!(value instanceof Date) && typeof value === 'object' && Object.keys(value).length === 0);
    },
    isNotEmpty(value) {
        return !this.isEmpty(value);
    },
    isFunction(value) {
        return !!(value && value.constructor && value.call && value.apply);
    },
    isObject(value) {
        return value instanceof Object && value.constructor === Object;
    },
    isString(value) {
        return typeof value === 'string';
    },
    toFlatCase(str) {
        // convert snake, kebab, camel and pascal cases to flat case
        return this.isString(str) ? str.replace(/(-|_)/g, '').toLowerCase() : str;
    },
    toKebabCase(str) {
        // convert snake, camel and pascal cases to kebab case
        return this.isString(str)
            ? str
                  .replace(/(_)/g, '-')
                  .replace(/[A-Z]/g, (c, i) => (i === 0 ? c : '-' + c.toLowerCase()))
                  .toLowerCase()
            : str;
    },
    getItemValue(obj, ...params) {
        return this.isFunction(obj) ? obj(...params) : obj;
    },
    getOptionValue(options, key = '', params = {}) {
        const fKeys = this.toFlatCase(key).split('.');
        const fKey = fKeys.shift();

        return fKey ? (this.isObject(options) ? this.getOptionValue(this.getItemValue(options[Object.keys(options).find((k) => this.toFlatCase(k) === fKey) || ''], params), fKeys.join('.'), params) : undefined) : this.getItemValue(options, params);
    },
    toCSSVariables(variables = {}, prefix = 'p-') {
        const excludedKeyRegex = /^(variants|states|root)$/gi;

        const getValue = (value) => {
            // @todo: check from parent variables and create css variable
            const regex = /{([^}]+)}/g;

            return regex.test(value) ? `calc(${value.replace(regex, (v) => this.getOptionValue(variables, v.replace(/{|}/g, '')))})` : value;
        };

        const getVariables = (_vs = {}, _p = '') => {
            return Object.entries(_vs).reduce((acc, [k, v]) => {
                const px = _p + this.toKebabCase(k);

                if (this.isObject(v)) {
                    if (v.hasOwnProperty('value')) {
                        acc[`--${px}`] = getValue(v.value);
                    } else {
                        acc = {
                            ...acc,
                            ...getVariables(v, excludedKeyRegex.test(k) ? _p : `${px}-`)
                        };
                    }
                } else {
                    acc[`--${px}`] = getValue(v);
                }

                return acc;
            }, {});
        };

        const value = getVariables(variables, prefix);
        const css = `:root {${Object.entries(value).reduce((acc, [k, v]) => (acc += `\n\t${k}: ${v};`), '')}\n}`;

        return {
            value,
            css
        };
    }
};

function generate(filePath) {
    import(`./${filePath}?version=${Number(new Date())}`).then((module) => {
        if (module && module.default) {
            const paths = filePath.split('/');
            const dir = paths[paths.length - 2];
            const file = paths[paths.length - 1].toLowerCase();
            const name = file.replace('.js', '').toLowerCase();

            const outputFileDir = `${outputDir}/${dir}`;
            const outputFile = `${outputFileDir}/${file.replace('js', 'css')}`;

            const css = PrimeOneUtils.toCSSVariables(module.default, `p-${name}-`).css;

            !fs.existsSync(outputFileDir) && fs.mkdirSync(outputFileDir, { recursive: true });
            fs.writeFileSync(outputFile, css);
        }
    });
}

const watcher = chokidar.watch(inputDir, { ignored: /^\./, persistent: true });

watcher
    .on('add', function (path) {
        console.log('File', path, 'has been added');

        generate(path);
    })
    .on('change', function (path) {
        console.log('File', path, 'has been changed');

        generate(path);
    })
    .on('unlink', function (path) {
        console.log('File', path, 'has been removed');
    })
    .on('error', function (error) {
        console.error('Error happened', error);
    });

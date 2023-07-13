import chokidar from 'chokidar';
import fs from 'fs';

const inputDir = './themes/primeone/tokens/';
const outputDir = './themes/primeone/variables/';

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
        return value !== null && value instanceof Object && value.constructor === Object;
    },
    isString(value) {
        return value !== null && typeof value === 'string';
    },
    toFlatCase(str) {
        // convert snake, kebab, camel and pascal cases to flat case
        return this.isNotEmpty(str) && this.isString(str) ? str.replace(/(-|_)/g, '').toLowerCase() : str;
    },
    toKebabCase(str) {
        // convert snake, camel and pascal cases to kebab case
        return this.isNotEmpty(str) && this.isString(str)
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
        const getValue = (value) => {
            // @todo: check from parent variables
            const regex = /{([^}]+)}/g;

            return regex.test(value) ? `calc(${value.replace(regex, (v) => this.getOptionValue(variables, v.replace(/{|}/g, '')))})` : value;

            //return value.match(regex).map((v) => ObjectUtils.resolveFieldData(variables, v.replace(/{|}/g, '')));
        };

        const value = Object.entries(variables).reduce((acc, [k, v]) => {
            const px = prefix + this.toKebabCase(k);

            if (typeof v === 'object') {
                if (v.hasOwnProperty('value')) {
                    acc[`--${px}`] = getValue(v.value);
                } else {
                    acc = {
                        ...acc,
                        ...this.toCSSVariables(v, `${px}-`)
                    };
                }
            } else {
                acc[`--${px}`] = getValue(v);
            }

            return acc;
        }, {});

        const css = `:root {${Object.entries(value).reduce((acc, [k, v]) => (acc += `\n\t${k}: ${v};`), '')}\n}`;

        return {
            value,
            css
        };
    }
};

function generateVariables(filePath) {
    import(filePath).then((module) => {
        if (module && module.default) {
            const outputFile = filePath.replace(inputDir, outputDir).replace('js', 'css');
            const outputFileDir = outputDir + filePath.replace(outputFile, '').split('/')[0];

            const css = PrimeOneUtils.toCSSVariables(module.default).css;

            !fs.existsSync(outputFileDir) && fs.mkdirSync(outputFileDir);
            fs.writeFileSync(outputFile, css);
        }
    });
}

const watcher = chokidar.watch(inputDir, { ignored: /^\./, persistent: true });

watcher
    .on('add', function (path) {
        console.log('File', path, 'has been added');

        generateVariables(`./${path}`);
    })
    .on('change', function (path) {
        console.log('File', path, 'has been changed');

        generateVariables(`./${path}`);
    })
    .on('unlink', function (path) {
        console.log('File', path, 'has been removed');
    })
    .on('error', function (error) {
        console.error('Error happened', error);
    });

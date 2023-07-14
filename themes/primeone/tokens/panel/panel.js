export default {
    header: {
        color: '#343a40',
        background: '#f8f9fa',
        padding: {
            top: '1.25rem',
            right: '1.25rem',
            bottom: '1.25rem',
            left: '1.25rem'
        },
        border: {
            width: '1px',
            style: 'solid',
            color: '#dee2e6'
        }
    },
    title: {
        font: {
            size: 'inherit',
            weight: 700
        }
    },
    toggler: {
        width: '2rem',
        height: '2rem',
        color: '#6c757d',
        background: 'transparent',
        border: {
            width: 0,
            style: 'none',
            color: 'initial',
            radius: '50%'
        },
        states: {
            hover: {
                color: '#343a40',
                background: '#e9ecef',
                border: {
                    width: 'inherit',
                    style: 'inherit',
                    color: '#dee2e6'
                }
            },
            focus: {
                outline: {
                    color: 'var(--p-primary-light-color)',
                    style: 'none',
                    width: 0,
                    offset: 0
                },
                boxShadow: '0 0 0 0.2rem var(--p-primary-light-color)'
            }
        }
    },
    content: {
        color: '#495057',
        background: '#ffffff',
        padding: {
            top: '1.25rem',
            right: '1.25rem',
            bottom: '1.25rem',
            left: '1.25rem'
        },
        border: {
            width: '1px',
            style: 'solid',
            color: '#dee2e6'
        }
    },
    footer: {
        color: '#495057',
        background: '#ffffff',
        padding: {
            top: '0.75rem',
            right: '1.25rem',
            bottom: '0.75rem',
            left: '1.25rem'
        },
        border: {
            width: '1px',
            style: 'solid',
            color: '#dee2e6'
        }
    },
    variants: {
        /**
         * @todo maybe, calc(#{$panelHeaderPaddingTop} - .5rem)
         * calc(#{$panelHeaderPaddingRight} + calc(#{$panelHeaderPaddingLeft} - .5rem))
         */
        toggleable: {
            header: {
                padding: {
                    top: '0.75rem',
                    right: '1.25rem',
                    bottom: '0.75rem',
                    left: '1.25rem'
                }
            }
        }
    }
};

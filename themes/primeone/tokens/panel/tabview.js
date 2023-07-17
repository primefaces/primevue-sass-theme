export default {
    root: {
        gap: 0 // @todo update tabview component in core
    },
    nav: {
        background: '#ffffff',
        border: {
            width: '0 0 2px 0',
            style: 'solid',
            color: '#dee2e6'
        }
    },
    navButton: {
        color: 'var(--p-primary-color)',
        background: '#ffffff',
        boxShadow: '0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
        width: '3rem',
        states: {
            focus: {
                outline: {
                    color: 'var(--p-primary-light-color)',
                    style: 'none',
                    width: 0,
                    offset: 0
                },
                boxShadow: 'inset 0 0 0 0.2rem var(--p-primary-light-color)'
            }
        }
    },
    header: {
        color: '#6c757d',
        background: '#ffffff',
        font: {
            size: 'inherit',
            weight: 700
        },
        border: {
            width: '0 0 2px 0',
            style: 'solid',
            color: 'transparent transparent #dee2e6 transparent'
        },
        padding: {
            top: '1.25rem',
            right: '1.25rem',
            bottom: '1.25rem',
            left: '1.25rem'
        },
        margin: {
            top: 0,
            right: 0,
            bottom: '-2px',
            left: 0
        },
        states: {
            hover: {
                color: '#6c757d',
                background: '#ffffff',
                border: {
                    width: 'inherit',
                    style: 'inherit',
                    color: '#adb5bd'
                }
            },
            focus: {
                outline: {
                    color: 'var(--p-primary-light-color)',
                    style: 'none',
                    width: 0,
                    offset: 0
                },
                boxShadow: 'inset 0 0 0 0.2rem var(--p-primary-light-color)'
            },
            active: {
                color: 'var(--p-primary-color)',
                background: '#ffffff',
                border: {
                    width: 'inherit',
                    style: 'inherit',
                    color: 'var(--p-primary-color)'
                }
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
            width: 0,
            style: 'none',
            color: 'initial'
        }
    }
};

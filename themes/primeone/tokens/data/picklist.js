export default {
    controls: {
        padding: {
            top: '1.25rem',
            right: '1.25rem',
            bottom: '1.25rem',
            left: '1.25rem'
        }
    },
    header: {
        font: {
            size: 'inherit',
            weight: '700'
        },
        color: '#343a40',
        background: '#f8f9fa',
        border: {
            width: '1px',
            style: 'solid',
            color: '#dee2e6'
        },
        padding: {
            top: '1.25rem',
            right: '1.25rem',
            bottom: '1.25rem',
            left: '1.25rem'
        }
    },
    list: {
        color: '#495057',
        background: '#ffffff',
        border: {
            width: '1px',
            style: 'solid',
            color: '#dee2e6'
        },
        padding: {
            top: '0.75rem',
            right: '0',
            bottom: '0.75rem',
            left: '0'
        }
    },
    item: {
        color: '#495057',
        background: 'transparent',
        border: {
            width: '0',
            style: 'none',
            color: 'initial'
        },
        padding: {
            top: '0.75rem',
            right: '1.25rem',
            bottom: '0.75rem',
            left: '1.25rem'
        },
        margin: {
            top: '0',
            right: '0',
            bottom: '0',
            left: '0'
        },
        states: {
            hover: {
                color: '#495057',
                background: '#e9ecef'
            },
            focus: {
                color: '#495057',
                background: '#dee2e6'
            },
            active: {
                /* @todo */
                color: 'var(--p-primary-darker-color)',
                background: '#eff6ff',
                states: {
                    focus: {
                        background: 'rgba(var(--p-primary-color), 0.24)'
                    }
                }
            }
        }
    },
    variants: {
        stripedEven: {
            item: {
                background: '#fcfcfc',
                states: {
                    hover: {
                        background: '#e9ecef'
                    }
                }
            }
        }
    }
};

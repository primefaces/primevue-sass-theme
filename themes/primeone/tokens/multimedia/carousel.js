export default {
    navigator: {
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
                    color: 'transparent'
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
    indicators: {
        padding: {
            top: '1rem',
            right: '1rem',
            bottom: '1rem',
            left: '1rem'
        }
    },
    indicator: {
        states: {
            active: {
                affects: {
                    indicatorButton: {
                        color: 'var(--p-primary-darker-color)',
                        background: '#eff6ff'
                    }
                }
            }
        }
    },
    indicatorButton: {
        width: '2rem',
        height: '0.5rem',
        background: '#ced4da',
        border: {
            width: 'initial',
            style: 'initial',
            color: 'initial',
            radius: '0'
        },
        states: {
            hover: {
                background: '#adb5bd'
            }
        }
    }
};

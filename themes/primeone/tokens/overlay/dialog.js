export default {
    root: {
        border: {
            width: 0,
            style: 'none',
            color: 'initial'
        },
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
    },
    header: {
        color: '#343a40',
        background: '#ffffff',
        padding: {
            top: '1.5rem',
            right: '1.5rem',
            bottom: '1.5rem',
            left: '1.5rem'
        },
        border: {
            width: 0,
            style: 'none',
            color: 'initial'
        }
    },
    headerTitle: {
        font: {
            size: '1.25rem',
            weight: 700
        }
    },
    headerIcon: {
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
    content: {
        color: '#495057',
        background: '#ffffff',
        border: {
            width: '1px',
            style: 'solid',
            color: '#dee2e6'
        },
        padding: {
            top: 0,
            right: '1.5rem',
            bottom: '2rem',
            left: '1.5rem'
        }
    },
    footer: {
        color: '#495057',
        background: '#ffffff',
        padding: {
            top: 0,
            right: '1.5rem',
            bottom: '1.5rem',
            left: '1.5rem'
        },
        border: {
            width: '1px 0 0 0',
            style: 'solid',
            color: '#dee2e6'
        }
    }
};

export default {
    buttonbar: {
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
    chooseButton: {
        states: {
            focus: {
                outline: {
                    color: 'var(--p-primary-light-color)',
                    style: 'none',
                    width: '0',
                    offset: '0'
                },
                boxShadow: '0 0 0 0.2rem var(--p-primary-light-color)'
            },
            hover: {
                color: 'var(--p-primary-text-color)',
                background: 'var(--p-primary-dark-color)',
                border: {
                    width: 'initial',
                    style: 'initial',
                    color: 'var(--p-primary-dark-color)'
                }
            },
            active: {
                color: 'var(--p-primary-text-color)',
                background: 'var(--p-primary-darker-color)',
                border: {
                    width: 'initial',
                    style: 'initial',
                    color: 'var(--p-primary-darker-color)'
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
            width: '1px',
            style: 'solid',
            color: '#dee2e6'
        }
    },
    file: {
        padding: {
            top: '1rem',
            right: '1rem',
            bottom: '1rem',
            left: '1rem'
        },
        border: {
            width: '1px',
            style: 'solid',
            color: '#dee2e6'
        }
    },
    progressbar: {
        height: '0.25rem'
    }
};

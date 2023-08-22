export default {
    marker: {
        width: '1rem',
        height: '1rem',
        background: 'var(--p-primary-text-color)',
        border: {
            width: '2px',
            style: 'solid',
            color: 'var(--p-primary-color)',
            radius: '50%'
        }
    },
    connector: {
        background: '#dee2e6'
    },
    variants: {
        vertical: {
            content: {
                padding: {
                    top: '0',
                    right: '1rem',
                    bottom: '0',
                    left: '1rem'
                }
            },
            connector: {
                width: '2px'
            }
        },
        horizontal: {
            content: {
                padding: {
                    top: '1rem',
                    right: '0',
                    bottom: '1rem',
                    left: '0'
                }
            },
            connector: {
                height: '2px'
            }
        }
    }
};

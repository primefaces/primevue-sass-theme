export default {
    root: {
        gap: '4px' // @todo update accordion component in core.
    },
    header: {
        font: {
            size: 'initial',
            weight: 700
        },
        color: '#6c757d',
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
                boxShadow: 'inset 0 0 0 0.2rem var(--p-primary-light-color)'
            },
            active: {
                color: '#343a40',
                background: '#f8f9fa',
                border: {
                    width: 'inherit',
                    style: 'inherit',
                    color: '#dee2e6'
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
                    }
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
            width: 'inherit',
            style: 'inherit',
            color: '#dee2e6'
        }
    }
};

export default {
    root: {
        color: '#495057',
        background: '#ffffff',
        border: {
            width: '1px',
            style: 'solid',
            color: '#dee2e6'
        }
    },
    legend: {
        font: {
            size: 'inherit',
            weight: 700
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
    content: {
        padding: {
            top: '1.25rem',
            right: '1.25rem',
            bottom: '1.25rem',
            left: '1.25rem'
        }
    },
    variants: {
        toggleable: {
            legend: {
                states: {
                    hover: {
                        color: '#343a40',
                        background: '#e9ecef',
                        border: {
                            width: 'inherit',
                            style: 'inherit',
                            color: '#343a40'
                        },
                        outline: {
                            color: 'var(--p-primary-light-color)',
                            style: 'none',
                            width: 0,
                            offset: 0
                        },
                        boxShadow: '0 0 0 0.2rem var(--p-primary-light-color)'
                    }
                }
            }
        }
    }
};

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
    gutter: {
        background: '#f8f9fa'
    },
    gutterHandle: {
        background: '#dee2e6',
        states: {
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
    }
};

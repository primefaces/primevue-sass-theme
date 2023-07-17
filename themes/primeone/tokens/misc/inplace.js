export default {
    display: {
        padding: {
            top: '0.75rem',
            right: '0.75rem',
            bottom: '0.75rem',
            left: '0.75rem'
        },
        states: {
            hover: {
                color: '#495057',
                background: '#e9ecef'
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
    }
};

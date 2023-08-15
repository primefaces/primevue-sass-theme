export default {
    node: {
        states: {
            hover: {
                color: '#495057',
                background: '#e9ecef'
            },
            active: {
                color: '#1D4ED8',
                background: '#EFF6FF'
            }
        }
    },
    nodeTogglerIcon: {
        states: {
            active: {
                color: '#1D4ED8'
            }
        }
    },
    lineDown: {
        background: '#dee2e6'
    },
    lineLeft: {
        border: {
            width: '1px',
            style: 'solid',
            color: '#dee2e6'
        }
    },
    lineTop: {
        border: {
            width: '1px',
            style: 'solid',
            color: '#dee2e6'
        }
    },
    node: {
        color: '#495057',
        background: '#ffffff',
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
    nodeToggler: {
        color: 'inherit',
        background: 'inherit',
        border: {
            width: 'inherit',
            style: 'inherit',
            color: 'inherit',
            radius: '50%'
        },
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

export default {
    root: {
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
    node: {
        padding: {
            top: '0.143rem',
            right: '0.143rem',
            bottom: '0.143rem',
            left: '0.143rem'
        }
    },
    content: {
        padding: {
            top: '0.5rem',
            right: '0.5rem',
            bottom: '0.5rem',
            left: '0.5rem'
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
            },
            active: {
                color: 'var(--p-primary-darker-color)',
                background: '#eff6ff',
                affects: {
                    toggler: {
                        color: 'var(--p-primary-darker-color)',
                        states: {
                            hover: {
                                color: 'var(--p-primary-darker-color)'
                            }
                        }
                    }
                }
            }
        }
    },
    toggler: {
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
            },
            active: {
                color: 'var(--p-primary-darker-color)'
            }
        }
    },
    nodeIcon: {
        color: '#6c757d'
    },
    checkboxIcon: {
        color: '#495057'
    }
};

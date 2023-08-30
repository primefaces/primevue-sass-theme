export default {
    button: {
        width: '4rem',
        height: '4rem'
    },
    buttonIcon: {
        font: {
            size: '1.3rem',
            weight: 'normal'
        }
    },
    menu: {
        outline: {
            color: 'initial',
            style: 'none',
            width: '0',
            offset: 'initial'
        }
    },
    menuitem: {
        states: {
            focus: {
                affects: {
                    action: {
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
    },
    action: {
        width: '3rem',
        height: '3rem',
        color: '#ffffff',
        background: '#495057',
        states: {
            hover: {
                color: '#ffffff',
                background: '#022354'
            }
        }
    },
    variants: {
        directionUp: {
            menuitem: {
                margin: {
                    top: '0.25rem',
                    right: '0',
                    bottom: '0.25rem',
                    left: '0'
                }
            }
        },
        directionDown: {
            menuitem: {
                margin: {
                    top: '0.25rem',
                    right: '0',
                    bottom: '0.25rem',
                    left: '0'
                }
            }
        },
        directionLeft: {
            menuitem: {
                margin: {
                    top: '0',
                    right: '0.25rem',
                    bottom: '0',
                    left: '0.25rem'
                }
            }
        },
        directionRight: {
            menuitem: {
                margin: {
                    top: '0',
                    right: '0.25rem',
                    bottom: '0',
                    left: '0.25rem'
                }
            }
        },
        mask: {
            background: 'rgba(0, 0, 0, 0.4)'
        }
    }
};

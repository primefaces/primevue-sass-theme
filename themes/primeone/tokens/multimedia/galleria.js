export default {
    closeButton: {
        width: '4rem',
        height: '4rem',
        color: '#f8f9fa',
        background: 'transparent',
        margin: {
            top: '0.5rem',
            right: '0.5rem',
            bottom: '0.5rem',
            left: '0.5rem'
        },
        border: {
            width: 'initial',
            style: 'initial',
            type: 'initial',
            radius: '50%'
        },
        states: {
            hover: {
                color: '#f8f9fa',
                background: 'rgba(255, 255, 255, 0.1)'
            }
        }
    },
    itemNavigator: {
        width: '4rem',
        height: '4rem',
        color: '#f8f9fa',
        background: 'transparent',
        margin: {
            top: '0',
            right: '0.5rem',
            bottom: '0',
            left: '0.5rem'
        },
        states: {
            hover: {
                color: '#f8f9fa',
                background: 'rgba(255, 255, 255, 0.1)'
            }
        }
    },
    caption: {
        color: '#f8f9fa',
        background: 'rgba(0, 0, 0, 0.5)',
        padding: {
            top: '1rem',
            right: '1rem',
            bottom: '1rem',
            left: '1rem'
        }
    },
    indicators: {
        padding: {
            top: '1rem',
            right: '1rem',
            bottom: '1rem',
            left: '1rem'
        }
    },
    indicatorButton: {
        width: '1rem',
        height: '1rem',
        background: '#ced4da',
        border: {
            width: 'initial',
            style: 'initial',
            color: 'initial',
            radius: '50%'
        },
        states: {
            hover: {
                background: '#adb5bd'
            },
            active: {
                color: 'var(--p-primary-darker-color)',
                background: '#eff6ff'
            }
        }
    },
    variants: {
        indicatorOnItem: {
            indicators: {
                background: 'rgba(0, 0, 0, 0.5)'
            },
            indicatorButton: {
                background: 'rgba(255, 255, 255, 0.4)',
                states: {
                    hover: {
                        background: 'rgba(255, 255, 255, 0.6)'
                    },
                    active: {
                        color: 'var(--p-primary-darker-color)',
                        background: '#eff6ff'
                    }
                }
            }
        }
    },
    thumbnailContainer: {
        background: 'rgba(0, 0, 0, 0.9)',
        padding: {
            top: '1rem',
            right: '0.25rem',
            bottom: '1rem',
            left: '0.25rem'
        }
    },
    thumbnailNavigator: {
        width: '2rem',
        height: '2rem',
        color: '#f8f9fa',
        background: 'transparent',
        border: {
            width: 'initial',
            style: 'initial',
            color: 'initial',
            radius: '50%'
        },
        states: {
            hover: {
                color: '#f8f9fa',
                background: 'rgba(255, 255, 255, 0.1)'
            }
        }
    },
    thumbnailItemContent: {
        states: {
            focus: {
                outline: {
                    color: 'var(--p-primary-light-color)',
                    style: 'none',
                    width: '0',
                    offset: '0'
                },
                boxShadow: '0 0 0 0.2rem var(--p-primary-light-color)'
            }
        }
    },
    mask: {
        background: 'rgba(0, 0, 0, 0.9)'
    }
};

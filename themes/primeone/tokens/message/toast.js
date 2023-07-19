export default {
    root: {
        opacity: 0.9
    },
    message: {
        margin: {
            top: 0,
            right: 0,
            bottom: '1rem',
            left: 0
        },
        boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.1)'
    },
    content: {
        padding: {
            top: '1rem',
            right: '1rem',
            bottom: '1rem',
            left: '1rem'
        },
        border: {
            width: '0 0 0 6px',
            style: 'initial',
            color: 'initial'
        }
    },
    text: {
        margin: {
            top: 0,
            right: 0,
            bottom: 0,
            left: '1rem'
        }
    },
    summary: {
        font: {
            size: '1rem',
            weight: 700
        }
    },
    detail: {
        margin: {
            top: 'var(--p-inline-spacing)',
            right: 0,
            bottom: 0,
            left: 0
        }
    },
    closeIcon: {
        root: {
            width: '2rem',
            height: '2rem',
            background: 'transparent',
            border: {
                width: 'initial',
                style: 'initial',
                color: 'initial',
                radius: '50%'
            }
        },
        states: {
            hover: {
                background: 'rgba(255, 255, 255, 0.3)'
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
    },
    variants: {
        message: {
            info: {
                root: {
                    color: '#696cff',
                    background: '#e9e9ff',
                    border: {
                        width: '0 0 0 6px',
                        style: 'solid',
                        color: '#696cff'
                    }
                },
                icon: {
                    color: '#696cff'
                }
            },
            success: {
                root: {
                    color: '#1ea97c',
                    background: '#e4f8f0',
                    border: {
                        width: '0 0 0 6px',
                        style: 'solid',
                        color: '#1ea97c'
                    }
                },
                icon: {
                    color: '#1ea97c'
                }
            },
            warn: {
                root: {
                    color: '#cc8925',
                    background: '#fff2e2',
                    border: {
                        width: '0 0 0 6px',
                        style: 'solid',
                        color: '#cc8925'
                    }
                },
                icon: {
                    color: '#cc8925'
                }
            },
            error: {
                root: {
                    color: '#ff5757',
                    background: '#ffe7e6',
                    border: {
                        width: '0 0 0 6px',
                        style: 'solid',
                        color: '#ff5757'
                    }
                },
                icon: {
                    color: '#ff5757'
                }
            }
        }
    }
};

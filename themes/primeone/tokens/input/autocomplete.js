export default {
    root: {
        states: {
            hover: {
                affects: {
                    container: {
                        border: {
                            width: 'inherit',
                            style: 'inherit',
                            color: 'var(--p-primary-color)'
                        }
                    }
                }
            },
            focus: {
                affects: {
                    container: {
                        outline: {
                            color: 'var(--p-primary-light-color)',
                            style: 'none',
                            width: 0,
                            offset: 0
                        },
                        boxShadow: '0 0 0 0.2rem var(--p-primary-light-color)',
                        border: {
                            width: 'inherit',
                            style: 'inherit',
                            color: 'var(--p-primary-color)'
                        }
                    }
                }
            }
        }
    },
    loadingIcon: {
        right: '0.75rem'
    },
    container: {
        padding: {
            top: '0.375rem',
            right: '0.75rem',
            bottom: '0.375rem',
            left: '0.75rem'
        }
    },
    inputToken: {
        padding: {
            top: '0.375rem',
            right: '0',
            bottom: '0.375rem',
            left: '0'
        }
    },
    token: {
        color: 'var(--p-color)',
        background: '#dee2e6',
        padding: {
            top: '0.375rem',
            right: '0.75rem',
            bottom: '0.375rem',
            left: '0.75rem'
        },
        border: {
            width: 'inherit',
            style: 'inherit',
            color: 'inherit',
            radius: '16px'
        },
        states: {
            focus: {
                color: 'var(--p-color)',
                background: '#ced4da'
            }
        }
    },
    panel: {
        color: '#495057',
        background: '#ffffff',
        border: {
            width: '0',
            style: 'none',
            color: 'initial'
        },
        boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.1)'
    },
    list: {
        padding: {
            top: '0.75rem',
            right: '0',
            bottom: '0.75rem',
            left: '0'
        }
    },
    item: {
        color: '#495057',
        background: 'transparent',
        border: {
            width: '0',
            style: 'none',
            color: 'initial',
            radius: '0'
        },
        padding: {
            top: '0.75rem',
            right: '1.25rem',
            bottom: '0.75rem',
            left: '1.25rem'
        },
        margin: {
            top: '0',
            right: '0',
            bottom: '0',
            left: '0'
        },
        states: {
            active: {
                color: 'var(--p-primary-darker-color)',
                background: '#eff6ff',
                affects: {
                    root: {
                        states: {
                            focus: {
                                background: 'rgba(var(--p-primary-color), 0.24)'
                            }
                        }
                    }
                }
            },
            focus: {
                color: '#495057',
                background: '#dee2e6'
            },
            hover: {
                color: '#495057',
                background: '#e9ecef'
            }
        }
    },
    itemGroup: {
        font: {
            size: 'inherit',
            weight: '700'
        },
        color: '#343a40',
        background: '#ffffff',
        padding: {
            top: '0.75rem',
            right: '1.25rem',
            bottom: '0.75rem',
            left: '1.25rem'
        },
        margin: {
            top: '0',
            right: '0',
            bottom: '0',
            left: '0'
        }
    },
    variants: {
        dropdown: {
            loadingIcon: {
                right: '3.75rem'
            }
        },
        invalid: {
            input: {
                border: {
                    width: 'inherit',
                    style: 'inherit',
                    color: '#e24c4c'
                }
            }
        }
    }
};

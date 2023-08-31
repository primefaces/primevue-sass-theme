export default {
    variants: {
        outlined: {
            button: {
                color: 'color-mix(in srgb, var(--p-primary-color), transparent 100%)',
                background: 'transparent',
                border: {
                    width: '1px',
                    style: 'solid',
                    color: 'inherit'
                },
                states: {
                    hover: {
                        color: 'var(--p-primary-color)',
                        background: 'color-mix(in srgb, var(--p-primary-color), transparent 4%)'
                    },
                    active: {
                        color: 'var(--p-primary-color)',
                        background: 'color-mix(in srgb, var(--p-primary-color), transparent 16%)'
                    }
                }
            }
        },
        plain: {
            button: {
                color: '#6c757d',
                border: {
                    width: 'inherit',
                    style: 'inherit',
                    color: '#6c757d'
                },
                states: {
                    hover: {
                        color: '#6c757d',
                        background: '#e9ecef'
                    },
                    active: {
                        color: '#6c757d',
                        background: '#dee2e6'
                    }
                }
            }
        },
        text: {
            button: {
                color: 'var(--p-primary-color)',
                background: 'transparent',
                border: {
                    width: 'inherit',
                    style: 'inherit',
                    color: 'transparent'
                },
                states: {
                    hover: {
                        color: 'var(--p-primary-color)',
                        background: 'color-mix(in srgb, var(--p-primary-color), transparent 4%)',
                        border: {
                            width: 'inherit',
                            style: 'inherit',
                            color: 'transparent'
                        }
                    },
                    active: {
                        color: 'var(--p-primary-color)',
                        background: 'color-mix(in srgb, var(--p-primary-color), transparent 16%)',
                        border: {
                            width: 'inherit',
                            style: 'inherit',
                            color: 'transparent'
                        }
                    }
                }
            }
        },
        raised: {
            root: {
                boxShadow: '0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12) '
            }
        },
        rounded: {
            root: {
                border: {
                    width: 'inherit',
                    style: 'inherit',
                    color: 'inherit',
                    radius: '2rem'
                }
            },
            button: {
                border: {
                    width: 'inherit',
                    style: 'inherit',
                    color: 'inherit',
                    radius: '2rem'
                }
            }
        },
        small: {
            button: {
                font: {
                    size: '0.875rem',
                    weight: 'inherit'
                },
                padding: {
                    top: '0.65625rem',
                    right: '1.09375rem',
                    bottom: '0.65625rem',
                    left: '1.09375rem'
                }
            },
            buttonIcon: {
                font: {
                    size: '0.875rem',
                    weight: 'inherit'
                }
            }
        },
        large: {
            button: {
                font: {
                    size: '1.25rem',
                    weight: 'inherit'
                },
                padding: {
                    top: '0.9375rem',
                    right: '1.5625rem',
                    bottom: '0.9375rem',
                    left: '1.5625rem'
                }
            },
            icon: {
                font: {
                    size: '1.25rem',
                    weight: 'inherit'
                }
            }
        },
        secondary: {
            variants: {
                outlined: {
                    button: {
                        color: '#64748b',
                        background: 'transparent',
                        border: {
                            width: '1px',
                            style: 'solid',
                            color: '#64748b'
                        },
                        states: {
                            hover: {
                                color: '#64748b',
                                background: 'rgba(100, 116, 139, 0.04)'
                            },
                            active: {
                                color: '#64748b',
                                background: 'rgba(100, 116, 139, 0.16)'
                            }
                        }
                    }
                },
                text: {
                    button: {
                        color: '#64748b',
                        background: 'transparent',
                        border: {
                            width: 'inherit',
                            style: 'inherit',
                            color: 'transparent'
                        },
                        states: {
                            hover: {
                                color: '#64748b',
                                background: 'rgba(100, 116, 139, 0.04)',
                                border: {
                                    width: 'inherit',
                                    style: 'inherit',
                                    color: 'transparent'
                                }
                            },
                            active: {
                                color: '#64748b',
                                background: 'rgba(100, 116, 139, 0.16)',
                                border: {
                                    width: 'inherit',
                                    style: 'inherit',
                                    color: 'transparent'
                                }
                            }
                        }
                    }
                }
            }
        },
        info: {
            variants: {
                outlined: {
                    button: {
                        color: '#64748b',
                        background: 'transparent',
                        border: {
                            width: '1px',
                            style: 'solid',
                            color: 'inherit'
                        },
                        states: {
                            hover: {
                                color: '#64748b',
                                background: 'rgba(100, 116, 139, 0.04)'
                            },
                            active: {
                                color: '#64748b',
                                background: 'rgba(100, 116, 139, 0.16)'
                            }
                        }
                    }
                },
                text: {
                    button: {
                        color: '#64748b',
                        background: 'transparent',
                        border: {
                            width: 'inherit',
                            style: 'inherit',
                            color: 'transparent'
                        },
                        states: {
                            hover: {
                                color: '#64748b',
                                background: 'rgba(100, 116, 139, 0.04)',
                                border: {
                                    width: 'inherit',
                                    style: 'inherit',
                                    color: 'transparent'
                                }
                            },
                            active: {
                                color: '#64748b',
                                background: 'rgba(100, 116, 139, 0.16)',
                                border: {
                                    width: 'inherit',
                                    style: 'inherit',
                                    color: 'transparent'
                                }
                            }
                        }
                    }
                }
            }
        },
        success: {
            variants: {
                outlined: {
                    button: {
                        color: '#22c55e',
                        background: 'transparent',
                        border: {
                            width: '1px',
                            style: 'solid',
                            color: 'inherit'
                        },
                        states: {
                            hover: {
                                color: '#22c55e',
                                background: 'rgba(34, 197, 94, 0.04)'
                            },
                            active: {
                                color: '#22c55e',
                                background: 'rgba(34, 197, 94, 0.16)'
                            }
                        }
                    }
                },
                text: {
                    button: {
                        color: '#22c55e',
                        background: 'transparent',
                        border: {
                            width: 'inherit',
                            style: 'inherit',
                            color: 'transparent'
                        },
                        states: {
                            hover: {
                                color: '#22c55e',
                                background: 'rgba(34, 197, 94, 0.04)',
                                border: {
                                    width: 'inherit',
                                    style: 'inherit',
                                    color: 'transparent'
                                }
                            },
                            active: {
                                color: '#22c55e',
                                background: 'rgba(34, 197, 94, 0.16)',
                                border: {
                                    width: 'inherit',
                                    style: 'inherit',
                                    color: 'transparent'
                                }
                            }
                        }
                    }
                }
            }
        },
        warning: {
            variants: {
                outlined: {
                    button: {
                        color: '#f59e0b',
                        background: 'transparent',
                        border: {
                            width: '1px',
                            style: 'solid',
                            color: 'inherit'
                        },
                        states: {
                            hover: {
                                color: '#f59e0b',
                                background: 'rgba(245, 158, 11, 0.04)'
                            },
                            active: {
                                color: '#f59e0b',
                                background: 'rgba(245, 158, 11, 0.16)'
                            }
                        }
                    }
                },
                text: {
                    button: {
                        color: '#f59e0b',
                        background: 'transparent',
                        border: {
                            width: 'inherit',
                            style: 'inherit',
                            color: 'transparent'
                        },
                        states: {
                            hover: {
                                color: '#f59e0b',
                                background: 'rgba(245, 158, 11, 0.04)',
                                border: {
                                    width: 'inherit',
                                    style: 'inherit',
                                    color: 'transparent'
                                }
                            },
                            active: {
                                color: '#f59e0b',
                                background: 'rgba(245, 158, 11, 0.16)',
                                border: {
                                    width: 'inherit',
                                    style: 'inherit',
                                    color: 'transparent'
                                }
                            }
                        }
                    }
                }
            }
        },
        help: {
            variants: {
                outlined: {
                    button: {
                        color: '#a855f7',
                        background: 'transparent',
                        border: {
                            width: '1px',
                            style: 'solid',
                            color: 'inherit'
                        },
                        states: {
                            hover: {
                                color: '#a855f7',
                                background: 'rgba(168, 85, 247, 0.04)'
                            },
                            active: {
                                color: '#a855f7',
                                background: 'rgba(168, 85, 247, 0.16)'
                            }
                        }
                    }
                },
                text: {
                    button: {
                        color: '#a855f7',
                        background: 'transparent',
                        border: {
                            width: 'inherit',
                            style: 'inherit',
                            color: 'transparent'
                        },
                        states: {
                            hover: {
                                color: '#a855f7',
                                background: 'rgba(168, 85, 247, 0.04)',
                                border: {
                                    width: 'inherit',
                                    style: 'inherit',
                                    color: 'transparent'
                                }
                            },
                            active: {
                                color: '#a855f7',
                                background: 'rgba(168, 85, 247, 0.16)',
                                border: {
                                    width: 'inherit',
                                    style: 'inherit',
                                    color: 'transparent'
                                }
                            }
                        }
                    }
                }
            }
        },
        danger: {
            variants: {
                outlined: {
                    button: {
                        color: '#ef4444',
                        background: 'transparent',
                        border: {
                            width: '1px',
                            style: 'solid',
                            color: 'inherit'
                        },
                        states: {
                            hover: {
                                color: '#ef4444',
                                background: 'rgba(239, 68, 68, 0.04)'
                            },
                            active: {
                                color: '#ef4444',
                                background: 'rgba(239, 68, 68, 0.16)'
                            }
                        }
                    }
                },
                text: {
                    button: {
                        color: '#ef4444',
                        background: 'transparent',
                        border: {
                            width: 'inherit',
                            style: 'inherit',
                            color: 'transparent'
                        },
                        states: {
                            hover: {
                                color: '#ef4444',
                                background: 'rgba(239, 68, 68, 0.04)',
                                border: {
                                    width: 'inherit',
                                    style: 'inherit',
                                    color: 'transparent'
                                }
                            },
                            active: {
                                color: '#ef4444',
                                background: 'rgba(239, 68, 68, 0.16)',
                                border: {
                                    width: 'inherit',
                                    style: 'inherit',
                                    color: 'transparent'
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

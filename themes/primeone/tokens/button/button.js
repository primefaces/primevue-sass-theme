export default {
    root: {
        color: 'var(--p-primary-text-color)',
        background: 'var(--p-primary-color)',
        border: {
            width: '1px',
            style: 'solid',
            color: 'var(--p-primary-color)'
        },
        padding: {
            top: '0.75rem',
            right: '1.25rem',
            bottom: '0.75rem',
            left: '1.25rem'
        },
        states: {
            hover: {
                color: 'var(--p-primary-text-color)',
                background: 'var(--p-primary-dark-color)',
                border: {
                    width: 'inherit',
                    style: 'inherit',
                    color: 'var(--p-primary-dark-color)'
                }
            },
            active: {
                color: 'var(--p-primary-text-color)',
                background: 'var(--p-primary-darker-color)',
                border: {
                    width: 'inherit',
                    style: 'inherit',
                    color: 'var(--p-primary-darker-color)'
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
            }
        }
    },
    badge: {
        minWidth: '1rem',
        height: '1rem',
        lineHeight: '1rem',
        color: 'var(--p-primary-color)',
        background: 'var(--p-primary-text-color)'
    },
    variants: {
        outlined: {
            root: {
                color: 'var(--p-primary-color)',
                background: 'transparent',
                border: {
                    width: '1px',
                    style: 'solid',
                    color: 'initial'
                },
                states: {
                    hover: {
                        color: 'var(--p-primary-color)',
                        background: 'color-mix(in srgb, var(--p-primary-color), transparent 4%)',
                        border: {
                            width: '1px',
                            style: 'solid',
                            color: 'inherit'
                        }
                    },
                    active: {
                        color: 'var(--p-primary-color)',
                        background: 'color-mix(in srgb, var(--p-primary-color), transparent 16%)',
                        border: {
                            width: '1px',
                            style: 'solid',
                            color: 'inherit'
                        }
                    }
                }
            }
        },
        plain: {
            root: {
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
            root: {
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
            }
        },
        iconOnly: {
            root: {
                width: '3rem',
                padding: {
                    top: '0.75rem',
                    right: '0',
                    bottom: '0.75rem',
                    left: '0'
                }
            },
            icon: {
                margin: {
                    top: '0',
                    right: '0',
                    bottom: '0',
                    left: '0'
                }
            },
            variants: {
                rounded: {
                    height: '3rem',
                    border: {
                        width: 'inherit',
                        style: 'inherit',
                        color: 'inherit',
                        radius: '50%'
                    }
                }
            }
        },
        small: {
            root: {
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
            icon: {
                font: {
                    size: '0.875rem',
                    weight: 'inherit'
                }
            }
        },
        large: {
            root: {
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
            color: '#ffffff',
            background: '#64748b',
            border: {
                width: '1px',
                style: 'solid',
                color: '#64748b'
            },
            states: {
                hover: {
                    color: '#ffffff',
                    background: '#475569',
                    border: {
                        width: 'inherit',
                        style: 'inherit',
                        color: '#475569'
                    }
                },
                focus: {
                    boxShadow: '0 0 0 0.2rem #e2e8f0'
                },
                active: {
                    color: '#ffffff',
                    background: '#334155',
                    border: {
                        width: 'inherit',
                        style: 'inherit',
                        color: '#334155'
                    }
                }
            },
            variants: {
                outlined: {
                    root: {
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
                                background: 'rgba(100, 116, 139, 0.04)',
                                border: {
                                    width: '1px',
                                    style: 'solid',
                                    color: 'inherit'
                                }
                            },
                            active: {
                                color: '#64748b',
                                background: 'rgba(100, 116, 139, 0.16)',
                                border: {
                                    width: '1px',
                                    style: 'solid',
                                    color: 'inherit'
                                }
                            }
                        }
                    }
                },
                text: {
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
        },
        info: {
            color: '#ffffff',
            background: '#64748b',
            border: {
                width: '1px',
                style: 'solid',
                color: '#64748b'
            },
            states: {
                hover: {
                    color: '#ffffff',
                    background: '#475569',
                    border: {
                        width: 'inherit',
                        style: 'inherit',
                        color: '#475569'
                    }
                },
                focus: {
                    boxShadow: '0 0 0 0.2rem #e2e8f0'
                },
                active: {
                    color: '#ffffff',
                    background: '#334155',
                    border: {
                        width: 'inherit',
                        style: 'inherit',
                        color: '#334155'
                    }
                }
            },
            variants: {
                outlined: {
                    root: {
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
                                background: 'rgba(100, 116, 139, 0.04)',
                                border: {
                                    width: '1px',
                                    style: 'solid',
                                    color: 'inherit'
                                }
                            },
                            active: {
                                color: '#64748b',
                                background: 'rgba(100, 116, 139, 0.16)',
                                border: {
                                    width: '1px',
                                    style: 'solid',
                                    color: 'inherit'
                                }
                            }
                        }
                    }
                },
                text: {
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
        },
        success: {
            color: '#ffffff',
            background: '#22c55e',
            border: {
                width: '1px',
                style: 'solid',
                color: '#22c55e'
            },
            states: {
                hover: {
                    color: '#ffffff',
                    background: '#16a34a',
                    border: {
                        width: 'inherit',
                        style: 'inherit',
                        color: '#16a34a'
                    }
                },
                focus: {
                    boxShadow: '0 0 0 0.2rem #bbf7d0'
                },
                active: {
                    color: '#ffffff',
                    background: '#15803d',
                    border: {
                        width: 'inherit',
                        style: 'inherit',
                        color: '#15803d'
                    }
                }
            },
            variants: {
                outlined: {
                    root: {
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
                                background: 'rgba(34, 197, 94, 0.04)',
                                border: {
                                    width: '1px',
                                    style: 'solid',
                                    color: 'inherit'
                                }
                            },
                            active: {
                                color: '#22c55e',
                                background: 'rgba(34, 197, 94, 0.16)',
                                border: {
                                    width: '1px',
                                    style: 'solid',
                                    color: 'inherit'
                                }
                            }
                        }
                    }
                },
                text: {
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
        },
        warning: {
            color: '#ffffff',
            background: '#f59e0b',
            border: {
                width: '1px',
                style: 'solid',
                color: '#f59e0b'
            },
            states: {
                hover: {
                    color: '#ffffff',
                    background: '#d97706',
                    border: {
                        width: 'inherit',
                        style: 'inherit',
                        color: '#d97706'
                    }
                },
                focus: {
                    boxShadow: '0 0 0 0.2rem #fde68a'
                },
                active: {
                    color: '#ffffff',
                    background: '#b45309',
                    border: {
                        width: 'inherit',
                        style: 'inherit',
                        color: '#b45309'
                    }
                }
            },
            variants: {
                outlined: {
                    root: {
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
                                background: 'rgba(245, 158, 11, 0.04)',
                                border: {
                                    width: '1px',
                                    style: 'solid',
                                    color: 'inherit'
                                }
                            },
                            active: {
                                color: '#f59e0b',
                                background: 'rgba(245, 158, 11, 0.16)',
                                border: {
                                    width: '1px',
                                    style: 'solid',
                                    color: 'inherit'
                                }
                            }
                        }
                    }
                },
                text: {
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
        },
        help: {
            color: '#ffffff',
            background: '#a855f7',
            border: {
                width: '1px',
                style: 'solid',
                color: '#a855f7'
            },
            states: {
                hover: {
                    color: '#ffffff',
                    background: '#9333ea',
                    border: {
                        width: 'inherit',
                        style: 'inherit',
                        color: '#9333ea'
                    }
                },
                focus: {
                    boxShadow: '0 0 0 0.2rem #e9d5ff'
                },
                active: {
                    color: '#ffffff',
                    background: '#7e22ce',
                    border: {
                        width: 'inherit',
                        style: 'inherit',
                        color: '#7e22ce'
                    }
                }
            },
            variants: {
                outlined: {
                    root: {
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
                                background: 'rgba(168, 85, 247, 0.04)',
                                border: {
                                    width: '1px',
                                    style: 'solid',
                                    color: 'inherit'
                                }
                            },
                            active: {
                                color: '#a855f7',
                                background: 'rgba(168, 85, 247, 0.16)',
                                border: {
                                    width: '1px',
                                    style: 'solid',
                                    color: 'inherit'
                                }
                            }
                        }
                    }
                },
                text: {
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
        },
        danger: {
            color: '#ffffff',
            background: '#ef4444',
            border: {
                width: '1px',
                style: 'solid',
                color: '#ef4444'
            },
            states: {
                hover: {
                    color: '#ffffff',
                    background: '#dc2626',
                    border: {
                        width: 'inherit',
                        style: 'inherit',
                        color: '#dc2626'
                    }
                },
                focus: {
                    boxShadow: '0 0 0 0.2rem #e2e8f0'
                },
                active: {
                    color: '#ffffff',
                    background: '#b91c1c',
                    border: {
                        width: 'inherit',
                        style: 'inherit',
                        color: '#b91c1c'
                    }
                }
            },
            variants: {
                outlined: {
                    root: {
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
                                background: 'rgba(239, 68, 68, 0.04)',
                                border: {
                                    width: '1px',
                                    style: 'solid',
                                    color: 'inherit'
                                }
                            },
                            active: {
                                color: '#ef4444',
                                background: 'rgba(239, 68, 68, 0.16)',
                                border: {
                                    width: '1px',
                                    style: 'solid',
                                    color: 'inherit'
                                }
                            }
                        }
                    }
                },
                text: {
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
        },
        link: {
            color: 'var(--p-primary-darker-color)',
            background: 'transparent',
            border: {
                width: 'inherit',
                style: 'inherit',
                color: 'transparent'
            },
            states: {
                hover: {
                    color: 'var(--p-primary-darker-color)',
                    background: 'transparent',
                    border: {
                        width: 'inherit',
                        style: 'inherit',
                        color: 'transparent'
                    },
                    affects: {
                        label: {
                            textDecoration: 'underline'
                        }
                    }
                },
                focus: {
                    background: 'transparent',
                    boxShadow: '0 0 0 0.2rem var(--p-primary-light-color)',
                    border: {
                        width: 'inherit',
                        style: 'inherit',
                        color: 'transparent'
                    }
                },
                active: {
                    color: 'var(--p-primary-darker-color)',
                    background: 'transparent',
                    border: {
                        width: 'inherit',
                        style: 'inherit',
                        color: 'transparent'
                    }
                }
            }
        }
    }
};

export default {
    paginator: {
        variants: {
            top: {
                root: {
                    border: {
                        width: '0 0 1px 0',
                        style: 'inherit',
                        color: 'inherit',
                        radius: '0'
                    }
                }
            },
            bottom: {
                root: {
                    border: {
                        width: '0 0 1px 0',
                        style: 'inherit',
                        color: 'inherit',
                        radius: '0'
                    }
                }
            }
        }
    },
    header: {
        font: {
            size: 'inherit',
            weight: '700'
        },
        color: '#343a40',
        background: '#f8f9fa',
        border: {
            width: '1px 0 1px 0',
            style: 'solid',
            color: '#dee2e6'
        },
        padding: {
            top: '1rem',
            right: '1rem',
            bottom: '1rem',
            left: '1rem'
        }
    },
    footer: {
        font: {
            size: 'inherit',
            weight: '700'
        },
        color: '#343a40',
        background: '#f8f9fa',
        border: {
            width: '0 0 1px 0',
            style: 'solid',
            color: '#dee2e6'
        },
        padding: {
            top: '1rem',
            right: '1rem',
            bottom: '1rem',
            left: '1rem'
        }
    },
    headerCell: {
        font: {
            size: 'inherit',
            weight: '700'
        },
        textAlign: 'left',
        color: '#343a40',
        background: '#f8f9fa',
        border: {
            width: '0 0 1px 0',
            style: 'solid',
            color: '#dee2e6'
        },
        padding: {
            top: '1rem',
            right: '1rem',
            bottom: '1rem',
            left: '1rem'
        },
        states: {
            hover: {
                color: '#343a40',
                background: '#e9ecef',
                affects: {
                    sortIcon: {
                        color: '#343a40'
                    }
                }
            },
            active: {
                color: 'var(--p-primary-darker-color)',
                background: '#eff6ff',
                affects: {
                    sortIcon: {
                        color: 'var(--p-primary-darker-color)'
                    }
                },
                states: {
                    hover: {
                        color: 'var(--p-primary-darker-color)',
                        background: '#eff6ff',
                        affects: {
                            sortIcon: {
                                color: 'var(--p-primary-darker-color)'
                            }
                        }
                    }
                }
            },
            focus: {
                boxShadow: 'inset 0 0 0 0.15rem var(--p-primary-light-color)',
                outline: {
                    color: 'initial',
                    style: 'none',
                    width: '0',
                    offset: 'initial'
                }
            }
        }
    },
    footerCell: {
        font: {
            size: 'inherit',
            weight: '700'
        },
        textAlign: 'left',
        color: '#343a40',
        background: '#f8f9fa',
        border: {
            width: '0 0 1px 0',
            style: 'solid',
            color: '#dee2e6'
        },
        padding: {
            top: '1rem',
            right: '1rem',
            bottom: '1rem',
            left: '1rem'
        }
    },
    sortIcon: {
        color: '#343a40'
    },
    sortBadge: {
        height: '1.143rem',
        minWidth: '1.143rem',
        lineHeight: '1.143rem',
        color: 'var(--p-primary-darker-color)',
        background: '#eff6ff',
        border: {
            width: 'initial',
            style: 'initial',
            color: 'initial',
            radius: '50%'
        }
    },
    bodyRow: {
        color: '#495057',
        background: '#ffffff',
        states: {
            focus: {
                outline: {
                    color: 'var(--p-primary-light-color)',
                    style: 'solid',
                    width: '0.15rem',
                    offset: '-0.15rem'
                }
            },
            active: {
                color: 'var(--p-primary-darker-color)',
                background: '#eff6ff'
            }
        },
        variants: {
            dragPointTop: {
                bodyCell: {
                    boxShadow: 'inset 0 2px 0 0 #eff6ff'
                }
            },
            dragPointBottom: {
                bodyCell: {
                    boxShadow: 'inset 0 -2px 0 0 #eff6ff'
                }
            }
        }
    },
    bodyCell: {
        textAlign: 'left',
        border: {
            width: '0 0 1px 0',
            style: 'solid',
            color: '#dee2e6'
        },
        padding: {
            top: '1rem',
            right: '1rem',
            bottom: '1rem',
            left: '1rem'
        }
    },
    rowActionButton: {
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
            }
        }
    },
    bodyTitle: {
        font: {
            size: 'inherit',
            weight: '700'
        }
    },
    resizeHelper: {
        background: 'var(--p-primary-color)'
    },
    loadingIcon: {
        width: '2rem'
    },
    filterMenuButton: {
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
            }
        },
        variants: {
            open: {
                color: '#343a40',
                background: '#e9ecef'
            },
            active: {
                color: 'var(--p-primary-darker-color)',
                background: '#eff6ff'
            }
        }
    },
    headerFilterClearButton: {
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
            }
        }
    },
    filterOverlay: {
        minWidth: '12.5rem',
        color: '#495057',
        background: '#ffffff',
        border: {
            width: '0',
            style: 'none',
            color: 'initial',
            radius: 'var(--p-border-radius)'
        },
        boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.1)',
        variants: {
            menu: {
                filterOperator: {
                    color: '#343a40',
                    background: '#f8f9fa',
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
                    border: {
                        width: '0 0 1px 0',
                        style: 'solid',
                        color: '#dee2e6'
                    }
                },
                filterConstraint: {
                    border: {
                        width: '0 0 1px 0',
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
                filterAddRule: {
                    padding: {
                        top: '0.75rem',
                        right: '1.25rem',
                        bottom: '0.75rem',
                        left: '1.25rem'
                    }
                },
                filterButtonbar: {
                    padding: {
                        top: '1.25rem',
                        right: '1.25rem',
                        bottom: '1.25rem',
                        left: '1.25rem'
                    }
                }
            }
        }
    },
    filterRowItems: {
        padding: {
            top: '0.75rem',
            right: '0',
            bottom: '0.75rem',
            left: '0'
        }
    },
    filterRowItem: {
        color: '#495057',
        background: 'transparent',
        border: {
            width: '0',
            style: 'none',
            color: 'initial',
            radius: '0'
        },
        margin: {
            top: '0',
            right: '0',
            bottom: '0',
            left: '0'
        },
        padding: {
            top: '0.75rem',
            right: '1.25rem',
            bottom: '0.75rem',
            left: '1.25rem'
        },
        states: {
            active: {
                color: 'var(--p-primary-darker-color)',
                background: '#eff6ff'
            },
            hover: {
                color: '#495057',
                background: '#e9ecef'
            },
            focus: {
                outline: {
                    color: 'initial',
                    style: 'none',
                    width: '0',
                    offset: '0'
                },
                boxShadow: 'inset 0 0 0 0.15rem var(--p-primary-light-color)'
            }
        }
    },
    filterSeparator: {
        border: {
            width: '1px 0 0 0',
            style: 'solid',
            color: '#dee2e6'
        },
        margin: {
            top: '0.25rem',
            right: '0',
            bottom: '0.25rem',
            left: '0'
        }
    },
    variants: {
        hoverableRows: {
            bodyRow: {
                states: {
                    hover: {
                        color: '#495057',
                        background: '#e9ecef'
                    }
                }
            }
        },
        scrollable: {
            thead: {
                background: '#f8f9fa'
            },
            tfoot: {
                background: '#f8f9fa'
            }
        },
        striped: {
            bodyRow: {
                variants: {
                    even: {
                        root: {
                            background: '#fcfcfc',
                            states: {
                                active: {
                                    color: 'var(--p-primary-darker-color)',
                                    background: '#eff6ff',
                                    affects: {
                                        rowToggler: {
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
                        }
                    }
                }
            }
        },
        small: {
            header: {
                padding: {
                    top: '0.5rem',
                    right: '0.5rem',
                    bottom: '0.5rem',
                    left: '0.5rem'
                }
            },
            footer: {
                padding: {
                    top: '0.5rem',
                    right: '0.5rem',
                    bottom: '0.5rem',
                    left: '0.5rem'
                }
            },
            headerCell: {
                padding: {
                    top: '0.5rem',
                    right: '0.5rem',
                    bottom: '0.5rem',
                    left: '0.5rem'
                }
            },
            bodyCell: {
                padding: {
                    top: '0.5rem',
                    right: '0.5rem',
                    bottom: '0.5rem',
                    left: '0.5rem'
                }
            },
            footerCell: {
                padding: {
                    top: '0.5rem',
                    right: '0.5rem',
                    bottom: '0.5rem',
                    left: '0.5rem'
                }
            }
        },
        large: {
            header: {
                padding: {
                    top: '1.25rem',
                    right: '1.25rem',
                    bottom: '1.25rem',
                    left: '1.25rem'
                }
            },
            footer: {
                padding: {
                    top: '1.25rem',
                    right: '1.25rem',
                    bottom: '1.25rem',
                    left: '1.25rem'
                }
            },
            headerCell: {
                padding: {
                    top: '1.25rem',
                    right: '1.25rem',
                    bottom: '1.25rem',
                    left: '1.25rem'
                }
            },
            bodyCell: {
                padding: {
                    top: '1.25rem',
                    right: '1.25rem',
                    bottom: '1.25rem',
                    left: '1.25rem'
                }
            },
            footerCell: {
                padding: {
                    top: '1.25rem',
                    right: '1.25rem',
                    bottom: '1.25rem',
                    left: '1.25rem'
                }
            }
        }
    }
};

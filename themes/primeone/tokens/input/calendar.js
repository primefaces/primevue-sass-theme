export default {
    panel: {
        color: '#495057',
        background: '#ffffff',
        border: {
            width: '1px',
            style: 'solid',
            color: '#ced4da'
        },
        padding: {
            top: '0.5rem',
            right: '0.5rem',
            bottom: '0.5rem',
            left: '0.5rem'
        },
        variants: {
            popup: {
                root: {
                    background: '#ffffff',
                    border: {
                        width: '0',
                        style: 'none',
                        color: 'initial'
                    },
                    boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.1)'
                },
                header: {
                    background: '#ffffff'
                }
            },
            timeOnly: {
                timePicker: {
                    border: {
                        width: '0',
                        style: 'none',
                        color: 'initial'
                    }
                }
            },
            multipleMonth: {
                group: {
                    border: {
                        width: '',
                        style: '',
                        color: ''
                    },
                    padding: {
                        top: '',
                        right: '',
                        bottom: '',
                        left: ''
                    }
                }
            }
        }
    },
    header: {
        font: {
            size: '',
            weight: ''
        },
        color: '',
        background: '',
        border: {
            width: '',
            style: '',
            color: ''
        },
        padding: {
            top: '',
            right: '',
            bottom: '',
            left: ''
        },
        margin: {
            top: '',
            right: '',
            bottom: '',
            left: ''
        }
    },
    navigator: {
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
    title: {
        lineHeight: ''
    },
    view: {
        font: {
            size: '',
            weight: ''
        },
        color: '',
        padding: {
            top: '',
            right: '',
            bottom: '',
            left: ''
        },
        states: {
            hover: {
                color: ''
            }
        }
    },
    table: {
        font: {
            size: '',
            weight: ''
        },
        margin: {
            top: '',
            right: '',
            bottom: '',
            left: ''
        }
    },
    tableHeaderCell: {
        padding: {
            top: '',
            right: '',
            bottom: '',
            left: ''
        }
    },
    tableHeaderCellLabel: {
        width: '',
        height: ''
    },
    tableBodyCell: {
        padding: {
            top: '',
            right: '',
            bottom: '',
            left: ''
        },
        states: {
            hover: {
                background: ''
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
            today: {
                tableBodyCellLabel: {
                    color: '',
                    background: '',
                    border: {
                        width: '',
                        style: '',
                        color: ''
                    },
                    states: {
                        active: {
                            color: '',
                            background: ''
                        }
                    }
                }
            }
        }
    },
    tableBodyCellLabel: {
        width: '',
        height: '',
        border: {
            width: '',
            style: '',
            color: '',
            radius: ''
        },
        states: {
            active: {
                color: '',
                background: ''
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
    buttonBar: {
        border: {
            width: '',
            style: '',
            color: ''
        },
        padding: {
            top: '',
            right: '',
            bottom: '',
            left: ''
        }
    },
    timePicker: {
        border: {
            width: '',
            style: '',
            color: ''
        },
        padding: {
            top: '',
            right: '',
            bottom: '',
            left: ''
        }
    },
    timePickerButton: {
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
    timePickerLabel: {
        font: {
            size: '',
            weight: ''
        }
    },
    timePickerContainer: {
        padding: {
            top: '',
            right: '',
            bottom: '',
            left: ''
        }
    },
    monthPicker: {
        margin: {
            top: '',
            right: '',
            bottom: '',
            left: ''
        }
    },
    month: {
        padding: {
            top: '',
            right: '',
            bottom: '',
            left: ''
        },
        states: {
            active: {
                color: '',
                background: ''
            },
            hover: {
                background: ''
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
    yearPicker: {
        margin: {
            top: '',
            right: '',
            bottom: '',
            left: ''
        }
    },
    year: {
        padding: {
            top: '',
            right: '',
            bottom: '',
            left: ''
        },
        states: {
            active: {
                color: '',
                background: ''
            }
        }
    },
    variants: {
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

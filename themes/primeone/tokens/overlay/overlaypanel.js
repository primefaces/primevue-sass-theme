export default {
    root: {
        color: '#495057',
        background: '#ffffff',
        border: {
            width: 0,
            style: 'none',
            color: 'initial'
        },
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
    },
    content: {
        padding: {
            top: '1.25rem',
            right: '1.25rem',
            bottom: '1.25rem',
            left: '1.25rem'
        }
    },
    closeButton: {
        color: 'var(--p-primary-text-color)',
        background: 'var(--p-primary-color)',
        width: '2rem',
        height: '2rem',
        border: {
            width: 'initial',
            style: 'initial',
            color: 'initial',
            radius: '50%'
        },
        states: {
            hover: {
                color: 'var(--p-primary-text-color)',
                background: 'var(--p-primary-dark-color)'
            }
        }
    },
    tip: {
        border: {
            width: 'initial',
            style: 'solid',
            color: 'scale-color($overlayContentBg, $lightness: -5%)' // @todo remove scale-color
        }
    }
};

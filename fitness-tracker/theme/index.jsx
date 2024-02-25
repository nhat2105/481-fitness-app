const palette = {
    gray: {   
        text: '#334155', 
        bgColor: opacity => `rgba(30, 41, 59, ${opacity})`
    },
    purple: {   
        text: '#7c3aed', 
        bgColor: opacity => `rgba(167, 139, 250, ${opacity})`
    },
    blue: {
        text: '#92A3FD',
        bgColor: opacity => `rgba(146, 163, 253, ${opacity})`
    }
};

export const theme = (themeName) => {
    return {
        ...palette[themeName]
    };
};

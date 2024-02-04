import { extendTheme } from '@chakra-ui/react';

const config = {
    initialColorMode: 'light',
    useSystemColorMode: true,
};

const colors = {
    light: {
        primary: 'teal',
    },
    dark: {
        primary: 'black',
    },
};

const theme = extendTheme({
    config,
    colors: {
        ...colors
    },
    styles: {
        global: (props) => ({
            body: {
                bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.100',
                color: props.colorMode === 'dark' ? 'white' : 'gray.800',
            },
            '&::-webkit-scrollbar': {
                width: '4px',
            },
            '&::-webkit-scrollbar-track': {
                background: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
                background: 'gray.600',
                borderRadius: '8px',
            },
        }),

    },
});

export default theme;
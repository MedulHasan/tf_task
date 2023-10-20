import { DefaultTheme } from '@react-navigation/native';

const light = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        //text
        textPrimary: '#F6DB56B2',
        textSecondary: '#FAFAFA80',
        textTertiary: '#FAFAFA',
        textQuaternary: '#F6DB56',

        //background
        bgPrimary: '#2C2F34',
        bgSecondary: '#2A2D32',
        bgTertiary: '#404246',
        bgQuaternary: '#FFFFFF4D',
        bgQuinary: '#DCB84C',
        bgOctonary: '#443B1F',

        //border
        borderPrimary: '#202123'
    },
};

export default light;

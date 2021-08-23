import { createTheme } from '@material-ui/core/styles'
import * as MuiColors from "@material-ui/core/colors"

export const Colors = MuiColors

export const creatThemeByMode = (darkMode) => {
    return createTheme({
        palette: {
            mode: darkMode ? "dark" : "light",
            primary: {
                main: '#FF6038',
            },
            secondary: {
                main: '#000000',
            },
        },
        props: {
            MuiButton: {
                size: 'small',
            },
            MuiButtonGroup: {
                size: 'small',
            },
            MuiCheckbox: {
                size: 'small',
            },
            MuiFab: {
                size: 'small',
            },
            MuiFormControl: {
                margin: 'dense',
                size: 'small',
            },
            MuiFormHelperText: {
                margin: 'dense',
            },
            MuiIconButton: {
                size: 'small',
            },
            MuiInputBase: {
                margin: 'dense',
            },
            MuiInputLabel: {
                margin: 'dense',
            },
            MuiRadio: {
                size: 'small',
            },
            MuiSwitch: {
                size: 'small',
            },
            MuiTextField: {
                margin: 'dense',
                size: 'small',
            },
            MuiList: {
                dense: true,
            },
            MuiMenuItem: {
                dense: true,
            },
            MuiTable: {
                size: 'small',
            },
        },
        overrides: {
            MuiButton: {
                root: {
                    background: 'linear-gradient(45deg, #f44336 30%, #F6685E 90%)',
                    border: 0,
                    borderRadius: 3,
                    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                    color: '#ffffff !important',
                    height: 48,
                    padding: '0 30px',
                },
            },
        },
    })
}

export const creatThemeByModeAndColor = (darkMode, color) => {
    return createTheme({
        palette: {
            mode: darkMode ? "dark" : "light",
            primary: {
                main: Colors[`${color}`] ? Colors[`${color}`][700] : "#131313",
            },
            secondary: {
                main: '#000000',
            },
        },
        props: {
            MuiButton: {
                size: 'small',
            },
            MuiButtonGroup: {
                size: 'small',
            },
            MuiCheckbox: {
                size: 'small',
            },
            MuiFab: {
                size: 'small',
            },
            MuiFormControl: {
                margin: 'dense',
                size: 'small',
            },
            MuiFormHelperText: {
                margin: 'dense',
            },
            MuiIconButton: {
                size: 'small',
            },
            MuiInputBase: {
                margin: 'dense',
            },
            MuiInputLabel: {
                margin: 'dense',
            },
            MuiRadio: {
                size: 'small',
            },
            MuiSwitch: {
                size: 'small',
            },
            MuiTextField: {
                margin: 'dense',
                size: 'small',
            },
            MuiList: {
                dense: true,
            },
            MuiMenuItem: {
                dense: true,
            },
            MuiTable: {
                size: 'small',
            },
        },
    })
}
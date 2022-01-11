
export const lightTheme = {
    currentTheme: "light",
    dark: false,
    dividerColor: "pink",
    colors: {
        primary: "red",
        background: "white",
        text: "pink",
        border: "orange",
    }
}
export const darkTheme = {
    currentTheme: "dark",
    dark: true,
    dividerColor: "pink",
    colors: {
        primary: "red",
        background: "black",
        text: "pink",
        border: "orange",
    }
}

export const themeReducer = (state, action) => {

    switch (action.type) {
        case "set_light_theme":

            return {
                ...lightTheme
            }
        case "set_dark_theme":

            return {
                ...darkTheme
            }
        default:
            return state
    }


}
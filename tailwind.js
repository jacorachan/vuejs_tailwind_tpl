const { colors } = require("tailwindcss/defaultTheme");
const theme = {
    indigo: "#19216C",
    red: "#911111",
    yellow: "#F7D070",
    // Gray blue shades
    blue: {
        100: "#F0F4F8",
        200: "#D9E2EC",
        300: "#BCCCDC",
        400: "#9FB3C8",
        500: "#829AB1",
        600: "#627D98",
        700: "#486581",
        800: "#334E68",
        900: "#243B53"
    }
};

module.exports = {
    theme: {
        extend: {
            colors: {
                indigo: theme.indigo,
                red: theme.red,
                yellow: theme.yellow,
                blue: {
                    "100": theme.blue["100"],
                    "200": theme.blue["200"],
                    "300": theme.blue["300"],
                    "400": theme.blue["400"],
                    "500": theme.blue["500"],
                    "600": theme.blue["600"],
                    "700": theme.blue["700"],
                    "800": theme.blue["800"],
                    "900": theme.blue["900"]
                }
            }
        },
        colors: {
            white: colors.white,
            gray: colors.gray
        },
        boxShadow: {
            "default": "2px 2px 2px " + theme.blue["700"],
            "hover": "2px 2px 2px " + theme.blue["900"],
            "outline": "0 0 0 2px " + theme.blue["700"],
            "inner": "inset 0 2px 4px 0 " + theme.blue["700"],
            "sm": "1px 1px 1px " + theme.blue["300"],
            "md": "0 4px 6px -1px " + theme.blue["700"] + ", 0 2px 4px -1px " + theme.blue["700"],
            "lg": "0 10px 15px -3px " + theme.blue["700"] + ", 0 4px 6px -2px " + theme.blue["700"],
            "xl": "0 20px 25px -5px " + theme.blue["700"] + ", 0 10px 10px -5px " + theme.blue["700"],
            "none": "none"
        }
    },
    variants: {
        backgroundColor: ["responsive", "hover", "focus", "active"]
    },
    plugins: []
};

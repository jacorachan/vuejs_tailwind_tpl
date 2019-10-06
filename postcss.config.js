module.exports = {
    "plugins": [
        require("postcss-import"),
        require("tailwindcss")("tailwind.js"),
        require("postcss-color-function")(),
        require("autoprefixer")({
            add: true,
            grid: true
        }),
        process.env.NODE_ENV === "production" ? require("@fullhuman/postcss-purgecss")({
            content: [
                "./src/**/*.vue",
                "./public/index.html"
            ]
        }) : ""
    ]
};

import type { Config } from 'tailwindcss'
export default <Partial<Config>>{
    theme: {
        extends: {
            colors: {
                primary: "#6867C5",
            },
        },
    container: {
        screens: {
            sm: "470px",
            md: "958px",
            lg: "854px",
            xl: "1110px",   
        },
        center: true,
    },
    }
}
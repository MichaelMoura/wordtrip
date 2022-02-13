import {extendTheme} from "@chakra-ui/react";

export const theme = extendTheme({
    colors:{
        gray: {
            "900": "#181b23",
            "800": "#1f2029",
            "700": "#353646",
            "600": "#4b4d63",
            "500": "#616480",
            "400": "#797d9a",
            "300": "#9699b0",
            "200": "#b3b5c6",
            "100": "#d1d2dc",
            "50": "#eeeef2",
        },
        yellow: {
            "900": "#FFBA08",
        },
        white:{
            "100":"#F5F8FA",
        },
    },
    fonts:{
        heading: "Poppins",
        body: "Poppins",
    },
    styles:{
        global: {
            body: {
                bg: "white.100",
            },
            ".swiper":{
                height:"100%"
            },
            ".swiper-button-next":{
                color:"yellow.900"
            },
            ".swiper-button-prev":{
                color:"yellow.900"
            },
            ".swiper-pagination-bullet-active":{
                background:"yellow.900"
            }
            
        }
    }
})
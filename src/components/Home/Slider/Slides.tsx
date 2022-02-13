import { Box, Flex, Heading} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination} from "swiper";

export default function Slides(){
    return(
        <Box w="100%" h={["15rem","sm","md"]} mt={["4","8"]}>
            <Swiper pagination navigation modules={[Navigation, Pagination]} className="swiper">
                    <SwiperSlide>
                        <Box w="100%" h="100%" position="relative">
                            <Box
                            backgroundImage="url('/europe/banner.png')"
                            backgroundPosition={["center", "inherit"]}
                            w="100%"
                            h="100%"
                            justifyContent="center"
                            alignItems="center"
                            filter="brightness(0.8)"
                            backgroundRepeat="no-repeat"
                            backgroundSize="cover"
                            />
                            <Box textAlign="center" color="gray.50" position="absolute" top="50%" left="50%" mr="-50%" transform="translate(-50%, -50%)">
                                <Heading as="h1" fontSize={["1.5rem", "1.8rem", "2.8rem"]}>Europa</Heading>
                                <Heading as="h5" fontSize={["1.5rem", "1.8rem", "2.8rem"]}>O continente mais antigo</Heading>
                            </Box>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>   
        </Box>
    )
}
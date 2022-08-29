import { Swiper, SwiperSlide } from "swiper/react";

import { Box, Image, Text } from '@chakra-ui/react'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export function Content() {
    return(
        <>

    <Box mt="4rem" padding="10rem">

      <Swiper cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper">
        
        <Box mt="7rem">
        <SwiperSlide >
            <Image w="100%" h="40rem" src="/img/Europa.jpg" alt="Drink"/>
            <Text as='b'>Bold</Text>
        </SwiperSlide>
        </Box>

        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    
      </Box>
    </>
    );
}
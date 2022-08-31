import { Swiper, SwiperSlide } from "swiper/react";

import { Flex, Heading, Stack, Image, Text } from '@chakra-ui/react'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Link from "next/link";

export function Content() {
    return(
        <>

      <Flex w="100%" maxW="1240px" mx="auto" mb={["5", "10"]} h={[ "250px", "450px" ]} mt="4rem">
        

        <Swiper cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
          style={{width: '100%', flex: '1'}}
          >
          
          <SwiperSlide >
          <Flex 
          w="100%"
          h="100%"
          justifyContent="center"
          align="center"
          direction="column"
          bgImage="url(/img/Europa.jpg)"
          bgRepeat="no-repeat"
          bgSize="cover"
          textAlign="center"
          >
            <Link href="/continent/europe">
              <a>
              <Heading>Europa</Heading>
              <Text>O continente mais antigo.</Text>
              </a>
            </Link>
          </Flex>
          </SwiperSlide>

          <SwiperSlide>Slide 2</SwiperSlide>
        </Swiper>
      
        </Flex>
    </>
    );
}
import { Box, Image, SimpleGrid, Text } from "@mantine/core";
import React, { useRef } from "react";
import { DataSponsor } from "./data_sponsor";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Sponsor() {
  const autoplay = useRef(Autoplay({ delay: 1000 }));
  return (
    <>
    <Box p={20}>
      <Box
        style={{
          backgroundColor: "white",
          padding: 30,
          borderRadius: 20,
        }}
      >
        <SimpleGrid
          cols={{ base: 2, sm: 2, lg: 5 }}
          spacing={{ base: 10, sm: "xl" }}
          verticalSpacing={{ base: "md", sm: "xl" }}
        >
        {DataSponsor.map((item) => {
          return (
            <Box key={item.id}>
                <Image src={item.image} h={80} w={"auto"} alt="" />
            </Box>
          );
        })}
        </SimpleGrid>
        <Text ta={"center"} pb={20} pt={40}>Media Partners</Text>
        <Carousel
            withIndicators
            height={100}
            slideSize="33.333333%"
            slideGap="md"
            loop
            align="start"
            slidesToScroll={1}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
        >
            {DataSponsor.map((item) => {
              return (
                <Box key={item.id}>
                  <Carousel.Slide>
                    <Box
                      style={{
                        borderRadius: 20,
                      }}
                    >
                      <Image
                        radius={20}
                        src={item.image}
                        h={100}
                        w="auto"
                        alt=""
                      />
                    </Box>
                  </Carousel.Slide>
                </Box>
              );
            })}
        </Carousel>
      </Box>
    </Box>
    </>
  );
}

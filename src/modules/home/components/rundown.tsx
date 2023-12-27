"use client";
import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { Box, Group, Image, Text } from "@mantine/core";
import { barlow } from "./guest_stars";
import { DataRundown } from "./data_rundown";

export default function Rundown() {
  const autoplay = useRef(Autoplay({delay: 1000}));
  return (
    <>
      <Group justify="space-around" pt={30} p={20}>
        <Text
          className={barlow.className}
          fz={"18vw"}
          c={"white"}
          variant="gradient"
          gradient={{ from: "#7C7E87", to: "#F1F1F2", deg: 54 }}
        >
          RUNDOWN
        </Text>
      </Group>
      <Box pt={10} pb={20}>
        <Box p={10}>
          <Carousel
            withIndicators
            height={600}
            slideSize="33.333333%"
            slideGap="md"
            loop
            align="start"
            slidesToScroll={1}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
          >
            {DataRundown.map((item) => {
              return (
                <Box key={item.id}>
                  <Carousel.Slide>
                    <Box
                      style={{
                        borderRadius: 20,
                      }}
                    >
                      <Image
                        src={item.image}
                        h={600}
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

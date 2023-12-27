"use client";
import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { Box, Group, Image, Text } from "@mantine/core";
import { barlow, plusJakarta } from "./guest_stars";
import { DataRundown } from "./data_rundown";
import { DataTenants } from "./data_tenants";

export default function Tenants() {
  const autoplay = useRef(Autoplay({ delay: 1000 }));
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
          TENANTS
        </Text>
      </Group>
      <Box pt={10} pb={20}>
        <Box p={10}>
          <Carousel
            withIndicators
            height={200}
            slideSize="33.333333%"
            slideGap="md"
            loop
            align="start"
            slidesToScroll={1}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
          >
            {DataTenants.map((item) => {
              return (
                <Box key={item.id}>
                  <Carousel.Slide>
                    <Box
                      style={{
                        backgroundColor: "white",
                        padding: 20,
                        borderRadius: 50,
                      }}
                    >
                      <Image src={item.image} h={100} w="auto" alt="" />
                    </Box>
                    <Text pt={10} ta={"center"} className={plusJakarta.className} fz={16} c={"white"}>
                      {item.name}
                    </Text>
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

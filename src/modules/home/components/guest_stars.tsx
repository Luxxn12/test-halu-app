"use client";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { dataGuestStars } from "./data_guest_stars";
import { Box, Group, Image, Text, Title } from "@mantine/core";
import { Barlow_Condensed, Plus_Jakarta_Sans } from "next/font/google";
export const plusJakarta = Plus_Jakarta_Sans({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
  style: ["normal"],
});
export const barlow = Barlow_Condensed({
  weight: "900",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
  style: ["normal"],
});

export default function GuestStars() {
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
          GUEST
        </Text>
        <Text
          className={barlow.className}
          fz={"18vw"}
          c={"white"}
          variant="gradient"
          gradient={{ from: "#7C7E87", to: "#F1F1F2", deg: 317 }}
        >
          STARS
        </Text>
      </Group>
      <Box pt={10} pb={20}>
        <Box p={10}>
        <Carousel
          withIndicators
          height={400}
          slideSize="33.333333%"
          slideGap="md"
          loop
          align="start"
          slidesToScroll={1}
        >
            {dataGuestStars.map((item) => {
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
                        h={400}
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

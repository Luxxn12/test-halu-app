"use client";
import {
  Anchor,
  BackgroundImage,
  Box,
  Button,
  Flex,
  Grid,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Barlow_Condensed } from "next/font/google";
import { GrFormNextLink } from "react-icons/gr";
import { HiArrowDownRight } from "react-icons/hi2";
import GuestStars from "../components/guest_stars";
import { Carousel } from "@mantine/carousel";
import Rundown from "../components/rundown";
import Tenants from "../components/tenants";
import Portofolio from "../components/portofolio";
import MeetAndGreet from "../components/meet_and_greet";
import IndoComic from "../components/indo_comic";
import Sponsor from "../components/sponsor";
import Footer from "../components/footer";

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

export default function ViewHome() {
  return (
    <>
      <Box>
        <BackgroundImage src="/bg.png">
          <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 3 }}
            spacing="lg"
            style={{
              zIndex: 9999,
            }}
            p={40}
          >
            <Box>
              <Text className={plusJakarta.className} fz={16} c={"#7B7C84"}>
                INDONESIA COMIC CON 2023
              </Text>
              <Box className={barlow.className}>
                <Title className={barlow.className} fz={60} c={"white"}>
                  BRINGING
                </Title>
                <Title className={barlow.className} fz={60} c={"white"}>
                  THE BEST
                </Title>
                <Group>
                  <Title className={barlow.className} fz={60} c={"#DC2626"}>
                    POP
                  </Title>
                  <Title className={barlow.className} fz={60} c={"#FBB83B"}>
                    CULTURE
                  </Title>
                </Group>
                <Title className={barlow.className} fz={60} c={"white"}>
                  EXPERIENCE
                </Title>
              </Box>
              <Group className={plusJakarta.className} pt={20}>
                <Button
                  variant="filled"
                  size="xl"
                  fz={16}
                  radius="xl"
                  color="#FBB83B"
                >
                  <Text fw={"bold"} c={"dark"}>
                    Get your ticket
                  </Text>
                </Button>
                <Button
                  variant="outline"
                  color="rgba(255, 255, 255, 1)"
                  fz={16}
                  size="xl"
                  radius="xl"
                >
                  Be part of ICC
                </Button>
              </Group>
            </Box>
            <Box>
              <Box
                style={{
                  backgroundColor: "#D82625",
                  borderRadius: 20,
                  padding: 40,
                }}
              >
                <Flex align={"center"} justify={"center"}>
                  <Title
                    className={barlow.className}
                    fz={40}
                    c={"white"}
                    pt={20}
                  >
                    Nov 4-5, 2023
                  </Title>
                </Flex>
                <Text
                  ta={"center"}
                  className={plusJakarta.className}
                  c={"white"}
                  fz={16}
                  pt={10}
                >
                  Jakarta Convention Center (JCC) Senayan, Assembly,
                  Cendrawasih, and Plenary Hall
                </Text>
                <Text
                  pt={10}
                  pb={20}
                  ta={"center"}
                  className={plusJakarta.className}
                  c={"white"}
                  fz={16}
                >
                  10 AM - 9 PM
                </Text>
              </Box>
              <Box pt={20}>
                <Image src={"/image.jpg"} alt="" radius={20} />
              </Box>
              <Group justify="center" pt={30}>
                <Anchor
                  ta={"center"}
                  className={plusJakarta.className}
                  c={"white"}
                  fz={16}
                  underline="hover"
                  style={{
                    cursor: "pointer",
                  }}
                  href="#"
                >
                  {` View the last edition of ICC's excitement`}
                </Anchor>
                <GrFormNextLink size={30} color={"white"} />
              </Group>
            </Box>
            <Box>
              <Box
                style={{
                  backgroundColor: "#FBB83B",
                  borderRadius: 20,
                  padding: 30,
                }}
              >
                <Text
                  ta={"center"}
                  fw={"bold"}
                  className={plusJakarta.className}
                  fz={16}
                >
                  The biggest event in the year to celebrate
                </Text>
                <Title ta={"center"} className={barlow.className} fz={47}>
                  5 TOP CULTURE PILLARS
                </Title>
                <Title
                  ta={"center"}
                  className={barlow.className}
                  fz={47}
                  c={"white"}
                >
                  LIFESTYLE
                </Title>
              </Box>
              <Box pt={20}>
                <Box
                  style={{
                    borderRadius: "60%",
                    borderImage:
                      "linear-gradient(90deg, rgba(230,66,66,1) 8%, rgba(3,8,19,1) 76%) 30 ",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    padding: 20,
                  }}
                >
                  <Group justify="space-between">
                    <Box>
                      <Title className={barlow.className} fz={35} c={"white"}>
                        DG Awards 2023
                      </Title>
                      <Text
                        className={plusJakarta.className}
                        fz={16}
                        c={"white"}
                        pt={10}
                      >
                        The biggest gaming award event in
                      </Text>
                      <Text
                        className={plusJakarta.className}
                        fz={16}
                        c={"white"}
                      >
                        Indonesia is coming.
                      </Text>
                    </Box>
                    <Box>
                      <Box
                        style={{
                          background: "white",
                          borderRadius: "100%",
                          width: 100,
                          height: 100,
                        }}
                      >
                        <Flex align={"center"} justify={"center"} pt={35}>
                          <HiArrowDownRight size={30} />
                        </Flex>
                      </Box>
                    </Box>
                  </Group>
                </Box>
              </Box>
              <Box pt={20}>
                <Box
                  style={{
                    borderRadius: "60%",
                    borderImage:
                      "linear-gradient(90deg, rgba(250,183,60,1) 8%, rgba(3,8,19,1) 76%) 30 ",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    padding: 20,
                  }}
                >
                  <Group justify="space-between">
                    <Box>
                      <Title className={barlow.className} fz={35} c={"white"}>
                        Championship of
                      </Title>
                      <Title className={barlow.className} fz={35} c={"white"}>
                        Cosplay
                      </Title>
                      <Text
                        className={plusJakarta.className}
                        fz={16}
                        c={"white"}
                        pt={10}
                      >
                        Unleash your inner hero at Cosplay
                      </Text>
                      <Text
                        className={plusJakarta.className}
                        fz={16}
                        c={"white"}
                      >
                        Competition! Join the fun
                      </Text>
                    </Box>
                    <Box>
                      <Box
                        style={{
                          background: "white",
                          borderRadius: "100%",
                          width: 100,
                          height: 100,
                        }}
                      >
                        <Flex align={"center"} justify={"center"} pt={35}>
                          <HiArrowDownRight size={30} />
                        </Flex>
                      </Box>
                    </Box>
                  </Group>
                </Box>
              </Box>
              <Box pt={20}>
                <Box
                  style={{
                    borderRadius: "60%",
                    borderImage:
                      "linear-gradient(90deg, rgba(47,165,232,1) 8%, rgba(3,8,19,1) 76%) 30 ",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    padding: 20,
                  }}
                >
                  <Group justify="space-between">
                    <Box>
                      <Title className={barlow.className} fz={35} c={"white"}>
                        FanMate Fest
                      </Title>
                      <Text
                        className={plusJakarta.className}
                        fz={16}
                        c={"white"}
                        pt={10}
                      >
                        Get a chance to win a huge prize
                      </Text>
                      <Text
                        className={plusJakarta.className}
                        fz={16}
                        c={"white"}
                      >
                        chance to be the next Cosplay.
                      </Text>
                    </Box>
                    <Box>
                      <Box
                        style={{
                          background: "white",
                          borderRadius: "100%",
                          width: 100,
                          height: 100,
                        }}
                      >
                        <Flex align={"center"} justify={"center"} pt={35}>
                          <HiArrowDownRight size={30} />
                        </Flex>
                      </Box>
                    </Box>
                  </Group>
                </Box>
              </Box>
            </Box>
          </SimpleGrid>
        </BackgroundImage>
      </Box>
      <Box pb={50}>
        <GuestStars />
      </Box>
      <Box pb={50}>
        <Rundown />
      </Box>
      <Box pb={50}>
        <Tenants />
      </Box>
      <Box pb={50}>
        <Portofolio />
      </Box>
      <Box pb={50}>
        <MeetAndGreet />
      </Box>
      <Box pb={50}>
        <IndoComic />
      </Box>
      <Box pb={50}>
        <Sponsor />
      </Box>
      <Box pb={50}>
        <Footer />
      </Box>
    </>
  );
}

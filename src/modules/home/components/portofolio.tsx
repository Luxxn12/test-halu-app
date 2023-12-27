"use client";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Group,
  Image,
  List,
  SimpleGrid,
  Text,
} from "@mantine/core";
import React from "react";
import { barlow, plusJakarta } from "./guest_stars";
import { Dataporto } from "./data_portofolio";

export default function Portofolio() {
  return (
    <>
      <Container>
        <Box>
          <Text
            className={barlow.className}
            fz={"9vw"}
            c={"white"}
            variant="gradient"
            gradient={{ from: "#7C7E87", to: "#F1F1F2", deg: 54 }}
          >
            PORTFOLIO REVIEW
          </Text>
          <Text className={plusJakarta.className} fz={16} c={"white"}>
            Calling all artists, content creators, and art enthusiasts! Get your
            art portfolio reviewed by industry professionals who are passionate
            about supporting and nurturing artistic talent.
          </Text>
          <Text
            pt={30}
            className={plusJakarta.className}
            fz={16}
            c={"white"}
            fw={"bold"}
          >
            Notes:
          </Text>
          <List className={plusJakarta.className} fz={16} c={"white"}>
            <List.Item>
              Portfolio Review will be held on Indonesia Comic Con, Nov 4-5,
              2023, in Jakarta Convention Center.
            </List.Item>
            <List.Item>
              You may sign up for more than one category or more than one
              studio.
            </List.Item>
            <List.Item>
              The chosen participants will get a free entry ticket to Indonesia
              Comic Con (no need to buy the ticket).
            </List.Item>
            <List.Item>
              The registration will be closed on October 19, 2023.
            </List.Item>
          </List>
        </Box>
      </Container>
      <Box p={40} pt={50}>
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 4 }}
          spacing={{ base: 10, sm: "xl" }}
          verticalSpacing={{ base: "md", sm: "xl" }}
        >
          {Dataporto.map((item) => {
            return (
              <Box key={item.id}>
                <Box
                  style={{
                    backgroundColor: "#111827",
                    padding: 30,
                    borderRadius: 20,
                    height: 500,
                  }}
                >
                  <Center>
                    <Image
                      radius={"100%"}
                      h={100}
                      w={"auto"}
                      src={item.image}
                      alt=""
                    />
                  </Center>
                  <Text
                  pt={20}
                    className={plusJakarta.className}
                    fz={18}
                    c={"white"}
                    fw={"bold"}
                    ta={"center"}
                  >
                    {item.judul}
                  </Text>
                  <Text
                  pt={20}
                    className={plusJakarta.className}
                    fz={16}
                    c={"#C9CDD3"}
                    ta={"center"}
                  >
                    {item.doc}
                  </Text>
                  <Center pt={20}>
                    <Button
                      className={plusJakarta.className}
                      fw={"bold"}
                      radius={"md"}
                      bg={"#2784C7"}
                    >
                      join
                    </Button>
                  </Center>
                </Box>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </>
  );
}

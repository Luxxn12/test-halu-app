import {
  Box,
  Button,
  Center,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import React from "react";
import { barlow, plusJakarta } from "./guest_stars";
import { DataMeet } from "./data_meet";

export default function MeetAndGreet() {
  return (
    <>
      <Group justify="center" pt={30}>
        <Text
          className={barlow.className}
          fz={"10vw"}
          c={"white"}
          variant="gradient"
          gradient={{ from: "#7C7E87", to: "#F1F1F2", deg: 54 }}
        >
          MEET AND GREET
        </Text>
      </Group>
      <Text
        ta={"center"}
        className={plusJakarta.className}
        fz={16}
        c={"#C9CDD3"}
      >
        Sign up now for an exclusive meet and greet with your favorite VTuber!
      </Text>
      <Text
        pt={20}
        ta={"center"}
        className={plusJakarta.className}
        fz={16}
        c={"#C9CDD3"}
      >
        The registration will be closed on Nov 2, 17:00.
      </Text>
      <Stack>
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 4 }}
          spacing={{ base: 10, sm: "xl" }}
          verticalSpacing={{ base: "md", sm: "xl" }}
        >
          {DataMeet.map((item) => {
            return (
              <Box key={item.id} p={20}>
                <Center>
                  <Image alt="" src={item.image} />
                </Center>
                <Text
                  ta={"center"}
                  className={barlow.className}
                  fz={30}
                  c={"white"}
                >
                  {item.name}
                </Text>
                <Text
                  className={plusJakarta.className}
                  fz={16}
                  c={"#C9CDD3"}
                  fw={"bold"}
                  ta={"center"}
                >
                  {item.jam}
                </Text>
                <Center pt={20}>
                  <Button>Sign up</Button>
                </Center>
              </Box>
            );
          })}
        </SimpleGrid>
      </Stack>
    </>
  );
}

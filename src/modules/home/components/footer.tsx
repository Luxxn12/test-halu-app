import {
  Box,
  Center,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import React from "react";
import { plusJakarta } from "./guest_stars";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <Box p={20}>
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 5 }}
          spacing={{ base: 10, sm: "xl" }}
          verticalSpacing={{ base: "md", sm: "xl" }}
        >
          <Box>
            <Image src={"/logo.png"} alt="" h={50} w="auto" />
          </Box>
          <Box>
            <Stack>
              <Text pb={10} fz={18} fw={"bold"} c={"white"}>
                Discover
              </Text>
              <Text c={"white"} style={{cursor: "pointer"}} className={plusJakarta.className} fz={14}>
                Guest Stars
              </Text>
              <Text c={"white"} style={{cursor: "pointer"}} className={plusJakarta.className} fz={14}>
                Tenants
              </Text>
              <Text c={"white"} style={{cursor: "pointer"}} className={plusJakarta.className} fz={14}>
                Tenant Registration
              </Text>
              <Text c={"white"} style={{cursor: "pointer"}} className={plusJakarta.className} fz={14}>
                Promote Your Brand
              </Text>
              <Text c={"white"} style={{cursor: "pointer"}} className={plusJakarta.className} fz={14}>
                Gallery
              </Text>
              <Text c={"white"} style={{cursor: "pointer"}} className={plusJakarta.className} fz={14}>
                Get Your Ticket
              </Text>
            </Stack>
          </Box>

          <Box>
            <Stack>
              <Text pb={10} fz={18} fw={"bold"} c={"white"}>
                Resources
              </Text>
              <Text c={"white"} style={{cursor: "pointer"}}  className={plusJakarta.className} fz={14}>
                FAQ
              </Text>
              <Text c={"white"} style={{cursor: "pointer"}}  className={plusJakarta.className} fz={14}>
                Event Guidelines
              </Text>
              <Text c={"white"} style={{cursor: "pointer"}}  className={plusJakarta.className} fz={14}>
                Safety & Weapon Policy
              </Text>
              <Text c={"white"} style={{cursor: "pointer"}}  className={plusJakarta.className} fz={14}>
                Anti-Harassment Policy
              </Text>
            </Stack>
          </Box>
          <Box>
            <Stack>
              <Text pb={10} fz={18} fw={"bold"} c={"white"}>
                Support
              </Text>
              <Text c={"white"} style={{cursor: "pointer"}}  className={plusJakarta.className} fz={14}>
                Report an Incident
              </Text>
              <Text c={"white"} style={{cursor: "pointer"}}  className={plusJakarta.className} fz={14}>
                Contact
              </Text>
            </Stack>
          </Box>
          <Box>
            <Stack>
              <Text pb={10} fz={18} fw={"bold"} c={"white"}>
                Legal
              </Text>
              <Text c={"white"} style={{cursor: "pointer"}}  className={plusJakarta.className} fz={14}>
                Terms of Service
              </Text>
              <Text c={"white"} style={{cursor: "pointer"}}  className={plusJakarta.className} fz={14}>
                Privacy Policy
              </Text>
            </Stack>
          </Box>
        </SimpleGrid>
        <Box pt={50}>
          <Group justify="center" gap={50}>
            <FaInstagram size={25} color={"white"} style={{cursor: "pointer"}}  />
            <FaFacebook size={25} color={"white"} style={{cursor: "pointer"}}  />
            <FaTwitter size={25} color={"white"} style={{cursor: "pointer"}}  />
            <FaYoutube size={25} color={"white"} style={{cursor: "pointer"}}  />
          </Group>
          <Center pt={30}>
            <Text c={"white"} className={plusJakarta.className} fz={12} >
              Copyright © 2023 Indonesia Comic Con. All rights reserved.
            </Text>
          </Center>
        </Box>
      </Box>
    </>
  );
}

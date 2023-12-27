"use client"
import React, { useState } from 'react';
import { AppShell, Box, Burger, Button, Center, Divider, Group, Image, Menu, NavLink, Text, UnstyledButton } from '@mantine/core';
import { useDisclosure, useShallowEffect } from '@mantine/hooks';
import { DataDestop } from '../components/data_destop';
import { usePathname, useRouter } from 'next/navigation';
import { useAtom } from 'jotai';
import { isOpenData } from '../val/isOpenData';
import { DataMobile } from '../components/data_mobile';
import { plusJakarta } from '@/modules/home/components/guest_stars';

export default function ViewLayout({children}: {children: React.ReactNode}) {
  const [opened, { toggle }] = useDisclosure();
  const [valOpen, setOpenData] = useState(true)
  const router = useRouter();
  const pathname = usePathname();
  const [active, setActive] = useState("");
  useShallowEffect(() => {
    setActive(pathname);
  });
  return (
    <AppShell
      header={{ height: 100 }}
      // navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !valOpen } }}
    >
      <AppShell.Header bg={"#000001"} style={{border: "none"}}>
        <Group h="100%" px="md">
          {/* <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" /> */}
          <Group justify="space-between" style={{ flex: 1 }}>
            <Image src={"/logo.png"} alt="" h={50} w="auto" />
            <Group ml="xl" gap={40} visibleFrom="md"  className={plusJakarta.className} fz={14}>
              {DataDestop.map((item) => {
                return (
                  <Box key={item.key}>
                    <NavLink
                      active
                      label={active === item.link ? (
                        <Box>
                          <Text fw={"bold"} c={"#FBB83B"} fz={14} onClick={() => router.push(item.link)}>
                            {item.label}
                          </Text>
                        </Box>
                      ) : (
                        <Box>
                          <Text onClick={() => router.push(item.link)}>
                            {item.label}
                          </Text>

                        </Box>
                      )
                      }
                      onClick={() => {
                        router.push(item.link);
                      }}
                      c={"white"}
                      variant="subtle"
                    />
                  </Box>
                )
              })}
            </Group>
            <Group className={plusJakarta.className} fz={14}> 
              <Button variant="filled" size="lg" radius="xl" color="#FBB83B">
                <Text fw={"bold"} fz={14} c={"dark"}>Get your ticket</Text>
              </Button>
              <Box>
                <Menu shadow="md" width={300} position="bottom-end" offset={16} transitionProps={{ transition: 'pop-top-right', duration: 300 }}>
                  <Menu.Target>
                    <Button variant="filled" hiddenFrom='md' color="#111827" size="lg" radius="xl">
                      <Text fz={14}>Menu</Text>
                    </Button>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Label>Menu</Menu.Label>
                    {/* {DataMobile.map((item) => {
                      return (
                        <Box key={item.key}>
                          <NavLink
                            href="#required-for-focus"
                            label="Active subtle"
                            leftSection={<item.icon size={20}  />}
                            variant="subtle"
                            active
                          />
                        </Box>
                      )
                    })} */}

                  </Menu.Dropdown>
                </Menu>
              </Box>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Main bg={"#020617"}>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}

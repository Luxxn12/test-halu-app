import { Text, Title } from "@mantine/core";
import React from "react";
import { barlow } from "./guest_stars";

export default function IndoComic() {
  return (
    <>
      <Title
        ta={"center"}
        className={barlow.className}
        fz={"8vw"}
        c={"#7C7E87"}
        variant="gradient"
        
      >
        BE PART OF 2023
      </Title>
      <Title
        ta={"center"}
        className={barlow.className}
        fz={"8vw"}
        c={"#EF4445"}
        variant="gradient"
      >
        INDONESIA COMIC CON
      </Title>
      <Title
        ta={"center"}
        className={barlow.className}
        fz={"8vw"}
        c={"#FBB83B"}
        variant="gradient"
      >
        2023
      </Title>
    </>
  );
}

"use client";

import React from "react";
import comingsoon from "@/Assets/comingsoon.png";
import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: #fff;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

function ComingSoon() {
  return (
    <Container>
      <Image src={comingsoon} />
    </Container>
  );
}

export default ComingSoon;

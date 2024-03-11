"use client";

import React from "react";
import styled from "styled-components";

const StyledHelix = styled.div`
  width: 100%;
  height: 100vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 3rem;
    color: #212121;
    font-weight: 700;

    span {
      color: #385bf9;

      a {
        text-decoration: none;
        transition: all 0.3s ease-in-out;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  p {
    font-size: 1rem;
    color: #353535;
    font-weight: 400;
    width: 60%;
    text-align: center;
    line-height: 1.5;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;

function Helix() {
  return (
    <StyledHelix>
      <h1>
        {" "}
        Visit{" "}
        <span>
          <a href="https://helix.cyper.studio" target="_blank">
            {" "}
            Helix
          </a>
        </span>
      </h1>
      <p>
        Helix, a demo product powered by Cyper Studio, simplifies your shipping
        with a user-friendly platform, intelligent rate comparisons, and
        advanced features that save you time and money.
      </p>
    </StyledHelix>
  );
}

export default Helix;

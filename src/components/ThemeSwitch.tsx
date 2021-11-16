import React, { useState } from "react";
import styled from "styled-components";

const Track = styled.button`
  display: flex;
  justify-content: flex-start;
  color: var(--primary-color);
  background: var(--primary-color);
  width: 80px;
  height: 40px;
  padding: 4px;
  border-radius: 40px;
  transition: ease-in-out 0.2s;
  z-index: 999;
`;

const Thumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 32px;
  width: 32px;
  height: 32px;
  background: var(--base-color);
  transition: ease-in-out 0.2s;
  animation: a-sun-moon 1.6s linear infinite alternate;
  position: relative;
  overflow: hidden;
  &[aria-pressed="true"] {
    margin: 0 0 0 40px;
    -webkit-transition: 0.4s ease-in-out;
    transition: 0.4s ease-in-out;
  }
`;

const ThumbInner = styled.div`
  font-size: 24px;
  display: flex;
  position: absolute;
  top: -32px;
  transform: rotateY(0);
  transition: ease-in-out 0.4s;
  &:last-child {
    top: 0px;
  }
  &::before {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ThemeSwitch = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <Track onClick={() => setIsDark(!isDark)}>
      <Thumb aria-pressed={isDark}>
        <ThumbInner></ThumbInner>
      </Thumb>
    </Track>
  );
};

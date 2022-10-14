import styled, { keyframes } from "styled-components";

const trackProgress = keyframes`
    0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }

`;

export const Container = styled.div`
  height: 5px;
  width: 300px;
  position: relative;
  overflow: hidden;

  .progress {
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 7px;

    animation: ${trackProgress} ${({ time }) => time}ms linear forwards;
    transform-origin: left;

    /* background-color: green; */
    background: linear-gradient(
      91deg,
      #e54d0c 0%,
      #ec8d34 14%,
      #f3f017 28%,
      #79cc3b 42%,
      #6bd4ea 56%,
      #0066cc 70%,
      #9a4a98 84%
    );
  }
`;

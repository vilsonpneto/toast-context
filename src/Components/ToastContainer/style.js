import styled, { keyframes } from "styled-components";

const entrando = keyframes`
  0% {
    color: transparent;
    transform: translateX(-30px);
    filter: opacity(0);
  }

  100% {
    transform: translateX(0px);
    filter: opacity(1);
  }

`;

const saindo = keyframes`
  0% {
      transform: translateX(0px);
      filter: opacity(1);
  }

  100% {
      color: transparent;
      transform: translateX(100vw);
      filter: opacity(0);
  }
`;

export const Container = styled.li`
  position: relative;

  width: 300px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: #eee;
  list-style: none;

  border: solid black 1px;
  border-radius: 8px;

  transition: 0.8s;
  animation: ${({ isLeaving }) => (isLeaving ? saindo : entrando)} 1000ms
    forwards;

  .message {
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 100%;

    color: #757575;

    p {
      font-size: 1.2rem;
      margin-left: 15px;
    }

    button {
      position: absolute;
      top: 3px;
      right: 3px;

      border: none;
      background-color: transparent;

      font-size: 2rem;
    }
  }
`;

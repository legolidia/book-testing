import styled from "@emotion/styled";
import React from "react";

const BookContainer = styled.div`
  .book {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 18.5rem;
    height: 12.5rem;
    perspective: 70rem;
    transform-style: preserve-3d;
    animation: openBook 3s forwards;
  }
  .cover {
    background-color: rgb(200, 0, 100);
    width: 9.25rem;
    height: 12.5rem;
    position: absolute;
    transform-origin: 0 0;
    border-radius: 0 5px 5px 0;
    box-shadow: inset -3px 0px 20px rgba(0, 0, 0, 0.2),
      0px 0px 15px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    z-index: 1;
  }
  .page {
    top: 0.25rem;
    left: 0.25rem;
    background-color: #e9e6c4;
    width: 9rem;
    height: 12rem;
    text-align: right;
    font-size: 8px;
    color: #777;
    font-family: monospace;
    position: absolute;
    transform-origin: 100% 0;
    border-radius: 5px 0 0 5px;
    box-shadow: inset 3px 0px 20px rgba(0, 0, 0, 0.2),
      0px 0px 15px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    z-index: 2;
  }
  .cover.turn {
    animation: bookCover 3s forwards;
  }
  .page.turn {
    animation: bookOpen 3s forwards;
  }
  .page:nth-of-type(1) {
    animation-delay: 0.05s;
  }
  .page:nth-of-type(2) {
    animation-delay: 0.33s;
  }
  .page:nth-of-type(3) {
    animation-delay: 0.66s;
  }
  .page:nth-of-type(4) {
    animation: bookOpen150deg 3s forwards;
    animation-delay: 0.99s;
  }
  .page:nth-of-type(5) {
    animation: bookOpen30deg 3s forwards;
    animation-delay: 1.2s;
  }
  .page:nth-of-type(6) {
    animation: bookOpen55deg 3s forwards;
    animation-delay: 1.25s;
  }
  @keyframes openBook {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(180deg);
    }
  }
  @keyframes bookOpen {
    30% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(180deg);
    }
  }
  @keyframes bookCover {
    30% {
      transform: rotateY(0deg);
      z-index: 1;
    }
    100% {
      transform: rotateY(180deg);
      z-index: 2;
    }
  }
  @keyframes bookOpen150deg {
    30% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(150deg);
    }
  }
  @keyframes bookOpen55deg {
    30% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(30deg);
    }
  }
  @keyframes bookOpen30deg {
    50% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(30deg);
    }
  }
`;

export const Book = () => {
  return (
    <BookContainer>
      <div className="book">
        <span className="page"></span>
        <span className="page turn"></span>
        <span className="page turn"></span>
        <span className="page turn"></span>
        <span className="page turn"></span>
        <span className="page turn"></span>
        <span className="cover"></span>
      </div>
    </BookContainer>
  );
};

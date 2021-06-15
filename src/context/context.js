import React from "react";
import {
  ball,
  paddle,
  bricks,
  canvasWidth,
  canvasHeight,
} from "../gameComp/data";

export const GameContext = React.createContext([]);

export default function Context({ children }) {
  const canvas = React.useRef(null);

  const [fall, setFall] = React.useState(false);
  const [brickId, setBrickId] = React.useState("");
  const [widthBrick, setWidthBrick] = React.useState("");
  const [heightBrick, setHeightBrick] = React.useState("");
  const [brickCrush, setBrickCrush] = React.useState(null);
  const [brickList, setBrickList] = React.useState(bricks);

  return (
    <GameContext.Provider
      value={{
        fall,
        setFall,
        canvas,
        heightBrick,
        setHeightBrick,
        widthBrick,
        setWidthBrick,
        brickId,
        setBrickId,
        brickCrush,
        setBrickCrush,
        brickList,
        setBrickList
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

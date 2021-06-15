import React from "react";
import "./App.scss";
import { GameContext } from "./context/context";
import { ball, paddle, canvasWidth, canvasHeight } from "./gameComp/data";

function App() {
  const {
    fall,
    setFall,
    canvas,
    setHeightBrick,
    heightBrick,
    brickId,
    setBrickId,
    brickList,
    setBrickList,
  } = React.useContext(GameContext);

  const paddleMove = (ctx) => {
    ctx.fillStyle = "deepskyblue";
    ctx.fillRect(
      paddle.paddleX,
      paddle.paddleY,
      paddle.paddleWidth,
      paddle.paddleHeight
    );
  };

  const ballMove = (ctx) => {
    ctx.fillStyle = "deepskyblue";
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false);
    ctx.moveTo(110, 75);
    ctx.fill();
    ball.x += ball.dx;
    ball.y += ball.dy;

    if (ball.x + ball.radius > canvasWidth) {
      ball.dx *= -1;
    }

    if (ball.x - ball.radius <= 0) {
      ball.dx *= -1;
    }

    if (
      ball.y + ball.radius > paddle.paddleY &&
      ball.x + ball.radius >= paddle.paddleX
    ) {
      ball.dy *= -1;
    }

    if (ball.y - ball.radius <= 30) {
      ball.dy *= -1;
    }
  };

  const brickWall = (ctx) => {
    ctx.fillStyle = "aliceblue";

    brickList.map((rect) => {
      if (
        ball.x + ball.radius >= rect.x + rect.width / 1.5 && 
        ball.x + ball.radius <= rect.x + rect.width &&
        ball.y + ball.radius * 2 <= rect.height * 4
      ) {
        rect.broke = true
      }

      if (rect.broke === false) {
        ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
      }
    });

  };

  React.useEffect(() => {
    const animation = () => {
      const ctx = canvas.current.getContext("2d");
      ballMove(ctx);
      brickWall(ctx);
      paddleMove(ctx);
      requestAnimationFrame(animation);
    };

    animation();
  }, []);

  return (
    <div className="app">
      {fall && (
        <div>
          <h1>Fell Down</h1>
        </div>
      )}
      <canvas
        ref={canvas}
        width={canvasWidth}
        height={canvasHeight}
        className="canvasBg"
      />
      {/* onMouseMove={(e) => paddleX = e.clientX}  */}
    </div>
  );
}

export default App;

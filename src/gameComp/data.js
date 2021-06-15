export const canvasWidth = window.innerWidth -60;
export const canvasHeight = window.innerHeight -30;
let width = 120;

export const ball = {
  x: 50,
  y: 150,
  dx: 5,
  dy: 5,
  radius: 15,
};

export const paddle = {
  paddleX: 0,
  paddleY: canvasHeight - 25,
  paddleWidth: 100,
  paddleHeight: 25,
};

export const bricks = [
  {
    x: 0,
    y: 0,
    width: 120,
    height: 30,
    broke: false,
    id: 1,
  },
  {
    x: width + 15,
    y: 0,
    width: 120,
    height: 30,
    broke: false,
    id: 2,
  },
  {
    x: width * 2 + 30,
    y: 0,
    width: 120,
    height: 30,
    broke: false,
    id: 3,
  },
  {
    x: width * 3 + 45,
    y: 0,
    width: 120,
    height: 30,
    broke: false,
    id: 4,
  },
  {
    x: width * 4 + 60,
    y: 0,
    width: 120,
    height: 30,
    broke: false,
    id: 5,
  },
  {
    x: width * 5 + 75,
    y: 0,
    width: 120,
    height: 30,
    broke: false,
    id: 6,
  },
  {
    x: width * 6 + 90,
    y: 0,
    width: 120,
    height: 30,
    broke: false,
    id: 7,
  },
  {
    x: width * 7 + 105,
    y: 0,
    width: 120,
    height: 30,
    broke: false,
    id: 8,
  },
  {
    x: width * 8 + 110,
    y: 0,
    width: 120,
    height: 30,
    broke: false,
    id: 9,
  },
]



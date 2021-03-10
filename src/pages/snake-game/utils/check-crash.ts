import { SnakeBodyType } from "../types";

type PropsType = {
    gridSize: number,
    snake: SnakeBodyType
}

export const checkCrash = ({snake, gridSize}: PropsType): boolean => {
    const headSnake = snake.slice(-1)[0];
    const body = snake.slice(0, snake.length - 1);

    const isEndLayout = headSnake.row < 0 || headSnake.row === gridSize || headSnake.col < 0 || headSnake.col === gridSize;
    const isIncludesBody = body.some(bodyItem => bodyItem.row === headSnake.row && bodyItem.col === headSnake.col);

    return isEndLayout || isIncludesBody;
}

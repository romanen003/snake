import { SnakeBodyType, FoodType } from "../types";

type PropsType = {
    gridSize: number,
    snake: SnakeBodyType
}

export const getRandomGrid = ({ gridSize, snake }: PropsType): FoodType => {
    const newPosition =  {
        row: Math.floor((Math.random() * gridSize)),
        col: Math.floor((Math.random() * gridSize))
    }

    if (snake.some(bodyItem => bodyItem.row === newPosition.row && bodyItem.col === newPosition.col)) {
        return getRandomGrid({snake, gridSize});
    }

    return  newPosition
}

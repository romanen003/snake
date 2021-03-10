import { DirectionsType, SnakeBodyType } from "../types";
import { DIRECTIONS } from "../constants";

type PropsType = {
    direction: DirectionsType,
    snake: SnakeBodyType
}

export const growSnake = ({ direction, snake }: PropsType): SnakeBodyType  => {
    const nextSnake = [...snake];
    const headSnake = nextSnake.slice(-1)[0];

    nextSnake.push({
        row: headSnake.row + DIRECTIONS[direction].row,
        col: headSnake.col + DIRECTIONS[direction].col
    });

    return nextSnake
};

import { StateType } from "../index";
import { getRandomGrid } from "./get-random-position-of-grid";
import { getCenterOfGrid } from "./get-center-of-grid";
import { DirectionsType } from "../types";

type PropsType = {
    gridSize: number
}

export const getInitialState = ({ gridSize }: PropsType): StateType => {
    return {
        food: getRandomGrid({gridSize: gridSize, snake: []}),
        snake: [getCenterOfGrid(gridSize)],
        currentDirection: DirectionsType.DOWN,
        die: false,
        score: 0
    }
};

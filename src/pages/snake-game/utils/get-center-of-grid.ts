import { FoodType } from "../types";

export const getCenterOfGrid = (gridSize: number): FoodType => {
    const center = Math.floor((gridSize - 1) / 2)

    return {
        row: center,
        col: center,
    }
}

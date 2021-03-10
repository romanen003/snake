import { FoodType, SnakeBodyPartType } from "../types";

type PropsType = {
    food: FoodType,
    headSnake: SnakeBodyPartType
}

export const getFood = ({ food, headSnake }: PropsType): boolean => {
    return  headSnake.row === food.row && headSnake.col === food.col
}

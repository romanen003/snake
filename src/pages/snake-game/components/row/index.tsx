import React, { useMemo } from "react";
import { Col } from './components';
import {FoodType, SnakeBodyType} from "../../types";
import { getNewArray } from "../../utils";

type PropsType = {
    row: number,
    shake: SnakeBodyType,
    food: FoodType,
    gridSize: number
}

export const Row = React.memo(({ row, shake, food, gridSize }: PropsType) => {
    const grid = useMemo(() => {
        return getNewArray(gridSize)
    }, [gridSize])

    const usedColumns = useMemo(() => {
        return shake.reduce((acc: Array<number>, item) => {
            return item.row === row ? [...acc, item.col] : acc;
        }, [])
    }, [shake, row]);

    const containsFood = useMemo(() => {
        return food.row === row ? food.col : -1
    }, [food, row])


    return (
        <div className='grid'>
            {grid.map(item => (
                <Col
                    // @ts-ignore
                    filled={usedColumns.includes(item)}
                    isFood={containsFood === item}
                    key={item}
                />
            ))}
        </div>
    )
});

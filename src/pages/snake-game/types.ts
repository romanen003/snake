export enum DirectionsType {
    TOP = 'TOP',
    RIGHT = 'RIGHT',
    DOWN = 'DOWN',
    LEFT = 'LEFT'
}

type GridType = {
    row: number,
    col: number
}

export type FoodType = GridType

export type SnakeBodyPartType = GridType

export type SnakeBodyType = Array<SnakeBodyPartType>

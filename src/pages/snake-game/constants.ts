import { DirectionsType } from "./types";

export const DIRECTIONS = {
    [DirectionsType.TOP]: {
        row: -1,
        col: 0
    },
    [DirectionsType.RIGHT]: {
        row: 0,
        col: 1
    },
    [DirectionsType.DOWN]: {
        row: 1,
        col: 0
    },
    [DirectionsType.LEFT]: {
        row: 0,
        col: -1
    }
};

export const DEFAULT_GRID_SIZE = 25;

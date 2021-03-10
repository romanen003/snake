export const getGrid = (gridSize: number) => {
    return Array(gridSize * gridSize).fill(0).map((item, index) => ({
        row: Math.floor(index / gridSize),
        col: index % gridSize,
    }));
}

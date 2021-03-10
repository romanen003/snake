import React from 'react';
import './style.css';
import { DirectionsType, SnakeBodyType, FoodType } from "./types";
import { Row } from './components';
import { getNewArray, getRandomGrid, checkCrash, getFood, raiseSnake, getInitialState } from "./utils";

type PropsType = {
    gridSize: number
};

export type StateType = {
    food: FoodType;
    snake: SnakeBodyType;
    currentDirection: DirectionsType;
    die: boolean;
    score: number;
};

export class SnakeGame extends React.Component<PropsType, StateType> {
    tickTime: number;
    timer: number;
    grid: Array<number>

    constructor(props: PropsType) {
        super(props);

        this.state = getInitialState({gridSize: props.gridSize});
        this.tickTime = 1000;
        this.timer = 0;
        this.grid = getNewArray(this.props.gridSize);
    }

    doStep = () => {
        const nextSnake = raiseSnake({
            direction: this.state.currentDirection,
            snake: this.state.snake
        });

        const isCrash = checkCrash({
            snake: nextSnake,
            gridSize: this.props.gridSize
        });

        if (isCrash){
            this.handleClearInterval();
            return this.setState((state) => ({
                ...state,
                die: true
            }))
        }

        const isFood = getFood({
            food: this.state.food,
            headSnake: this.state.snake[this.state.snake.length - 1]
        });

        if (isFood){
            this.setState((state) => ({
                ...state,
                snake: nextSnake,
                food:  getRandomGrid({
                    gridSize: this.props.gridSize,
                    snake: this.state.snake
                }),
                score: nextSnake.length - 1
            }))

            this.tickTime = this.tickTime / 1.5;
            this.handleClearInterval();
            this.handleStartMoving();

        } else {
            nextSnake.shift();

            this.setState((state) => ({
                ...state,
                snake: nextSnake
            }))
        }
    }

    handleKeyPress = (event: KeyboardEvent) => {
        let currentDirection = this.state.currentDirection;

        switch (event.keyCode) {
            case 37:
                if (currentDirection !== DirectionsType.RIGHT){
                    currentDirection = DirectionsType.LEFT;
                }
                break;
            case 38:
                if (currentDirection !== DirectionsType.DOWN){
                    currentDirection = DirectionsType.TOP;
                }
                break;
            case 39:
            default:
                if (currentDirection !== DirectionsType.LEFT){
                    currentDirection = DirectionsType.RIGHT;
                }
                break;
            case 40:
                if (currentDirection !== DirectionsType.TOP){
                    currentDirection = DirectionsType.DOWN;
                }
                break;
        }

        this.setState((state) => ({
            ...state,
            currentDirection
        }))
    }

    componentDidMount() {
        document.body.addEventListener('keydown', this.handleKeyPress);

        this.handleStartMoving()
    }

    componentWillUnmount() {
        document.body.removeEventListener('keydown', this.handleKeyPress);

        this.handleClearInterval()
    }

    handleClearInterval = () => {
        clearInterval(this.timer);
    }

    handleStartMoving = () => {
        this.timer = window.setInterval(() => {
            this.doStep()
        }, this.tickTime);
    }

    render() {
        return (
            <div className="game-container">
                <div className="grid-header">
                    <h1>Your score: {this.state.score}</h1>
                </div>
                {this.state.die ? (
                    <span>you lose</span>
                ) : (
                    <div className='grid-wrapper'>
                        {this.grid.map(item => (
                            <Row
                                gridSize={this.props.gridSize}
                                food={this.state.food}
                                shake={this.state.snake}
                                key={item}
                                row={item}
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    }
}

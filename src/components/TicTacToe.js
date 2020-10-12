import React, {Component} from 'react'
import {Redirect} from "react-router-dom";
import { withRouter } from 'react-router-dom';

export class TicTacToe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            count: 0,
            stage: 0,
            winner: ''
        }
        this.winnerLine=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
            ]

    }

    isWinner(element){
    for(let i = 0; i < this.winnerLine.length;i++){
        let line = this.winnerLine[i];
        if(this.state.squares[line[0]]=== element && this.state.squares[line[1]]=== element &&this.state.squares[line[2]]=== element ){
            let x = (this.state.count % 2 === 0  ) ? 'X' : 'O';
            this.setState({
                winner: 'победу одержал '+ x
            });

            this.setState({
                stage: 1
            });
        }
        else {
            if(this.state.count === 8){
                this.setState({
                    winner: 'ничья'
                });
            }
        }
    }

    }

    handleClick = e => {
        let data = e.target.getAttribute('data-index');
        if(this.state.squares[data] !== ('X' && 'O'))
        {
            let list = this.state.squares;
            list[data] = (this.state.count % 2 === 0  ) ? 'X' : 'O';

            this.setState({
                squares: list,
                count: this.state.count + 1
            });
            this.isWinner(list[data]);
        }
        else {
            alert('Уже стоит')
        }
    };


    render() {
        const {squares} = this.state;

        if(this.state.stage === 1) return <Redirect to={{
            pathname: '/results',
            state: { winner: this.state.winner }
        }}
        />
            return (
                <div className="divStyle"
                >
                    {squares.map((square, index)=> {
                        return (
                            <div key={index}
                                 onClick={this.handleClick}
                                 data-index={index}
                                 className='itemStyle'>
                                {square}
                            </div>
                        )
                    })}
                </div>
            )
        }
}

export default withRouter (TicTacToe);
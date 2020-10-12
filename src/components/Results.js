import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'


export class Results extends Component {


    render() {
        console.log(this.props.location.state.winner)

        return (
            <div className='text'>
                <div className='text-winner'>Результат игры : {this.props.location.state.winner}</div>
                <Link  to='/game'><button className='button-game'>Начать новую игру</button></Link>
            </div>
        )
    }
}

export default withRouter (Results);
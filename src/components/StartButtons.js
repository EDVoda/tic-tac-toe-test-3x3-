import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

export class StartButtons extends Component {


    render() {

        return (
            <div className='text'>
                <Link to='/game'><button className='button-game' >Старт</button></Link>
            </div>

        )
    }
}

export default withRouter (StartButtons);
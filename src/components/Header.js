import React, {Component} from 'react';
import CounterButton from '../components/CounterButton';

class Header extends Component {

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     return false;
    // }

    render() {
        console.log("Rendering Header")
        return (
            <div>
                <h1 className="f1">RoboFriends</h1>
                <CounterButton color={'red'}/>
            </div>
        );
    }
}

export default Header;
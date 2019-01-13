import React, {PureComponent} from 'react';

// will re-render only when props will actually change
class CounterButton extends PureComponent {

    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    // use with Component, may impact performance (run before render() )
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     if (this.state.count !== nextState.count) {
    //         return true
    //     }
    //     return false
    // }

    updateCount = () => {
        // setState is async
        this.setState((state) => {
            return {count: (state.count + 1)}
        })
    }

    render() {
        console.log("Rendering CounterButton")
        return (
            <button color={this.props.color} onClick={this.updateCount}>
                Count: {this.state.count}
            </button>
        );
    }
}

export default CounterButton;
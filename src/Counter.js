import React, {Component} from 'react';
import BeautifulButton from "./BeautifulButton";

export default class Counter extends Component{

    constructor(props) {
        super(props);
        this.state = {
            count: props.initial
        }
    }

    handleButtonClick() {
        this.setState({
            count: this.state.count + this.props.number
        });
    }

    render() {
        const count = this.state.count;
        
        return (
            <BeautifulButton
                onClick={() => this.handleButtonClick()}
                label={count}
            />
        );
    }
}

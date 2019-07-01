import React, {Component} from 'react';

export default class MyComponent extends Component{
    render() {
        const {name, github} = this.props.user;

        return (
            <a href={github}>Hello {name}</a>
        )
    }
}

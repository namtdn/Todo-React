import React, {Component} from "react";

export default class BeautifulButton extends Component{

    render() {
        const label = this.props.label;
        const onClickCallBack = this.props.onClick;

        return (
            <button onClick={() => onClickCallBack()}>
                {label}
            </button>

        )
    }
}
'use client'
import React, {Component} from "react";
export default class CardComponent extends Component {
    render() {
        return (
            <div className={"shadow-md bg-white border rounded-lg"}>
                {this.props.title && (<div className="flex justify-end p-2 px-4 border-b-2">
                    <div className="w-full m-auto">{this.props.title}</div>
                </div>)}
                {this.props.children}
            </div>
        )
    }
}
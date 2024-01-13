"use client"
import React, {Component} from "react";
export default class ButtonComponent extends Component {
    constructor() {
        super();
        this.state = {
            dropdown: false
        }
    }

    render() {
        let dropdownClass
        let themeButton = 'rounded-md py-1.5 m-auto px-2 transition ease-in-out ' + this.props.color
        if (this.state.dropdown) {
            dropdownClass = "absolute overflow-hidden bg-white right-0 top-3 shadow-md rounded-lg transition-all ease-in-out duration-400 z-50 border max-h[40rem]"
        } else {
            dropdownClass = "absolute overflow-hidden bg-white right-0 top-3 shadow-md rounded-lg transition-all ease-in-out duration-400 z-50 max-w-0 max-h-0"
        }
        return (
            <div className={"flex relative"}>
                <button form={this.props.form} type={this.props.type}
                        className={themeButton}>
                    {this.props.text && this.props.text}
                </button>
                {this.props.dropdown && (<div id="dropdown" class=""><div class="flex flex-col gap-1 p-1 text-sm">{this.props.children}</div></div>)}
            </div>
        )
    }
}
import React, { Component } from 'react'
import Text from './Text';
// import TextList from './TextList';

export default class Hotspot extends Component {
    func(arr) {
        console.log(arr)
    }
    render() {
        return (
            <div>
                <Text funx={(arr) => this.func(arr)} text='热点' />
                {/* <TextList /> */}
            </div>
        )
    }
}

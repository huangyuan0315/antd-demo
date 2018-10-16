import React, { Component } from 'react'
import Text from './Text';

export default class Hotspot extends Component {
    func(arr) {
        console.log(arr)
    }
    render() {
        return (
            <Text funx={(arr) => this.func(arr)} text='热点' />
        )
    }
}

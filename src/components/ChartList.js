import React, { Component } from 'react';
class ChartList extends Component {
    render() {
        return (
            this.props.chartList.map((it, k) => {
                return <div className='list-detail' key={k}>
                    <div style={{ width: '200px' }}>
                        <img className='list-img' src={`${it[this.props.img]}`} />
                    </div>
                    <div style={{ flex: 1, marginLeft: 20 }}>
                        <h3>{it[this.props.title]}</h3>
                        <p>{it[this.props.details]}</p>
                    </div>
                </div>
            })
        )
    }
}

export default ChartList;

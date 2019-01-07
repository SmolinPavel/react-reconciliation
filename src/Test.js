import React, { Component } from 'react';

class Test extends Component {
    state = {
        items: [
            {
                id: 'a',
                open: true,
            },
            {
                id: 'b',
                open: true,
            },
            {
                id: 'c',
                open: true,
            },
            {
                id: 'd',
                open: true,
            },
        ],
    };

    handleClick = itemId => {
        const { items } = this.state;
        const newItems = items.filter(({ id }) => id !== itemId);
        this.setState({ items: newItems });
    };

    render() {
        const { items } = this.state;
        return (
            <div>
                {items.map(({ id, open }, idx) => (
                    <div key={idx}>
                        { open && (<h2 onClick={() => this.handleClick(id)}>{id}</h2>)}
                    </div>
                ))}
            </div>
        )
    }
}


export default Test;
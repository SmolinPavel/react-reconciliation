import React, { PureComponent } from "react";

import List from "./List";

const items1 = [1, 2, 3, 4];

const items2 = [1, 3, 2, 4];

class Reconliation extends PureComponent {
    state = {
        items: [],
        even: true,
    };

    componentDidMount() {
        console.log("component did mount");
        this.interval = setInterval(this.updateItems, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updateItems = () => {
        const { even } = this.state;
        const items = even ? items1 : items2;
        this.setState({ items, even: !even });
    };

    render() {
        const { items } = this.state;

        return <List items={items} />;
    }
}

export default Reconliation;
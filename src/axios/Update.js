import React, { Component } from "react";
import Child from "../Tasksday7/Task2";
import BasicExample from "../spinner/spin1";
import Parent from "../Tasksday7/Task3";

class Updating extends Component {
    constructor() {
        super();
        this.state = { products: null, count: 0, preve: null };
    }

    handler1 = () => {
        this.setState({ count: this.state.count + 1 });
    };

    handler2 = () => {
        this.setState({ count: this.state.count - 1 });
    };

    componentDidUpdate = (prevProps, prevState, snapshot) => {
        // Fetch new product details if count has changed
        if (prevState.count !== this.state.count) {
            fetch(`https://fakestoreapi.com/products/${this.state.count}`)
                .then((res) => res.json())
                .then((a) => {
                    this.setState({ products: a });
                });
        }

        // Log previous and current state products
        if (snapshot && snapshot.preve) {
            console.log("Previous products:", snapshot.preve);
        }
        if (this.state.products) {
            console.log("Current products:", this.state.products);
        }
    };

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // Return the previous products before state updates
        return { preve: prevState.products };
    }

    render() {
        return (
            <>
                <button onClick={this.handler1}>NextCard</button>
                <button onClick={this.handler2}>PreviousCard</button>

                <h1>Count: {this.state.count}</h1>

                {/* Display previous state products */}
                <div>
                    {this.state.preve ? (
                        <Parent
                            title={this.state.preve.title}
                            image={this.state.preve.image}
                            description={this.state.preve.description}
                            id={`Previous ID: ${this.state.preve.id}`}
                        />
                    ) : (
                        <h1>No Previous Data</h1>
                    )}
                </div>

                {/* Display current state products */}
                <div>
                    {!this.state.products ? (
                        <BasicExample />
                    ) : (
                        <Child
                            title={this.state.products.title}
                            image={this.state.products.image}
                            description={this.state.products.description}
                            id={`Current ID: ${this.state.products.id}`}
                        />
                    )}
                </div>
            </>
        );
    }
}

export default Updating;

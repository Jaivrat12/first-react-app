import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
import { ReactComponent } from '*.svg';
import App from './App';
import * as serviceWorker from './serviceWorker';
*/


/*=========================================================|FUNCTIONS & CLASSES|=================================================================*/

function Welcome(props) {

    return <h1>Welcome, {props.name}!</h1>;
}

function counting() {

    counter++;
    const el = <p>Counting per milliseconds(don't know why): {counter}</p>
    ReactDOM.render(

        el, document.getElementById('counter')
    );
}

class Item extends React.Component {

    state = {

        itemCount: 0,
        totalPrice: 0,
    }

    increment = () => {

        this.setState({

            itemCount: this.state.itemCount + 1,
            totalPrice: Number(this.props.price) * this.state.itemCount,
        });
    }

    decrement = () => {

        if (this.state.itemCount > 0) {

            this.setState({

                itemCount: this.state.itemCount - 1,
                totalPrice: (Number(this.props.price) * this.state.itemCount).toFixed(2),
            });
        }
    }

    /*
    componentWillUpdate() {

        totalPrice = Number(this.props.price) * this.state.itemCount;
        console.log(totalPrice);

        this.setState({

            totalAmount: Number(this.props.price) * this.state.itemCount,
        });
        //return this.state.totalAmount;
    }
    */

    render() {

        return <div className={this.props.color}>
            <b> Name: </b> {this.props.name} <br />
            <b> Price: </b> ${this.props.price} <br />
            <b> Add to your Cart: {this.state.itemCount} </b> <br />
            <button onClick={this.increment}> + </button>
            <button onClick={this.decrement}> - </button> <br />
            <b> Total Price: </b> ${this.state.totalPrice}
        </div>;
    }
}

function ShoppingList() {

    return <div>
        <Item name="Cheese" price="4.99" color="yellow" />
        <Item name="Bread" price="1.50" color="brown" />
        <Item name="Ice Cream" price="24.00" color="pink" />
    </div>;
}

function Pay() {

    const [val, setVal] = useState(0);

    function handleChange(e) {

        setVal(e.target.value);
    }

    function calcDiscount(val) {

        return (val - (val * 0.1)).toFixed(2);
    }

    return <div>
        <b> Enter Grand Total: </b>
        <input type="text" placeholder="Get 10% Discount!!!" onChange={handleChange} />
        <button> Pay ${calcDiscount(val)} </button>
    </div>;
}


/*============================================================|VARIABLES|====================================================================*/

var user = prompt("Please Enter Your Name:")
let counter = 0;
const welcomeHeading = <Welcome name = { user} />
const shoppingList = <ShoppingList />
const pay = <Pay />


/*============================================================|DRIVER CODE|=================================================================*/

ReactDOM.render(

    welcomeHeading, document.getElementById('root')
);

setInterval(counting, 1);

ReactDOM.render(

    shoppingList, document.getElementById('shoppingList')
);

ReactDOM.render(

    pay, document.getElementById('pay')
);
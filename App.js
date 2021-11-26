import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vegetables: [
        { pid: 17, name: "Cabbage", price: 1.5 },
        { pid: 20, name: "Lettuce", price: 0.55 },
        { pid: 21, name: "Parsnips", price: 1.25 },
        { pid: 154, name: "Potatoes", price: 2.25 },
        { pid: 29, name: "Carrots", price: 0.85 },
        { pid: 28, name: "Cauliflower", price: 1.85 },
        { pid: 8, name: "Pumpkin", price: 2.95 },
        { pid: 34, name: "Brocolli", price: 0.95 }
      ],
      total: 0,
      basket: []
    };
    this.addProduct = this.addProduct.bind(this);
    this.emptyBasket = this.emptyBasket.bind(this);
    this.addProductByID = this.addProductByID.bind(this);
  }

  emptyBasket() {
    this.setState({ basket: [] });
  }

  searchForProductByID(id) {
    return function (vegObject) {
      return vegObject.pid === id;
    };
  }

  addProductByID(id) {
    let foundProduct = this.state.vegetables.filter(
      this.searchForProductByID(id)
    );
    this.setState({ basket: this.state.basket.concat(foundProduct) });
  }

  addProduct(productPrice) {
    let n = this.state.total;
    n = n + productPrice;
    this.setState({ total: n });
  }

  getBasketTotal(acc, obj) {
    return acc + obj.price;
  }

  removeProduct(indexRemove) {
    if (this.state.basket.length > 0) {
      let tempBasket = this.state.basket;
      tempBasket.splice(indexRemove, 1);
      this.setState({ basket: tempBasket });
    }
  }

  searchForProductByID2(id) {
    return function (theObject) {
      return theObject.pid === id;
    };
  }

  deleteProductFromBasket(productID) {
    let indexRemove = this.state.basket.findIndex(
      this.searchForProductByID2(productID)
    );
    if (indexRemove >= 0) this.removeProduct(indexRemove);
  }

  render() {
    return (
      <div className="App">
        <h1>Vegetable Shop</h1>
        {this.state.vegetables.map((v, index) => (
          <div key={index}>
            {v.name}&nbsp;
            <button
              onClick={() => {
                this.addProductByID(v.pid);
              }}
            >
              Add {v.name}
            </button>
          </div>
        ))}

        <Basket
          basket={this.state.basket}
          removal={this.deleteProductFromBasket}
        />

        {this.state.basket.length > 0 && (
          <button onClick={this.emptyBasket}>Empty Basket</button>
        )}
      </div>
    );
  }
}
class Basket extends Component {
  /** This callback function will be used by the reduce
   * function call. We use this to calculate the total
   * cost of objects in this.state.basket.
   */
  getBasketTotalValue(acc, obj) {
    return acc + obj.price;
  }

  render() {
    const localBasket = this.props.basket;
    const removeObjectFunction = this.props.removal;
    return (
      <div className="Basket">
        <hr />
        {localBasket.length > 0 &&
          localBasket.map((b, index) => (
            <div key={index}>
              {b.name},{b.price}
              <button
                onClick={() => {
                  removeObjectFunction(b.pid);
                }}
              >
                Remove Product
              </button>
            </div>
          ))}
        {localBasket.length > 0 && (
          <p>
            Total: ${localBasket.reduce(this.getBasketTotalValue, 0).toFixed(2)}
          </p>
        )}
      </div>
    );
  }
} // close the Basket component

export default App;

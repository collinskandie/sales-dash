import React, { Component } from "react";
import Barchart from "./barchart";
class Sales extends Component {
  constructor() {
    super();
    this.state = {
      sales: [],
    };
  }
  componentDidMount() {
    fetch("/api/summarySales")
      .then((res) => res.json())
      .then((sales) =>
        this.setState({ sales }, () => console.log("sales fetched", sales))
      );
  }
  render() {
    return (
      <div>
        <div className="Header">
          <h1>Sales Dashboard</h1>
          {/* <ul>
            {this.state.sales.map((sales) => (
              <li key={sales.Invoice}>
                {sales.Invoice} {sales.SalesOrder} {sales.Salesperson}{" "}
                {sales.NetSalesValue} {sales.TrnYear}
              </li>
            ))}
          </ul> */}
         <div>
         {/* <Barchart/> */}

         </div>
        </div>
      </div>
    );
  }
}
export default Sales;

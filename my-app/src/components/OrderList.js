export default function OrderList({ stock }) {
    console.log(stock)

    function handleOrderDelete() {


    }

    return (
      <div className="orderlist">
        <div className="order-card">
          <h3>{stock.company}</h3>
          <h4>{stock.quantity} shares</h4>
          <h4>${stock.price}</h4> 
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button className="dlt-stock-button"
            onClick={() => handleOrderDelete(stock.id)}> x 
            </button>
         </div>
      </div>
    );
}
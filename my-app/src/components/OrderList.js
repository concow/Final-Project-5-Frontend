

export default function OrderList({ stock }) {
    console.log(stock)

    function handleOrderDelete() {
    
    }
    
    return (
      <div className="orderlist">
        <div className="order-card">
          <h2>{stock.company}</h2>
          <h4>{stock.quantity}</h4>
          <h4>${stock.price}</h4> 
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button className="dlt-stock-button"
            onClick={() => handleOrderDelete(stock.id)}> Remove </button> 
         </div>
      </div>
    );
}
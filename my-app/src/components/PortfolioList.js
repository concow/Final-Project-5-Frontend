import Portfolio from "./Portfolio";

export default function PortfolioList({ stock, handleAddStock }) {
  return (
    <div className="portfolio-card">
      <div className="portfolio-card">
        <h4>{stock.company}</h4>
        <h4>{stock.quantity}</h4>
        <h4>${stock.price}</h4>
        &nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
}

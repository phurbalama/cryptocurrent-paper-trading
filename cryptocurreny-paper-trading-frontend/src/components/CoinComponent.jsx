

function CoinComponent({name,image,symbol,price,volume,marketcap,percentChange}) {
    return <div className="coin-container">
      <div className="coin-row">
          <div className="coin">
              <img src={image} alt="crypto" />
              <h1>{name}</h1>
              <p className="coin-symbol">{symbol}</p>

          </div>
          <div className="coin-data">
              <p className="coin-price">${price}</p>
              <p className="volume">${volume.toLocaleString()}</p>
              <p className="coin-percent-change">{percentChange.toFixed(2)}%</p>
              <p className="coin-marketcap">${marketcap.toLocaleString()}</p>

          </div>
      </div>

  </div>
    
    
}


export default CoinComponent;

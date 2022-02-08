import React, { useEffect, useState } from 'react';
import CoinService from '../services/CoinService';
import CoinComponent from './CoinComponent';

function SearchComponent(props) {
    const[coins,setCoins] = useState([]);
  
    useEffect(() =>{
        CoinService().then(res =>{
            setCoins(res.data);
        }).catch(error => alert("Error fetching API data"))
    },[coins])
    
    function filteredCoin(e){
        return coins.filter((e)=>e.id.toLowerCase().includes(props.name.toLowerCase()))
    }    
    return (
    <div className="coin-app">
        {
        filteredCoin().map((coin) =>{
            return (<CoinComponent
                        key={coin.id}
                        name={coin.id}
                        image={coin.image}
                        symbol={coin.symbol}
                        marketcap={coin.market_cap}
                        price={coin.current_price}
                        percentChange={coin.price_change_percentage_24h}
                        volume={coin.total_volume}
                   />)
            
        })
        
        }
        
    </div>);

}

export default SearchComponent;

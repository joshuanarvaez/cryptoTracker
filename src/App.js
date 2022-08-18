import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from './Coin';
import './styles/app.css'

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data);
        // console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-container">
      <div className="search-container">
        <h1 className="search-header"> Top 100 Crypto Tracker </h1>
        <form>
          <input className="search-textbox" onChange={handleChange} type="text" placeholder="Search" />
        </form>
      </div>
      <div className="header-columns">
        <h2 className="col-1"> Mkt Cap Rank </h2>
        <h2 className="col-2"> Symbol </h2>
        <h2 className="col-3"> Coin </h2>
        <h2 className="col-4"> Ticker </h2>
        <h2 className="col-5"> Price </h2>
        <h2 className="col-6"> 24h </h2>
        <h2 className="col-7"> Market Cap </h2>
        <h2 className="col-8"> Total Volume </h2>
        <h2 className="col-9"> Circ. Supply </h2>
        <h2 className="col-10"> ATH </h2>
        <h2 className="col-11"> ATL </h2>
        <h2 className="col-12"> Last Updated </h2>
      </div>

      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            symbol={coin.symbol}
            name={coin.name}
            image={coin.image}
            price={coin.current_price}
            marketCap={coin.market_cap}
            marketCapRank={coin.market_cap_rank}
            totalVolume={coin.total_volume}
            high24h={coin.high_24h}
            low24h={coin.low_24h}
            priceChangePercentage24h={coin.price_change_percentage_24h}
            marketCapChangePercentage24h={coin.market_cap_change_percentage_24h}
            circulatingSupply={coin.circulating_supply}
            totalSupply={coin.total_supply}
            allTimeHigh={coin.ath}
            allTimeLow={coin.atl}
            lastUpdated={coin.last_updated}
          />
        );
      })}
    </div>
  );
}

export default App;

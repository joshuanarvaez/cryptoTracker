import React from 'react'
import './styles/coin.css'

const Coin = ({
    symbol,
    name,
    image,
    price,
    marketCap,
    marketCapRank,
    totalVolume,
    priceChangePercentage24h,
    circulatingSupply,
    allTimeHigh,
    allTimeLow,
    lastUpdated
}) => {
    return (
        <>
            <div className='data-columns'>
                <div className="col-1">
                    <h5 className="market-cap-rank"> {marketCapRank} </h5>
                </div>

                <div className="col-2">
                    <img src={image} alt="currency symbol" />
                </div>

                <div className="col-3">
                    <h5 className='coin-name'> {name} </h5>
                </div>

                <div className="col-4">
                    <h5 className="coin-ticker"> {symbol} </h5>
                </div>

                <div className="col-5">
                    <h5 className="coin-price"> {price.toLocaleString("en-US", { style: "currency", currency: "USD" })} </h5>
                </div>
                
                {/* display 24hr percentage as red or green */}
                <div className="col-6">
                    {priceChangePercentage24h < 0 ? (
                        <h5 className='coin-percent-24h red'>{priceChangePercentage24h.toFixed(2)}%</h5>
                    ) : (
                        <h5 className='coin-percent-24h green'>{priceChangePercentage24h.toFixed(2)}% </h5>
                    )}
                </div>

                <div className="col-7">
                    <h5 className="coin-market-cap">{marketCap.toLocaleString("en-US", { style: "currency", currency: "USD" })} </h5>
                </div>

                <div className="col-8">
                    <h5 className="coin-total-volume">{totalVolume.toLocaleString("en-US", { style: "currency", currency: "USD" })} </h5>
                </div>

                <div className="col-9">
                    <h5 className="coin-circ-supply">{circulatingSupply.toLocaleString()} </h5>
                </div>

                <div className="col-10">
                    <h5 className="coin-ath">{allTimeHigh.toLocaleString("en-US", { style: "currency", currency: "USD" })} </h5>

                </div>

                <div className="col-11">
                    <h5 className="coin-atl">{allTimeLow.toLocaleString("en-US", { style: "currency", currency: "USD" })} </h5>

                </div>

                <div className="col-12">
                    <h5 className="coin-last-updated">{lastUpdated} </h5>
                </div>
            </div>


        </>


    )
}

export default Coin
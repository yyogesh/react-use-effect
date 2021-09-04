import React from 'react'

const BitCoin = () => {
    const [price, setPrice] = React.useState(0);
    const [autoRefresh, setAutoRefresh] = React.useState(true)


    React.useEffect(() => {
        let internal;
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.coincap.io/v2/assets/bitcoin");
                const result = await response.json();
                const bitCoinPrice = (+result?.data?.priceUsd).toFixed(2);
                setPrice(bitCoinPrice);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();

        if (autoRefresh) {
            internal = setInterval(() => {
                fetchData();
            }, 5 * 1000);
        }

        return () => { // cleanup
            clearInterval(internal);
        }
    }, [autoRefresh]);

    return (
        <div>
            <h2>{price && `Bitcoin Price: $${price}`}</h2>
            <div className="refresh">
                <div className="refresh-label">Auto refresh:</div>
                <label className="switch">
                    <input
                        type="checkbox"
                        checked={autoRefresh}
                        onChange={e => {
                            setAutoRefresh(e.target.checked)
                        }}
                    />
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    )
}

export default BitCoin

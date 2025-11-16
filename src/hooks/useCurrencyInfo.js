import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => {
        setData(res[currency]);  // extract inner object
      })
      .catch((err) => {
        console.error("API error:", err);
        setData({});
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;

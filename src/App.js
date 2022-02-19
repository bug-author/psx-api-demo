import "./App.css";
import { useState, useEffect } from "react";
import Spinner from "./components/Spinner";
import Tables from "./components/Tables";

function App() {
  const jsonn = {
    TOP_ACTIVE_STOCKS: {
      SYMBOL: {
        0: "BOP",
        1: "SNBL",
        2: "TELE",
      },
      PRICE: {
        0: "8.26",
        1: "10.50",
        2: "15.99",
      },
      CHANGE: {
        0: "-0.10 (-1.20%)",
        1: "0.02 (0.19%)",
        2: "-0.11 (-0.68%)",
      },
      VOLUME: {
        0: "60,301,500",
        1: "16,356,000",
        2: "11,100,911",
      },
    },
    TOP_ADVANCERS: {
      SYMBOL: {
        0: "FPJM",
        1: "FDIBL",
        2: "TRSM",
      },
      PRICE: {
        0: "2.49",
        1: "3.14",
        2: "2.50",
      },
      CHANGE: {
        0: "0.38 (18.01%)",
        1: "0.40 (14.60%)",
        2: "0.28 (12.61%)",
      },
      VOLUME: {
        0: "6,500",
        1: "3,033,500",
        2: "4,000",
      },
    },
    TOP_DECLINERS: {
      SYMBOL: {
        0: "SLL",
        1: "HICL",
        2: "PINL",
      },
      PRICE: {
        0: "2.65",
        1: "6.25",
        2: "4.36",
      },
      CHANGE: {
        0: "-0.50 (-15.87%)",
        1: "-0.95 (-13.19%)",
        2: "-0.49 (-10.10%)",
      },
      VOLUME: {
        0: "2,000",
        1: "15,000",
        2: "1,000",
      },
    },
  };

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    updateData();
  }, []);

  const updateData = async () => {
    setLoading(true);
    const response = await fetch(
      "https://pakistan-stock-exchange.herokuapp.com/psx/top-3",
      {
        "Content-Type": "application/json",
      }
    );
    // console.log(response);
    const json = await response.json();
    setData(json);
    console.log(json);
    setLoading(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            PSX API Demo Application
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"></li>
            </ul>
          </div>
        </div>
      </nav>
      {loading && <Spinner />}

      {data && <Tables data={data} />}
    </>
  );
}

export default App;

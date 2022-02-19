import React from "react";

function Tables(props) {
  const data = props.data;
  //   console.log("data")
  //   console.log(data);

  const colorSwitch = (str) => {
    if (str.startsWith("-")) {
      return { color: "red" };
    } else {
      return { color: "green" };
    }
  };

  return (
    <>
      <div className="container" style={{ padding: 50 }}>
        <h2>Top Active Stocks</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Symbol</th>
              <th scope="col">Price</th>
              <th scope="col">Change</th>
              <th scope="col">Volume</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{data["TOP_ACTIVE_STOCKS"]["SYMBOL"][0]}</td>
              <td>{data["TOP_ACTIVE_STOCKS"]["PRICE"][0]}</td>
              <td style={colorSwitch(data["TOP_ACTIVE_STOCKS"]["CHANGE"][0])}>
                {data["TOP_ACTIVE_STOCKS"]["CHANGE"][0]}
              </td>
              <td>{data["TOP_ACTIVE_STOCKS"]["VOLUME"][0]}</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>{data["TOP_ACTIVE_STOCKS"]["SYMBOL"][1]}</td>
              <td>{data["TOP_ACTIVE_STOCKS"]["PRICE"][1]}</td>
              <td style={colorSwitch(data["TOP_ACTIVE_STOCKS"]["CHANGE"][1])}>
                {data["TOP_ACTIVE_STOCKS"]["CHANGE"][1]}
              </td>
              <td>{data["TOP_ACTIVE_STOCKS"]["VOLUME"][1]}</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>{data["TOP_ACTIVE_STOCKS"]["SYMBOL"][2]}</td>
              <td>{data["TOP_ACTIVE_STOCKS"]["PRICE"][2]}</td>
              <td style={colorSwitch(data["TOP_ACTIVE_STOCKS"]["CHANGE"][2])}>
                {data["TOP_ACTIVE_STOCKS"]["CHANGE"][2]}
              </td>
              <td>{data["TOP_ACTIVE_STOCKS"]["VOLUME"][2]}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="container" style={{ padding: 50 }}>
        <h2>Top Advancers</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Symbol</th>
              <th scope="col">Price</th>
              <th scope="col">Change</th>
              <th scope="col">Volume</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{data["TOP_ADVANCERS"]["SYMBOL"][0]}</td>
              <td>{data["TOP_ADVANCERS"]["PRICE"][0]}</td>
              <td style={colorSwitch(data["TOP_ADVANCERS"]["CHANGE"][0])}>
                {data["TOP_ADVANCERS"]["CHANGE"][0]}
              </td>
              <td>{data["TOP_ADVANCERS"]["VOLUME"][0]}</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>{data["TOP_ADVANCERS"]["SYMBOL"][1]}</td>
              <td>{data["TOP_ADVANCERS"]["PRICE"][1]}</td>
              <td style={colorSwitch(data["TOP_ADVANCERS"]["CHANGE"][1])}>
                {data["TOP_ADVANCERS"]["CHANGE"][1]}
              </td>
              <td>{data["TOP_ADVANCERS"]["VOLUME"][1]}</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>{data["TOP_ADVANCERS"]["SYMBOL"][2]}</td>
              <td>{data["TOP_ADVANCERS"]["PRICE"][2]}</td>
              <td style={colorSwitch(data["TOP_ADVANCERS"]["CHANGE"][2])}>
                {data["TOP_ADVANCERS"]["CHANGE"][2]}
              </td>
              <td>{data["TOP_ADVANCERS"]["VOLUME"][2]}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="container" style={{ padding: 50 }}>
        <h2>Top Decliners</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Symbol</th>
              <th scope="col">Price</th>
              <th scope="col">Change</th>
              <th scope="col">Volume</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{data["TOP_DECLINERS"]["SYMBOL"][0]}</td>
              <td>{data["TOP_DECLINERS"]["PRICE"][0]}</td>
              <td style={colorSwitch(data["TOP_DECLINERS"]["CHANGE"][0])}>
                {data["TOP_DECLINERS"]["CHANGE"][0]}
              </td>
              <td>{data["TOP_DECLINERS"]["VOLUME"][0]}</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>{data["TOP_DECLINERS"]["SYMBOL"][1]}</td>
              <td>{data["TOP_DECLINERS"]["PRICE"][1]}</td>
              <td style={colorSwitch(data["TOP_DECLINERS"]["CHANGE"][1])}>
                {data["TOP_DECLINERS"]["CHANGE"][1]}
              </td>
              <td>{data["TOP_DECLINERS"]["VOLUME"][1]}</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>{data["TOP_DECLINERS"]["SYMBOL"][2]}</td>
              <td>{data["TOP_DECLINERS"]["PRICE"][2]}</td>
              <td style={colorSwitch(data["TOP_DECLINERS"]["CHANGE"][2])}>
                {data["TOP_DECLINERS"]["CHANGE"][2]}
              </td>
              <td>{data["TOP_DECLINERS"]["VOLUME"][2]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Tables;

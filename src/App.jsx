import React, { useState } from "react";
import CountryList from "./CountryList";
import styles from "./styles";
import Footer from "./Footer";

const App = () => {
  //state. 먼저 useState를 사용하여 hook을 사용해야 한다. 상태를 적용받은 ui는 자동으로 바뀐다.
  //setCountries - 상태를 변경하는 기능
  //
  const [countries, setCountries] = useState([
    { no: 1, country: "이집트", visited: false },
    { no: 2, country: "일본", visited: true },
    { no: 3, country: "피지", visited: false },
    { no: 4, country: "콜롬비아", visited: false },
  ]);
  const [theme, setTheme] = useState("basic");

  let msg = <i>world</i>;
  const add = (x, y) => {
    return (
      <div className="card card-body bg-light mb-3">
        {x} + {y}{" "}
      </div>
    );
  };
  return (
    <div className="container">
      <h1>hello {msg}</h1>
      <hr style={styles.dashStyle}></hr>
      {add(4, 5)}
      <CountryList countries={countries} />
      <Footer theme={theme} />
    </div>
  );
};

export default App;

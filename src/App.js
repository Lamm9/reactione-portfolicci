import React, { useEffect, useState } from "react";
import PortfolioContainer from "./components/pc";
import Loader from "./components/Loader";
import './styles/App.css';

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);
  return (
    <div className="App">{loading ? <Loader /> : <PortfolioContainer />}</div>
  );
};

export default App;

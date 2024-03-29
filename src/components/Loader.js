import React from "react";
import '../styles/App.css';
import TextTransition from 'react-text-transition';

export default function Loader() {
  const TEXTS = [
    "a Developer",
    "a Designer",
    "an Artist",
    "here to help."
  ];

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(index => index + 1);
    }, 1500);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="loader">
      <div className="container-fluid mt-5">
        <div className="row mt-5">
          <div className="col-2 text-end pe-2 load">
            <h1>I'm</h1>
          </div>
          <div className="col-8 text-start p-0 load">
            <h1><TextTransition>{TEXTS[index % TEXTS.length]}</TextTransition></h1>
          </div>
        </div>
      </div>
    </div>
  )
}
import React, { useState } from "react";
import validateEmail from "../utils/valEmail";

export default function Form() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    }
  };

    const handleFormSubmit = (e) => {
      e.preventDefault();

      if (!validateEmail(email) || !name) {
        setErrorMessage("invalid name or email format.");
        return;
      }
      console.log("Success!");
    };

    return (
      <div>
        <form>
          <label className="text-light form-label" htmlFor="name">
            Your Name
          </label>
          <input
            type="text"
            className="form-control bg-x-dark border-0 mt-1"
            id="name"
            onChange={handleInputChange}
            placeholder="Name"
          />
          <label className="text-light form-label mt-1" htmlFor="email">
            Your Email
          </label>
          <input
            type="email"
            className="form-control bg-x-dark border-0"
            id="email"
            onChange={handleInputChange}
            placeholder="fantastic-client@bmail.com"
          />
          <label className="text-light form-label mt-1" htmlFor="message">
            Comments
          </label>
          <textarea
            type="text"
            className="form-control bg-x-dark border-0"
            id="message"
            onChange={handleInputChange}
            rows="3"
            placeholder="Let's work together!"
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary p-2 pt-1 pb-1 mt-3"
            onClick={handleFormSubmit}
          >
            Let's talk
          </button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    );
  };

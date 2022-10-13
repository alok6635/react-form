import React, { useEffect, useState } from "react";

const OurDetails = () => {
  const data = { name: "", email: "", password: "" };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    console.log("registered");
  }, [flag]);

  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("All fields are mandatory");
    } else {
      setFlag(true);
    }
  }
  return (
    <>
      <pre>
        {flag ? (
          <h2 className="ui-define">
            Hello {inputData.name} you've registered successfully{" "}
          </h2>
        ) : (
          ""
        )}
      </pre>
      <form className="container" onSubmit={handleSubmit}>
        <div className="header">
          <h1>Regrisation frorm</h1>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={inputData.name}
            onChange={handleData}
          />
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={inputData.email}
            onChange={handleData}
          />
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={inputData.password}
            onChange={handleData}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default OurDetails;

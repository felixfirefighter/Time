import React from "react";
import spinner from "./spinner.gif";

export default () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <img src={spinner} alt="Loading..." />
    </div>
  );
};

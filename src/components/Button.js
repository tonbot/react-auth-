import React from "react";
export default function Button(param) {
  return (
    <button className="btn btn-primary rounded-pill px-5 py-2">{param.name}</button>
  );
}

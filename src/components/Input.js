

import React from "react";
export default function Input({type, id, placeholder, arial }) {
  return (
    <input type={type} className="form-control rounded-pill py-2 px-3" id={id} placeholder={placeholder}
    aria-describedby={arial} />
  );
}

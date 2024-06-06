

import React from "react";
export default function Button({ id, name, className, onClick }) {
  const combinedClassName = `btn shadow rounded-pill px-5 py-2 ${className}`;
  return (
    <button id={id} type="button" className={combinedClassName} onClick={onClick}>
      {name}
    </button>
  );
}

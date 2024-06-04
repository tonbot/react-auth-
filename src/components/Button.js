

import React from "react";
export default function Button({ name, className, onClick }) {
  const combinedClassName = `btn shadow rounded-pill px-5 py-2 ${className}`;
  return (
    <button type="button" className={combinedClassName} onClick={onClick}>
      {name}
    </button>
  );
}

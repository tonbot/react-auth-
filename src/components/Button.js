

import React from "react";
export default function Button({ name, className }) {
  const combinedClassName = `btn shadow rounded-pill px-5 py-2 ${className}`;
  return (
    <button type="button" className={combinedClassName}>
      {name}
    </button>
  );
}

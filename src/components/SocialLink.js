

import React from "react";

export default function SocialLink({icon }) {
 
  return (
    <div className="border rounded-circle d-flex justify-content-center align-items-center">
        <i className={icon}></i>
    </div>
  );
}

import React from "react";
import { Oval } from "react-loader-spinner";

export default function Spinner() {
  return (
    <div>
      <Oval heigth="20" width="20" color="#fff" ariaLabel="loading" />
    </div>
  );
}

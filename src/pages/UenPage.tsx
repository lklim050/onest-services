import React from "react";
import { Link } from "react-router-dom";
import UENValidatorPanel from "../components/UENValidatorPanel";

export const UenPage = () => {
  return (
    <div className="p20">
      <h1>UEN page here</h1>
      <Link to="/">&larr; Back to Home</Link>
      <UENValidatorPanel />
    </div>
  );
};

export default UenPage;

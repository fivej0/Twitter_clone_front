import React from "react";
import AppLatout from "../components/AppLayout";

const Twitter = ({ Component }) => {
  return (
    <>
      <AppLatout>
        <Component />
      </AppLatout>
    </>
  );
};
export default Twitter;

import React from "react";
import AppLatout from "../components/AppLayout";
import wrapper from "../store/configureStore";

const Twitter = ({ Component }: any) => {
  return (
    <>
      <AppLatout>
        <Component />
      </AppLatout>
    </>
  );
};
export default wrapper.withRedux(Twitter);

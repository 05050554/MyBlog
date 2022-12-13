import React from "react";
import { Virtual, JSX, ComponentLifeCycle} from "./ReactMore";
import { UseCallbackCom,LearnRedux ,HookVSRedux } from "./ReactMore2";
import { ReactRouter } from "./ReactMore3";

const ReactList = () => {
  return (
    <>
      <Virtual />
      <JSX />
      <ComponentLifeCycle />
      <UseCallbackCom />
      <LearnRedux/>
      <HookVSRedux/>
      <ReactRouter/>
    </>
  );
};

export default ReactList;

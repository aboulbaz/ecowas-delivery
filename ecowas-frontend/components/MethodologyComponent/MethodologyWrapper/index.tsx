import React from "react";
import { MethodologyWrapperStyle } from "./MethodologyWrapper.style";

type Props = {
  children?: any;
};

const MethodologyWrapper: React.FC<Props> = ({ children }) => {
  return <MethodologyWrapperStyle>{children}</MethodologyWrapperStyle>;
};

export default MethodologyWrapper;

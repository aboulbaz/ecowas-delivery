import React from "react";
import {
  MethodologyCardContent,
  MethodologyCardHeader,
  MethodologyCardHeaderTitle,
  MethodologyCardWrapper,
} from "./MethodologyCard.style";
import Image from "next/image";
import HCDIndexIcon from "public/assets/icons/integrated-hcd-index-icon.svg";

type Props = {
  title: string;
  content: React.ReactNode;
};

const MethodologyCard: React.FC<Props> = ({ title, content }) => {
  return (
    <MethodologyCardWrapper>
      <MethodologyCardHeader>
        <Image priority src={HCDIndexIcon} alt={""} height={50} />
        <MethodologyCardHeaderTitle>{title}</MethodologyCardHeaderTitle>
      </MethodologyCardHeader>
      <MethodologyCardContent>
        {content}        
      </MethodologyCardContent>
    </MethodologyCardWrapper>
  );
};

export default MethodologyCard;

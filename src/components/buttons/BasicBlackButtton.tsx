import React from "react";
import { StyleProps } from "../../types/component_style";
import BasicButtom from "./BasicButtom";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
  compStyle?: StyleProps;
}

export const BasicBlackButtton: React.FC<Props> = ({
  onClick,
  children,
  compStyle,
}) => {
  return (
    <BasicButtom
      compStyle={{
        ...{
          backgroundColor: "black",
          fontSize: 18,
          color: "white",
          width: "100%",
        },
        ...compStyle,
      }}
      onClick={onClick}
    >
      {children}
    </BasicButtom>
  );
};

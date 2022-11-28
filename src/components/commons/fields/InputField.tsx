import React, { ChangeEvent } from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const InputField: React.FC<Props> = ({ value, onChange }) => {
  const onInputChange = (value: ChangeEvent<HTMLInputElement>) => {
    onChange(value.target.value);
  };
  return (
    <input value={value} onChange={onInputChange} style={{ width: "100%" }} />
  );
};

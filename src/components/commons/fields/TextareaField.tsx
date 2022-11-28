import React, { ChangeEvent } from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const TextareaField: React.FC<Props> = ({ value, onChange }) => {
  const onInputChange = (value: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(value.target.value);
  };
  return (
    <textarea
      value={value}
      onChange={onInputChange}
      style={{ width: "100%" }}
      rows={5}
    />
  );
};

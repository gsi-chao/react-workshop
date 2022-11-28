import React, { useState } from "react";
import { BasicBlackButtton } from "../../../../components/buttons/BasicBlackButtton";
import BasicButtom from "../../../../components/buttons/BasicButtom";
import { InputField } from "../../../../components/commons/fields/InputField";
import { TextareaField } from "../../../../components/commons/fields/TextareaField";
import { INotes } from "../../types/notes";

interface Props {
  data: INotes;
  onChange: (data: INotes) => void;
}

export const NotesForm: React.FC<Props> = ({ data, onChange }) => {
  const [formValues, setFormValues] = useState<INotes>(data);
  return (
    <>
      <InputField
        value={formValues.title}
        onChange={(value) =>
          setFormValues({ ...formValues, ...{ title: value } })
        }
      />
      <TextareaField
        value={formValues.body}
        onChange={(value) =>
          setFormValues({ ...formValues, ...{ body: value } })
        }
      />
      <BasicBlackButtton onClick={() => onChange(formValues)}>
        Adicionar
      </BasicBlackButtton>
    </>
  );
};

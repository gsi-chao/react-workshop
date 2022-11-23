import { StyleProps } from "../../types/component_style";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
  compStyle?: StyleProps;
}

const BasicButtom: React.FC<Props> = ({ onClick, children, compStyle }) => {
  return (
    <button style={compStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default BasicButtom;

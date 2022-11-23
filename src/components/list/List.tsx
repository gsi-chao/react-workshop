import { ListItem } from "./ListItem";

interface Props {
  list: { text: string; date: string }[];
}

export const List: React.FC<Props> = ({ list }) => {
  return (
    <div>
      {list.map((item, key) => {
        return <ListItem {...item} key={key} />;
      })}
    </div>
  );
};

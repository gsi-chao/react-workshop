export const ListItem: React.FC<{ text: string; date: string }> = ({
  date,
  text,
}) => {
  return (
    <div style={{ display: "flex", gap: 4 }}>
      <span>{text}</span>
      <span>{date}</span>
    </div>
  );
};

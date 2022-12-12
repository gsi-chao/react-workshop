export interface INotes {
  title: string;
  body: string;
  id: string;
}

export interface INotesChangeProps {
  onChange: (data: INotes) => void;
}

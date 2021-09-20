interface iProps {
  people: {
    id: number;
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

export const List: React.FC<iProps> = ({ people }) => {
  return (
    <div>
      <p>LIst</p>
    </div>
  );
};

export default List;

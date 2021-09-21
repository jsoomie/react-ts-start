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
  const renderList = (): JSX.Element[] => {
    return people.map((person) => (
      <li key={person.name} className="ListItem">
        <div className="ListHeader">
          <img className="ListImg" src={person.url} alt={person.name} />
          <h2>{person.name}</h2>
        </div>
        <p>{person.age} years old</p>
        <p className="ListNote">{person.note}</p>
      </li>
    ));
  };

  return <ul className="ListContainer">{renderList()}</ul>;
};

export default List;

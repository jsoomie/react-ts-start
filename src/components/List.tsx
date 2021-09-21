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
    return people.map(({ id, name, url, age, note }) => (
      <li key={id} className="ListItem">
        <div className="ListHeader">
          <img className="ListImg" src={url} alt={name} />
        </div>
        <h2 className="ListName">{name}</h2>
        <p className="ListAge">{age} years old</p>
        <p className="ListNote">{note}</p>
      </li>
    ));
  };

  return <ul className="ListContainer">{renderList()}</ul>;
};

export default List;

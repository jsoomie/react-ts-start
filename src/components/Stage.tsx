import { useState } from "react";
import { List } from ".";

interface iState {
  people: {
    id: number;
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

export default function Stage() {
  const [people, setPeople] = useState<iState["people"]>([]);

  return (
    <div>
      <List people={people} />
    </div>
  );
}

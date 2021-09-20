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
  const [people, setPeople] = useState<iState["people"]>([
    {
      id: 1,
      name: "Link",
      age: 18,
      url: "https://media.braceletbookcdn.com/users/000/000/009/076/000000009076/image.jpg",
      note: "How old is Link? How many Links are there?",
    },
  ]);

  return (
    <div>
      <List people={people} />
    </div>
  );
}

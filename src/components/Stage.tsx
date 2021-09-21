import { useState } from "react";
import { List, AddToList } from ".";
import { v4 as uuid } from "uuid";

export interface iState {
  people: {
    id: string;
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

export default function Stage() {
  const [people, setPeople] = useState<iState["people"]>([
    {
      id: uuid(),
      name: "Link",
      age: 18,
      url: "https://media.braceletbookcdn.com/users/000/000/009/076/000000009076/image.jpg",
      note: "How old is Link? How many Links are there?",
    },
    {
      id: uuid(),
      name: "Princess Peach",
      age: 24,
      url: "https://pbs.twimg.com/profile_images/1385693111494512642/ApWJ34St_400x400.jpg",
      note: "Playing tennis if not being saved.",
    },
    {
      id: uuid(),
      name: "Min Min",
      age: 18,
      url: "https://c.tenor.com/KU93e3eEpcwAAAAC/min-min-arms.gif",
      note: "Min Min has ribbon arms!",
    },
  ]);

  return (
    <div>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

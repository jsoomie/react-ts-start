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
    {
      id: 2,
      name: "Princess Peach",
      age: 24,
      url: "https://pbs.twimg.com/profile_images/1385693111494512642/ApWJ34St_400x400.jpg",
      note: "Playing tennis if not being saved.",
    },
    {
      id: 3,
      name: "Samus Aran",
      age: 34,
      url: "https://images6.fanpop.com/image/photos/37400000/Samus-Aran-metroid-37441500-200-200.jpg",
      note: "Where's my suit? I can't breathe without my suit! Wait... Oh yes I can!.",
    },
  ]);

  return (
    <div>
      <List people={people} />
    </div>
  );
}

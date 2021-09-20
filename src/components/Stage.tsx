import { useState } from "react";

interface PeopleState {
  people: {
    id: number;
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

export default function Stage() {
  const [people, setPeople] = useState<PeopleState["people"]>([]);

  return (
    <div>
      <h1>This is the stage, hello</h1>
    </div>
  );
}

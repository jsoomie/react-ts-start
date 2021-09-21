import { useState } from "react";
import { v4 as uuid } from "uuid";

export const AddToList = () => {
  const [input, setInput] = useState({
    id: uuid(),
    name: "",
    age: "",
    img: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    console.log("clicked");
  };

  return (
    <div className="AddContainer">
      <h2>Add to The List</h2>
      <input
        type="text"
        placeholder="Name"
        className="AddInput"
        value={input.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder="Age"
        className="AddInput"
        value={input.age}
        onChange={handleChange}
        name="age"
      />
      <input
        type="text"
        placeholder="Image Url"
        className="AddInput"
        value={input.img}
        onChange={handleChange}
        name="img"
      />
      <textarea
        placeholder="Notes"
        className="AddInput"
        rows={6}
        value={input.note}
        onChange={handleChange}
        name="note"
      />
      <button onClick={handleClick}>Add To The List</button>
    </div>
  );
};

export default AddToList;

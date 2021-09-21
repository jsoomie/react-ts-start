import { useState } from "react";
import { v4 as uuid } from "uuid";

export const AddToList = () => {
  const [input, setInput] = useState({
    id: uuid(),
    name: "",
    age: "",
    img: "",
  });

  return (
    <div className="AddContainer">
      <h2>Add to The List</h2>
      <input type="text" placeholder="Name" className="AddInput" />
      <input type="text" placeholder="Age" className="AddInput" />
      <input type="text" placeholder="Image Url" className="AddInput" />
      <textarea placeholder="Notes" className="AddInput" rows={6} />
      <button>Add To The List</button>
    </div>
  );
};

export default AddToList;

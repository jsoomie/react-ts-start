export const AddToList = () => {
  return (
    <div className="AddContainer">
      <p>Add to List</p>
      <input type="text" placeholder="Name" className="AddInput" />
      <input type="text" placeholder="Age" className="AddInput" />
      <input type="text" placeholder="Image Url" className="AddInput" />
      <textarea placeholder="Notes" className="AddInput" />
    </div>
  );
};

export default AddToList;

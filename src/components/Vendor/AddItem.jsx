import React, { useState } from "react";
import { addItem } from "../../services/vendorAPI";

const AddItem = () => {
  const [item, setItem] = useState({ name: "", price: "", description: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addItem(item);
    alert("Item added successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto bg-white rounded shadow">
      <h3 className="text-xl font-bold mb-4">Add New Item</h3>
      <input className="border p-2 w-full mb-2" placeholder="Item Name" onChange={(e) => setItem({ ...item, name: e.target.value })} />
      <input className="border p-2 w-full mb-2" placeholder="Price" onChange={(e) => setItem({ ...item, price: e.target.value })} />
      <textarea className="border p-2 w-full mb-2" placeholder="Description" onChange={(e) => setItem({ ...item, description: e.target.value })}></textarea>
      <button className="bg-blue-500 text-white p-2 rounded w-full">Add Item</button>
    </form>
  );
};

export default AddItem;

import React, { useEffect, useState } from "react";
import { deleteItem, getItems } from "../../services/vendorAPI";

const YourItems = () => {
  const [items, setItems] = useState([]);

  const loadItems = async () => {
    const { data } = await getItems();
    setItems(data);
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
    loadItems();
  };

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <div className="p-4">
      <h3 className="text-xl font-bold mb-4">Your Items</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item._id} className="border p-3 rounded flex justify-between items-center">
            <div>
              <h4 className="font-semibold">{item.name}</h4>
              <p>₹{item.price} - {item.description}</p>
            </div>
            <button className="bg-red-500 text-white p-2 rounded" onClick={() => handleDelete(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YourItems;

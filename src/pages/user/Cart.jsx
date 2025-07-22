import { useEffect, useState } from 'react';
import axios from '../../api/axios';

const Cart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('/api/cart', { withCredentials: true })
      .then(res => setItems(res.data))
      .catch(err => console.error(err));
  }, []);

  const cancelCart = () => {
    axios.delete('/api/cart/cancel', { withCredentials: true })
      .then(() => setItems([]));
  };

  const total = items.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Cart</h1>
      {items.map(item => (
        <div key={item._id} className="border p-2 my-2 rounded">{item.title} - ₹{item.price}</div>
      ))}
      <p>Total: ₹{total}</p>
      <button onClick={cancelCart} className="bg-red-500 text-white p-2 rounded mt-2">Cancel</button>
    </div>
  );
};

export default Cart;

import { useEffect, useState } from 'react';
import axios from '../../api/axios';

const OrderStatus = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/order-status', { withCredentials: true })
      .then(res => setOrders(res.data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Order Status</h1>
      {orders.map(order => (
        <div key={order._id} className="border p-2 rounded my-2">
          <p>Total: ₹{order.total}</p>
          <p>Status: {order.status}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderStatus;

import React, { useEffect, useState } from "react";
import { getTransactions } from "../../services/vendorAPI";

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions().then((res) => setTransactions(res.data));
  }, []);

  return (
    <div className="p-4">
      <h3 className="text-xl font-bold mb-4">User Requests / Transactions</h3>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">User</th>
            <th className="border p-2">Item</th>
            <th className="border p-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx._id}>
              <td className="border p-2">{tx.userName}</td>
              <td className="border p-2">{tx.itemName}</td>
              <td className="border p-2">₹{tx.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;

import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
  const { user } = useAuth();
  const [axiosHook] = useAxios();

  useEffect(() => {
    fetchPaymentHistory();
  }, []);

  const fetchPaymentHistory = async () => {
    try {
      const response = await axiosHook.get(`/payments/${user?.email}`);
      const paymentData = response.data;
      setPayments(paymentData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl text-center text-green-900 mt-10 ">
        Payment History
      </h1>
      {payments.map((payment) => (
        <div key={payment._id}>
          <h2 className="font-bold">Class Name: {payment.className}</h2>
          <p className="font-semibold mb-6">Amount: {payment.price} $</p>
          <p className="font-semibold mb-6">Date: {payment.paymentDate}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default PaymentHistory;

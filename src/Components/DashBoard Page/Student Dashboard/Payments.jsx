import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payments = () => {
  const { classId } = useParams();
  const [classData, setClassData] = useState(null);
  const [axiosHook] = useAxios();

  useEffect(() => {
    const fetchClassData = async () => {
      try {
        const response = await axiosHook.get(`/classes/${classId}`);
        setClassData(response.data[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchClassData();
  }, [axiosHook, classId]);

  if (!classData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="mt-10 text-center text-4xl font-bold text-blue-700">
        Payment Here
      </h1>
      <h2 className="mt-10 text-2xl font-semibold  text-pink-600 dark:text-white">
        Class: {classData.className}
      </h2>
      <h2 className="mb-6 text-2xl font-semibold text-green-900 dark:text-white">
        Price: {classData.price} $
      </h2>

      {/* Payment form */}
      <Elements stripe={stripePromise}>
        <PaymentForm classData={classData} />
      </Elements>
    </div>
  );
};

export default Payments;

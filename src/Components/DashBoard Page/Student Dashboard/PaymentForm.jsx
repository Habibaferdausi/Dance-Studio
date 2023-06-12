import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const PaymentForm = ({ classData }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const { user } = useAuth();
  const [axiosHook] = useAxios();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });

      if (error) {
        setError(error.message);
        return;
      }

      const price = classData?.price;
      const classId = classData?._id;
      const paymentDate = new Date();

      console.log(classId);
      const paymentData = {
        paymentMethodId: paymentMethod.id,
        classId: classId,
        className: classData?.className,
        classImage: classData?.classImage,
        email: user?.email,
        instructorName: classData?.instructorName,
        instructorEmail: classData?.instructorEmail,
        price: price,
        paymentDate: paymentDate,
      };

      try {
        const response = await axiosHook.post("/payments", paymentData);
        console.log(response.data);

        await axiosHook.patch(`/classes/${classId}`, {
          action: "decrement",
        });

        await axiosHook.delete(`/selects/${user?.email}/${classId}`);

        Swal.fire({
          title: "Payment Successful",
          text: "Thank you for your payment!",
          icon: "success",
          button: "OK",
        });
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 ">
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <h3 className="text-lg font-bold m-4 text-gray-800 dark:text-gray-100">
              Enter Card Details:
            </h3>
            <CardElement options={{ style: { base: { fontSize: "16px" } } }} />
          </div>

          {error && <p>{error}</p>}

          <button className="btn rounded btn-success mt-9" type="submit">
            Pay Now
          </button>
        </form>
      </div>
      <div>
        <img
          src="https://cdn.dribbble.com/users/614270/screenshots/14575431/media/4907a0869e9ed2ac4e2d1c2beaf9f012.gif"
          alt=""
        />
      </div>
    </div>
  );
};

export default PaymentForm;

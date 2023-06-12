import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import { Card } from "flowbite-react";

const EnrolledClass = () => {
  const [enrolled, setEnrolled] = useState([]);
  const { user } = useAuth();
  const [axiosHook] = useAxios();

  useEffect(() => {
    fetchPaymentHistory();
  }, []);

  const fetchPaymentHistory = async () => {
    try {
      const response = await axiosHook.get(`/payments/${user?.email}`);
      const enrolledData = response.data;
      setEnrolled(enrolledData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl text-center text-green-900 mt-10 ">
        My Enrolled Class
      </h1>
      {enrolled.map((enroll) => (
        <div key={enroll._id} className="grid grid-cols-3">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={enroll?.classImage}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>{enroll.className}</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>
                Instructor Name: {enroll.instructorName}
                <br />
              </p>
              <p className="font-semibold mb-6">Amount: {enroll.price} $</p>
              <p className="font-semibold mb-6">
                {" "}
                Payment Date: {enroll.paymentDate}
              </p>
            </p>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default EnrolledClass;

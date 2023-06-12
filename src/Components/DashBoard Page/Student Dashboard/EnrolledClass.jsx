import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";

const EnrolledClass = () => {
  const [enrolledClasses, setEnrolledClasses] = useState([]);
  const { user } = useAuth();
  const [axiosHook] = useAxios();

  useEffect(() => {
    fetchEnrolledClasses();
  }, []);

  const fetchEnrolledClasses = async () => {
    try {
      const response = await axiosHook.get(`/selects/${user?.email}`);
      const enrolledData = response.data;
      setEnrolledClasses(enrolledData);
    } catch (error) {
      console.error(error);
    }
  };

  const filterEnrolledClasses = async () => {
    try {
      const response = await axios.get(`/payments/${user?.email}`);
      const paymentData = response.data;
      const paymentIds = paymentData.map((payment) => payment.classId);
      const filteredClasses = enrolledClasses.filter((enrolledClass) =>
        paymentIds.includes(enrolledClass._id)
      );
      setEnrolledClasses(filteredClasses);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    filterEnrolledClasses();
  }, [enrolledClasses]);

  return (
    <div>
      <h1 className="text-3xl text-center text-green-900 mt-10">
        My Enrolled Classes
      </h1>
      {enrolledClasses.length === 0 ? (
        <p className="text-center mt-5">No enrolled classes found.</p>
      ) : (
        <ul className="mt-5">
          {enrolledClasses.map((enrolledClass) => (
            <li key={enrolledClass._id} className="mb-2">
              {enrolledClass.className}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EnrolledClass;

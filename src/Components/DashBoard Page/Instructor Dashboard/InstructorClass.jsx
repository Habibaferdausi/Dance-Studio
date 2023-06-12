import React, { useEffect, useState } from "react";

import ClassesList from "./ClassesList";

import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";

const InstructorClass = () => {
  const [classes, setClasses] = useState([]);
  const [axiosHook] = useAxios();
  const { user } = useAuth();

  useEffect(() => {
    axiosHook.get(`/classes?email=${user?.email}`).then((response) => {
      setClasses(response.data);
    });
  }, [axiosHook, user?.email]);

  console.log(classes);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Classes</h1>
      {classes.length > 0 ? (
        <ClassesList classes={classes} />
      ) : (
        <p>No classes added yet.</p>
      )}
    </div>
  );
};

export default InstructorClass;

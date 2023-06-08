import React, { useEffect, useState } from "react";

import ClassesList from "./ClassesList";

import useAxios from "../../Hooks/useAxios";

const InstructorClass = () => {
  const [classes, setClasses] = useState([]);
  const [axiosHook] = useAxios();
  useEffect(() => {
    axiosHook.get("/classes").then((response) => {
      setClasses(response.data);
    });
  }, []);
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

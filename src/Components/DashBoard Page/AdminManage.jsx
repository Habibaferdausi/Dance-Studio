import React, { useEffect, useState } from "react";
import { useTable } from "react-table";
import useAxios from "../Hooks/useAxios";

const AdminManage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [axiosHook] = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosHook.get("/classes");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Class Image",
        accessor: "classImage", // Replace with the actual accessor for class image
        Cell: ({ value }) => (
          <img src={value} alt="Class" className="w-16 h-16" />
        ), // Display the image using an img tag
      },
      {
        Header: "Class Name",
        accessor: "className", // Replace with the actual accessor for class name
      },
      {
        Header: "Instructor Name",
        accessor: "instructorName", // Replace with the actual accessor for instructor name
      },
      {
        Header: "Instructor Email",
        accessor: "instructorEmail", // Replace with the actual accessor for instructor email
      },
      {
        Header: "Available Seats",
        accessor: "availableSeats", // Replace with the actual accessor for available seats
      },
      {
        Header: "Price",
        accessor: "price", // Replace with the actual accessor for price
      },
      {
        Header: "Status",
        accessor: "status", // Replace with the actual accessor for status
      },
      {
        Header: "Actions",
        Cell: ({ row }) => (
          <div>
            {row.original.status === "pending" &&
              !row.original.buttonsDisabled && (
                <button
                  onClick={() => handleApprove(row)}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Approve
                </button>
              )}
            {row.original.status === "pending" &&
              !row.original.buttonsDisabled && (
                <button
                  onClick={() => handleDeny(row)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Deny
                </button>
              )}
            <button
              onClick={() => handleSendFeedback(row)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Send Feedback
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const handleApprove = async (row) => {
    try {
      // Perform the API patch request to update the status to 'approved'
      await axiosHook.patch(`/classes/${row.original._id}`, {
        status: "approved",
      });

      // Create a new array with updated data
      const updatedData = data.map((item) =>
        item._id === row.original._id
          ? { ...item, status: "approved", buttonsDisabled: true }
          : item
      );

      // Update the state with the new array
      setData(updatedData);
    } catch (error) {
      console.error("Error approving class:", error);
    }
  };

  const handleDeny = async (row) => {
    try {
      // Perform the API patch request to update the status to 'denied'
      await axiosHook.patch(`/classes/${row.original._id}`, {
        status: "denied",
      });

      // Create a new array with updated data
      const updatedData = data.map((item) =>
        item._id === row.original._id
          ? { ...item, status: "denied", buttonsDisabled: true }
          : item
      );

      // Update the state with the new array
      setData(updatedData);
    } catch (error) {
      console.error("Error denying class:", error);
    }
  };

  const handleSendFeedback = (row) => {
    // Open a modal or navigate to another route to send feedback
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <table {...getTableProps()} className="table-auto w-full">
      {/* Render the table */}
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} className="pt-10 text-center">
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()} className="pt-3 text-center">
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AdminManage;

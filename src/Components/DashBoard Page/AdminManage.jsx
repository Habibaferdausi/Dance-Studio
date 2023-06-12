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
        accessor: "classImage",
        Cell: ({ value }) => (
          <img src={value} alt="Class" className="w-16 h-16" />
        ),
      },
      {
        Header: "Class Name",
        accessor: "className",
      },
      {
        Header: "Instructor Name",
        accessor: "instructorName",
      },
      {
        Header: "Instructor Email",
        accessor: "instructorEmail",
      },
      {
        Header: "Available Seats",
        accessor: "availableSeats",
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Feedback",
        accessor: "feedback",
      },
      {
        Header: "Status",
        accessor: "status",
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
              disabled={row.original.buttonsDisabled} // Disable button if buttonsDisabled is true
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
      await axiosHook.patch(`/classes/${row.original._id}`, {
        status: "approved",
      });

      const updatedData = data.map((item) =>
        item._id === row.original._id
          ? { ...item, status: "approved", buttonsDisabled: true }
          : item
      );

      setData(updatedData);
    } catch (error) {
      console.error("Error approving class:", error);
    }
  };

  const handleDeny = async (row) => {
    try {
      await axiosHook.patch(`/classes/${row.original._id}`, {
        status: "denied",
      });

      const updatedData = data.map((item) =>
        item._id === row.original._id
          ? { ...item, status: "denied", buttonsDisabled: true }
          : item
      );

      setData(updatedData);
    } catch (error) {
      console.error("Error denying class:", error);
    }
  };

  const handleSendFeedback = async (row) => {
    try {
      const adminFeedback = prompt("Enter feedback:");

      if (!adminFeedback) {
        return;
      }

      await axiosHook.patch(`/classes/${row.original._id}`, {
        feedback: adminFeedback,
      });

      const updatedData = data.map((item) =>
        item._id === row.original._id
          ? { ...item, feedback: adminFeedback, buttonsDisabled: true }
          : item
      );

      setData(updatedData);
    } catch (error) {
      console.error("Error sending feedback:", error);
    }
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

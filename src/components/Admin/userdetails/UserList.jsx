import React, { useEffect, useMemo, useState } from "react";
import { useTable, usePagination } from "react-table";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import Pagination from "../pagination/Pagination";
import { usersDetails as originalUsersDetails } from "../../../utlis/users";
import "./UserList.css";

const generateRandomDate = (start, end) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

const UserList = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const startDate = new Date(2020, 0, 1);
    const endDate = new Date();
    const usersWithDates = originalUsersDetails.map((user) => ({
      ...user,
      registrationDate: generateRandomDate(startDate, endDate),
    }));
    setUsers(usersWithDates);
  }, []);

  const data = useMemo(() => users, [users]);

  const handleViewOrder = (userId) => {
    navigate(`/orders/${userId}`);
  };

  const columns = useMemo(
    () => [
      {
        Header: "Image",
        accessor: "image",
        Cell: ({ value }) => (
          <img
            src={value || "default-user-image.jpg"}
            alt="User"
            className="user-image"
          />
        ),
      },
      {
        Header: "User ID",
        accessor: "userId",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
      {
        Header: "Reg. Date",
        accessor: "registrationDate",
        Cell: ({ value }) => dayjs(value).format("YYYY-MM-DD HH:mm"),
      },
      {
        Header: "Details",
        accessor: "details",
        Cell: ({ row }) => (
          <button
            onClick={() => handleViewOrder(row.original.userId)}
            className="view-order-button"
          >
            View Details
          </button>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    usePagination
  );

  return (
    <div className="table-container">
      <h1 className="user-list-h1">User List</h1>
      <table {...getTableProps()} className="user-list-table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className="header-row">
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="header-cell">
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="body-row">
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="body-cell">
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        pageOptions={pageOptions}
        previousPage={previousPage}
        canPreviousPage={canPreviousPage}
        nextPage={nextPage}
        canNextPage={canNextPage}
        gotoPage={gotoPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
        pageIndex={pageIndex}
      />
    </div>
  );
};

export default UserList;

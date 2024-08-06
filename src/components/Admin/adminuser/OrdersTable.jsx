import React, { useState } from "react";
import { useTable } from "react-table";
import dayjs from "dayjs";
import "./OrdersTable.css";
import { userOrders } from "../../../utlis/userOrders";
import UserDetails from "../userdetails/UserDetails";

const OrdersTable = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const data = React.useMemo(() => userOrders, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Order ID",
        accessor: "orderId",
      },
      {
        Header: "User ID",
        accessor: "userId",
      },
      {
        Header: "Date",
        accessor: "date",
        Cell: ({ value }) => dayjs(value).format("YYYY-MM-DD HH:mm:ss"),
      },
      {
        Header: "Total Amount",
        accessor: "totalAmount",
        Cell: ({ value }) => `$${value.toFixed(2)}`,
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => {
          let statusClass = "";
          if (value === "Pending") statusClass = "status-pending";
          else if (value === "Delivered") statusClass = "status-delivered";
          else if (value === "Processing") statusClass = "status-processing";
          else if (value === "Shipped") statusClass = "status-shipped";
          return <span className={`status ${statusClass}`}>{value}</span>;
        },
      },
      {
        Header: "Action",
        accessor: "action",
        Cell: ({ row }) => (
          <button
            onClick={() => handleViewOrder(row.original)}
            className="view-order-button"
          >
            View Details
          </button>
        ),
      },
    ],
    []
  );

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="table-container">
      <table {...getTableProps()} className="orders-table">
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
          {rows.map((row) => {
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

      {selectedOrder && (
        <UserDetails
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      )}
    </div>
  );
};

export default OrdersTable;

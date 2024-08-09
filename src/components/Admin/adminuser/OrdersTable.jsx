import React from "react";
import { useTable, usePagination } from "react-table";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import Pagination from "../pagination/Pagination";
import "./OrdersTable.css";
import { userOrders } from "../../../utlis/userOrders";
import { useSelector } from "react-redux";

const OrdersTable = () => {
  const navigate = useNavigate();
  const allOrders = useSelector((state) => state.orders);
  const data = React.useMemo(() => allOrders, []);

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

  const handleViewOrder = (orderId) => {
    navigate(`/orders/${orderId}`);
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
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

export default OrdersTable;

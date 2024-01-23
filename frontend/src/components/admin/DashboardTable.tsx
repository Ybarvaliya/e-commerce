import TableComponent, { Transactions } from "./Table/Table";
import data from "./data.json";
import { Column } from "react-table";

const columns: Column<Transactions>[] = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
];

const DashboardTable = () => {
  return (
    <>
      <TableComponent
        data={data.transaction}
        columns={columns}
        heading="Top Transactions"
        showPagination={false}
      ></TableComponent>
    </>
  );
};

export default DashboardTable;

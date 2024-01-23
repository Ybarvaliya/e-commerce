import './Table.css'
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import {
  Column,
  TableOptions,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

export interface Transactions {
  id: string;
  amount: number;
  quantity: number;
  discount: number;
  status: string;
}

interface TableComponentProps {
  data: Transactions[];
  columns: Column<Transactions>[];
  heading: string;
  showPagination: boolean;
}

const TableComponent = ({
  data,
  columns,
  heading,
  showPagination = false,
}: TableComponentProps) => {
  const options: TableOptions<Transactions> = {
    columns,
    data,
    initialState: {
      pageSize: 6,
    },
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    state: { pageIndex },
    pageCount,
  }: any = useTable(options, useSortBy, usePagination);

  return (
    <div>
      <h2 className="text-center text-xl my-2 font-semibold">{heading}</h2>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((hg: any) => (
            <tr {...hg.getHeaderGroupProps()}>
              {hg.headers.map((column: any) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {column.isSorted && (
                    <span>
                      {" "}
                      {column.isSortedDesc ? (
                        <AiOutlineSortDescending />
                      ) : (
                        <AiOutlineSortAscending />
                      )}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row: any) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell: any) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination */}
      {showPagination && (
        <div>
          <button disabled={!canPreviousPage} onClick={previousPage}>
            {"Prev"}
          </button>
          <span>
            {" "}
            {pageIndex + 1} of {pageCount}{" "}
          </span>
          <button disabled={!canNextPage} onClick={nextPage}>
            {"Next"}
          </button>{" "}
        </div>
      )}
    </div>
  );
};

export default TableComponent;

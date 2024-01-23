import "./Table.css";
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

function TableHOC<T extends object>(
  columns: Column<T>[],
  data: T[],
  heading: string,
  showPagination: boolean = false
) {

  // Returns Component
  return function HOC() {
    const options: TableOptions<T> = {
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
    } = useTable(options, useSortBy, usePagination);

    return (
      <div>
        <h2 className="text-center text-xl my-4 font-semibold">{heading}</h2>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((hg) => (
              <tr {...hg.getHeaderGroupProps()}>
                {hg.headers.map((column) => (
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
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={row.id}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Pagination */}
        {showPagination && (
          <div className="table-pagination">
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
}

export default TableHOC;

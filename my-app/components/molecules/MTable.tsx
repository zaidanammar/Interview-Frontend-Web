import React from "react";
import { IQuestion } from "../../core/question/entities";
import MPagination from "./MPagination";

const tableTitle = [
  "Product Name",
  "Product Code",
  "Category",
  "Description",
  "Tags",
];

type Props = {
  data: IQuestion[];
  rowsPerPage: number;
  setRowsPerPage: (rowsPerPage: number) => void;
  page: number;
  setPage: (page: number) => void;
};

const MTable = ({
  data,
  rowsPerPage,
  setPage,
  setRowsPerPage,
  page,
}: Props) => {
  return (
    <div className="relative overflow-x-auto shadow-2xl bg-white rounded-2xl p-8">
      <table className="w-full text-sm text-left">
        <thead className="text-sm text-textSecondary border-b-2">
          <tr>
            {tableTitle.map((title, idx) => (
              <th key={idx} scope="col" className="py-3 px-6">
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data
            .slice(
              (page - 1) * rowsPerPage,
              (page - 1) * rowsPerPage + rowsPerPage
            )
            .map((el, idx) => (
              <tr key={idx} className="border-b">
                <th
                  scope="row"
                  className="px-6 py-4 self-center place-items-center text-gray-900 dark:text-white"
                >
                  {el.title}
                </th>
                <td className="px-6 py-4">{el.id || "-"}</td>
                <td className="px-6 py-4">{el.category || "-"}</td>
                <td className="px-6 max-w-xs py-4">{el.description || "-"}</td>
                <td className="px-6 py-4 text-left">
                  {el.tags
                    ? el.tags.map((tag, idx) => (
                        <div key={idx} className="flex gap-1 items-center">
                          <div className="w-2 h-2 rounded-full bg-blue-600" />
                          <p>{tag}</p>
                        </div>
                      ))
                    : "-"}
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <MPagination
        data={data}
        rowsPerPage={rowsPerPage}
        setPage={setPage}
        setRowsPerPage={setRowsPerPage}
      />
    </div>
  );
};

export default MTable;

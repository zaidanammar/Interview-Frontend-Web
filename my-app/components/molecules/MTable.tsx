import React from "react";
import { Avatar } from "@mui/material";
import { IQuestion } from "../../core/question/entities";
import { stringAvatar } from "../../utils/common";
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
    <div className="relative overflow-x-auto shadow-2xl bg-white rounded-2xl p-8 w-full">
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
        <tbody className="text-textPrimary">
          {data
            .slice(
              (page - 1) * rowsPerPage,
              (page - 1) * rowsPerPage + rowsPerPage
            )
            .map((el, idx) => (
              <tr key={idx} className="border-b">
                <td
                  scope="row"
                  className="px-6 py-4 self-center items-center gap-2 dark:text-white"
                >
                  <div className="flex gap-2 items-center">
                    <Avatar {...stringAvatar(el.title)} />
                    {el.title}
                  </div>
                </td>
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

      <aside className="sm:w-auto w-[600px]">
        <MPagination
          data={data}
          rowsPerPage={rowsPerPage}
          setPage={setPage}
          setRowsPerPage={setRowsPerPage}
        />
      </aside>
    </div>
  );
};

export default MTable;

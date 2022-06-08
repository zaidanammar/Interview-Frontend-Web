import { Pagination as Paginate } from "@mui/material";
import React from "react";

type Props = {
  data: any[];
  rowsPerPage: number;
  setRowsPerPage: (rowsPerPage: number) => void;
  setPage: (page: number) => void;
};

const MPagination = ({ data, rowsPerPage, setPage, setRowsPerPage }: Props) => {
  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  return (
    <nav className="mt-14 flex justify-between items-center">
      <Paginate
        count={Math.ceil(data.length / rowsPerPage)}
        onChange={handleChangePage}
      />

      <div className="flex items-center gap-3">
        <p className="text-blue-600 text-sm">Show</p>
        <div className="flex">
          <select
            onChange={handleChangeRowsPerPage}
            value={rowsPerPage}
            className="bg-gray-50 border rounded-full border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="5">5</option>
            <option value="8">8</option>
            <option value="10">10</option>
            <option value="25">25</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default MPagination;

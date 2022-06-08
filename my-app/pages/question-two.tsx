import React, { useState } from "react";

import MTable from "../components/molecules/MTable";
import { ALoading } from "../components/atoms/ALoading";
import ASearchInput from "../components/atoms/ASearchInput";
import { useFetchQuestionTwo } from "../hooks/question";

const QuestionOne = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState("");

  const { data, isLoading } = useFetchQuestionTwo();
  const filteredData = data?.filter((question) =>
    question.title.toLowerCase().includes(search)
  );

  return (
    <section className="sm:pt-0 pt-14">
      <aside className="flex flex-col">
        <h3 className="text-textPrimary">Question 2</h3>
        <div className="place-self-end sm:w-1/3 w-2/3">
          <ASearchInput search={search} setSearch={setSearch} />
        </div>
      </aside>

      <article className="mt-5 mb-10">
        {isLoading ? (
          <div className="flex justify-center">
            <ALoading />
          </div>
        ) : filteredData && filteredData?.length <= 0 ? (
          <p className="text-textPrimary text-sm mt-10 text-center">
            Data not found.
          </p>
        ) : (
          filteredData && (
            <MTable
              data={filteredData}
              page={page}
              rowsPerPage={rowsPerPage}
              setPage={setPage}
              setRowsPerPage={setRowsPerPage}
            />
          )
        )}
      </article>
    </section>
  );
};

export default QuestionOne;

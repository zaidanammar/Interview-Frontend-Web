import React, { useState } from "react";

import MTable from "../components/molecules/MTable";
import { ALoading } from "../components/atoms/ALoading";
import { useFetchQuestionOne } from "../hooks/question";

const QuestionOne = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const { data, isLoading } = useFetchQuestionOne();

  return (
    <section className="sm:pt-0 pt-14">
      <aside>
        <h3 className="text-textPrimary">Question 1</h3>
      </aside>
      <article className="sm:my-14 my-8">
        {isLoading ? (
          <div className="flex justify-center">
            <ALoading />
          </div>
        ) : (
          data && (
            <MTable
              data={data}
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

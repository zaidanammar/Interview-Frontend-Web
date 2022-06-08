import React, { useState } from "react";
import { Loading } from "../components/Loading";
import Table from "../components/Table";
import { useFetchQuestionTwo } from "../hooks/question";

const QuestionOne = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { data, isLoading, isError } = useFetchQuestionTwo();

  return (
    <section>
      <aside>
        <h3 className="text-textPrimary">Question 2</h3>
      </aside>
      <article className="my-10">
        {isLoading ? (
          <div className="flex justify-center">
            <Loading />
          </div>
        ) : (
          data && (
            <Table
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

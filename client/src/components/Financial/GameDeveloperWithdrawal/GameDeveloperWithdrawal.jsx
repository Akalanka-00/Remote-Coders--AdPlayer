import React, { useRef, useState } from "react";
import Table from "react-bootstrap/Table";
import useFetch from "../../../hook/Fetch";
import Spinner from "react-bootstrap/esm/Spinner";
import Button from "react-bootstrap/Button";
import ReactToPrint from "react-to-print";

const GameDeveloperWithdrawal = () => {
  const [tableData, setTableData] = useState([]);
  const table_headings = [
    "profile",
    "username",
    "user ID",
    "Email",
    "Pending withdrawal",
    "Approved withdrawal",
  ];

  const [{ isLoading, apiData, serverError }] = useFetch({
    query: `getDeveloperWithdrawal/`,
    reqData: null,
    method: "get",
  });
  const componentRef = useRef();

  return (
    <div>
      {isLoading ? (
        serverError ? (
          <h1 className="text-xl text-red-500">{serverError.message}</h1>
        ) : (
          <div className="d-flex justify-content-center align-items-center pt-5">
            <Spinner className="" animation="border" />
          </div>
        )
      ) : (
        <div>
          <ReactToPrint
            trigger={() => <Button variant="primary">Print</Button>}
            content={() => componentRef.current}
          />
          <Table responsive ref={componentRef} className="mx-2">
            <thead>
              <tr>
                {table_headings.map((title, index) => (
                  <th key={index}>{title}</th> // Define Table Headings
                ))}
              </tr>
            </thead>
            <tbody>
              {apiData.map((data, i) => {
                //Insesrt data into the table
                return (
                  <tr key={i}>
                    <td>
                      <img src={data.profile} width={"50px"} />
                    </td>
                    <td>{data.username}</td>
                    <td>{data.id}</td>
                    <td>{data.email}</td>
                    <td>{data.pending_withdrawal} $</td>
                    <td>{data.approved_withdrawal} $</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default GameDeveloperWithdrawal;

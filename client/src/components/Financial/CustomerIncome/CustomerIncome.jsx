import React, { useEffect, useRef, useState } from "react";
import Table from "react-bootstrap/Table";
import baseUrl from "../../../Apis/baseUrl";
import Spinner from "react-bootstrap/Spinner";
import Button from 'react-bootstrap/Button';
import ReactToPrint from "react-to-print"

import "./CustomerIncome.css";
import useFetch from "../../../hook/Fetch";
const CustomerIncome = () => {
  const [tableData, setTableData] = useState([]);
  const table_headings = [
    "profile",
    "username",
    "user ID",
    "Email",
    "No. of Published advertisements",
    "Total income from the customers",
  ];

  const [{ isLoading, apiData, serverError }] =
    useFetch({query:`getCustomerIncome/`,reqData:null,method:"get"});
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
           <ReactToPrint trigger={()=>(
            <Button variant="primary">Print</Button>
          )}

          content={()=>
            componentRef.current
          }
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
                    <td>{data.no_of_ads}</td>
                    <td>{data.income} $</td>
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

export default CustomerIncome;

import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import baseUrl from "../../../Apis/baseUrl";

import "./GameDeveloperFinancialDetails.css"
const GameDeveloperFinancialDetails = () => {
  const [tableData, setTableData] = useState([]);
  const table_headings = [
    "profile",
    "username",
    "user ID",
    "Email",
    "No. of Games",
    "Daily Revenue",
    "Ad view Count - Last 30 days",
    "Ad view Count - Last 12 Months",
  ];

  useEffect(() => {
    baseUrl
      .get("/api/admin/financial/developer/daily")
      .then((res) => {
        setTableData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  },[]);

  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            {table_headings.map((title, index) => (
              <th key={index}>{title}</th> // Define Table Headings
            ))}
          </tr>
          {tableData.map((data, i) => {
           return ( <tr key={i}>
              <td><img src= {data.developer_profile}/></td>
              <td>{data.developer_name}</td>
              <td>{data.developer_id}</td>
              <td>{data.developer_mail}</td>
              <td>{data.no_of_games}</td>
              <td>{data.daily_revenue.toFixed(2)} $</td>
              <td>{data.daily_game_view_count}</td>
              <td>{data.monthly_game_view_count}</td>

            </tr>)
          })}
        </thead>
        <tbody></tbody>
      </Table>
    </div>
  );
};

export default GameDeveloperFinancialDetails;

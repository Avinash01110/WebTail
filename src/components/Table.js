import React from "react";
import "../style/Table.css";
import data from "../dummyData.json";
import { Helmet } from "react-helmet";

const Table = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>WebTail - Table</title>
        <meta name="description" content="WebTail - Table" />
        <link rel="icon" href="favicon1.ico " sizes="16x16" />
      </Helmet>
      <div className="tpage-background">
        <table className="sample-table">
          <thead>
            <tr>
              <th>id</th>
              <th>Year</th>
              <th>Medals</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.Id}</td>
                  <td>{item.Year}</td>
                  <td>{item.Medals}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;

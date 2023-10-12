import React from "react";
import "../style/Linechart.css";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import data from "../dummyData.json";
import { Helmet } from "react-helmet";

const Linechart = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>WebTail - Linechart</title>
        <meta name="description" content="WebTail - Linechart" />
        <link rel="icon" href="favicon1.ico " sizes="16x16" />
      </Helmet>
      <div className="cpage-background">
        <ResponsiveContainer className="line-chart" width="80%" height="80%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 0, bottom: 0, left: 0 }}
          >
            <Line
              type="monotone"
              dataKey="Medals"
              stroke="#9400FF"
              activeDot={{ r: 8 }}
            />
            <CartesianGrid stroke="#000" strokeDasharray="5 5" />
            <XAxis dataKey="Year" stroke="#27005D" />
            <YAxis dataKey="Medals" stroke="#27005D" />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Linechart;

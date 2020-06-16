import React from "react";
import {
  BarChart,
  Tooltip,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
} from "recharts";
import theme from "../../../theme";

const BarChartComponent = (props: any) => {
  const { data } = props;
  return (
    <BarChart
      width={800}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="item" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="quantity" fill={theme.colors.accent} />
    </BarChart>
  );
};

export default BarChartComponent;

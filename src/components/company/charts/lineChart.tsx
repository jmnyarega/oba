import React from "react";
import {
  LineChart,
  YAxis,
  XAxis,
  Tooltip,
  CartesianGrid,
  Line,
} from "recharts";
import theme from "../../../theme";

const LineChartComponent = (props: any) => {
  const { data } = props;
  return (
    <LineChart width={1000} height={400} data={data}>
      <YAxis type="number" yAxisId={0} domain={[0, 1020]} />
      <YAxis type="number" orientation="right" yAxisId={1} />
      <YAxis type="number" orientation="right" yAxisId={2} />
      <XAxis dataKey="item" />
      <Tooltip />
      <CartesianGrid stroke="#f5f5f5" />
      <Line dataKey="value" stroke="#ff7300" strokeWidth={2} yAxisId={0} />
    </LineChart>
  );
};

export default LineChartComponent;

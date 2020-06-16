import React from "react";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";

import theme from "../../../theme";

import {
  BarChart,
  Tooltip,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  PieChart,
  Pie,
  Cell,
  Label,
  Line,
  LabelList,
  LineChart,
  Brush,
} from "recharts";
const colors = scaleOrdinal(schemeCategory10).range();
const data = [
  {
    name: "food",
    value: 100,
    time: 1,
  },
  {
    name: "cosmetic",
    value: 200,
    time: 2,
  },
  {
    name: "storage",
    value: 300,
    time: 3,
  },
  {
    name: "digital",
    value: 400,
    time: 4,
  },
];

const data01 = [
  { name: "Group A", value: 400, v: 89 },
  { name: "Group B", value: 300, v: 100 },
  { name: "Group C", value: 200, v: 200 },
];

const data02 = [
  { name: "Page A", uv: 1000, pv: 2400, amt: 2400, uvError: [75, 20] },
  { name: "Page B", uv: 300, pv: 4567, amt: 2400, uvError: [90, 40] },
  { name: "Page C", uv: 280, pv: 1398, amt: 2400, uvError: 40 },
  { name: "Page D", uv: 200, pv: 9800, amt: 2400, uvError: 20 },
  { name: "Page E", uv: 278, pv: null, amt: 2400, uvError: 28 },
  { name: "Page F", uv: 189, pv: 4800, amt: 2400, uvError: [90, 20] },
  { name: "Page G", uv: 189, pv: 4800, amt: 2400, uvError: [28, 40] },
  { name: "Page H", uv: 189, pv: 4800, amt: 2400, uvError: 28 },
  { name: "Page I", uv: 189, pv: 4800, amt: 2400, uvError: 28 },
  { name: "Page J", uv: 189, pv: 4800, amt: 2400, uvError: [15, 60] },
];

const Charts = () => {
  return (
    <div>
      <BarChart
        width={800}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill={theme.colors.accent} />
      </BarChart>
      <PieChart width={500} height={250}>
        <Legend verticalAlign="bottom" iconType="star" iconSize={30} />
        <Pie
          data={data01}
          dataKey="value"
          cx={100}
          cy={100}
          innerRadius="0"
          outerRadius="60%"
        >
          {data01.map((entry, index) => (
            <Cell key={`slice-${index}`} fill={colors[index % 10]} />
          ))}
        </Pie>
      </PieChart>
      <LineChart width={1000} height={400} data={data02}>
        <YAxis type="number" yAxisId={0} domain={[0, 1020]} />
        <YAxis type="number" orientation="right" yAxisId={1} />
        <YAxis type="number" orientation="right" yAxisId={2} />
        <XAxis dataKey="name" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line dataKey="uv" stroke="#ff7300" strokeWidth={2} yAxisId={0} />
      </LineChart>
    </div>
  );
};

export default Charts;

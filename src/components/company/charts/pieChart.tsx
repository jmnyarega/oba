import React from "react";
import { Legend, PieChart, Pie, Cell } from "recharts";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";

const colors = scaleOrdinal(schemeCategory10).range();

const PieChartComponent = (props: any) => {
  const { data } = props;
  return (
    <PieChart width={500} height={250}>
      <Legend verticalAlign="bottom" iconType="star" iconSize={30} />
      <Pie
        data={data}
        dataKey="value"
        cx={100}
        cy={100}
        innerRadius="0"
        outerRadius="60%"
      >
        {data.map((entry: any, index: number) => (
          <Cell key={`slice-${index}`} fill={colors[index % 10]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default PieChartComponent;

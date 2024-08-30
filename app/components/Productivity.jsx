"use client";

import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    Day: 4000,
    Hours: 2400,
  },
  {
    name: "Feb",
    Day: 3000,
    Hours: 1398,
  },
  {
    name: "Mar",
    Day: 2000,
    Hours: 9800,
  },
  {
    name: "Apr",
    Day: 2780,
    Hours: 3908,
  },
  {
    name: "May",
    Day: 1890,
    Hours: 4800,
  },
  {
    name: "Jun",
    Day: 2390,
    Hours: 3800,
  },
  {
    name: "Jul",
    Day: 3490,
    Hours: 4300,
  },
  {
    name: "Aug",
    Day: 3490,
    Hours: 4300,
  },
  {
    name: "Sep",
    Day: 3490,
    Hours: 4300,
  },
  {
    name: "Oct",
    Day: 3490,
    Hours: 4300,
  },
  {
    name: "Nov",
    Day: 3490,
    Hours: 4300,
  },
  {
    name: "Dec",
    Day: 3490,
    Hours: 4300,
  },
];

const ProductivityChart = () => {
  return (
    <div className="rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Productivity</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false}  tickMargin={20}/>
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="Day"
            stroke="#C3EBFA"
            strokeWidth={5}
          />
          <Line type="monotone" dataKey="Hours" stroke="#CFCEFF" strokeWidth={5}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductivityChart;

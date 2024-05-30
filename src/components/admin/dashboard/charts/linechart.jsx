"use client";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from "recharts";

const Linechart = () => {
  const houseData = [
    {
      house_name: "House 1",
      rented: 10,
      sold: 5,
      available: 15,
    },
    {
      house_name: "House 2",
      rented: 8,
      sold: 7,
      available: 10,
    },
    {
      house_name: "House 3",
      rented: 15,
      sold: 3,
      available: 12,
    },
    {
      house_name: "House 4",
      rented: 12,
      sold: 10,
      available: 8,
    },
    {
      house_name: "House 5",
      rented: 6,
      sold: 4,
      available: 20,
    },
    {
      house_name: "House 6",
      rented: 9,
      sold: 6,
      available: 15,
    },
  ];

  return (
    <div>
      <ResponsiveContainer
        width="110%"
        style={{
          display: "flex",
          justifyContent: "center",
          marginLeft: "-40px",
        }}
        aspect={2.2}
      >
        <LineChart
          width={730}
          height={230}
          data={houseData}
          className="text-[10px]"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="house_name" interval="preserveStartEnd" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="natural"
            strokeWidth={3}
            dataKey="sold"
            stroke="#8884d8"
          />
          <Line
            type="natural"
            strokeWidth={3}
            dataKey="rented"
            stroke="#82ca9d"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Linechart;

"use client";
import {
  ResponsiveContainer,
 BarChart,Bar,CartesianGrid,XAxis,YAxis,Legend,Tooltip
} from "recharts";

const Barchart = () => {
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
    }
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
        aspect={3}
      >
        <BarChart width={730} height={250} className="text-[10px]" data={houseData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="house_name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="rented" fill="orange" strokeWidth={5} />
          <Bar dataKey="sold" fill="#82ca9d" strokeWidth={5} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Barchart;

import React from "react";
import styled from "styled-components";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

// import { AiOutlineCaretDown, AioutlineCaretDown } from "react-icons/ai";

function Sales() {
  return (
    <Section>
      <div className="sales">
        <div className="sales_deatils">
          <div>
            <h4>Sales Overview</h4>
          </div>
          <div>
            <select className="button">
              <option selected value="monthly">
                Monthly
              </option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
        </div>
        <div className="sales_graph">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={500}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                fill="url(#colorview)"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
         
        </div>
        {/* <ResponsiveContainer width="100%" height="100%">
            <AreaChart width={500} height={300} data={data} margin={{
              top:10,
            }}>
              <defs>
                <linearGradient id="colorview" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="30%" stopColor="#668DFF" stopOpacity="{0.4}"/>
                  <stop offset="85%" stopColor="#D4E0ff" stopOpacity="{0.2}"/>
                </linearGradient>
              </defs>
              <tooltip cursor="{true}"/>
              <Area
              type="monotone"
              dataKey="pv"
              stroke= "#668dff"
              fill="url(#colorview)"/>
            </AreaChart>
          </ResponsiveContainer> */}
      </div>
    </Section>
  );
}
export default Sales;
const Section = styled.section`
  .sales {
    color: green;
    width: 100%;
    .sales_deatils {
      display: flex;
      justify-content: space-between;
      margin: 1rem 0;
    }
    div {
      display: flex;
      gap: 1rem;
      .button {
        border-radius: 0.5rem;
        padding: 0.4rem 1rem;
        cursor: pointer;
        background-color: #eef4ff;
        color: green;
      }
    }
    .sales_graph {
      height: 10rem;
      width: 100%;
      .rechart-default-tooltip {
        background-color: green !important;
        border-color: green !important;
        color: white !important;
      }
    }
  }
`;

const data = [
  {
    name: "1",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "2",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "3",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "4",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "5",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "6",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "7",
    uv: 3000,
    pv: 4000,
    amt: 2100,
  },
  {
    name: "8",
    uv: 3500,
    pv: 8000,
    amt: 2100,
  },
  {
    name: "9",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "10",
    uv: 8900,
    pv: 5000,
    amt: 2100,
  },
  {
    name: "11",
    uv: 3800,
    pv: 6000,
    amt: 2100,
  },
  {
    name: "12",
    uv: 4000,
    pv: 3000,
    amt: 2100,
  },
];

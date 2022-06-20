import React from "react";
import styled from "styled-components";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
const dataSet = [
  {
    data: 3000,
  },
  {
    data: 4000,
  },
  {
    data: 3050,
  },
  {
    data: 3070,
  },
  {
    data: 5400,
  },
  {
    data: 6300,
  },
  {
    data: 7654,
  },
];
function Analytics() {
  return (
    <Section>
      <div className="analytic">
        <div className="analytic-details">
          <div>
            <h4>Sales Analytics</h4>
          </div>
          <div>
            <button>Switch to Weekly</button>
          </div>
        </div>
        <div className="analytics-graph">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={400}
              height={400}
              data={dataSet}
              margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
            >
              <Tooltip cursor={false} />
              <Area animationBegin={800} animationDuration={2000} type="monotone" dataKey="data" stroke="#ffc107" fill="#ffeaa7" strokeWidth={4} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Section>
  );
}
export default Analytics;

const Section = styled.section`
  .analytic {
    color: green;
    width: 100%;
    .analytic-details {
      display: flex;
      justify-content: space-between;
      margin: 1rem 0;
      div {
        display: flex;
        gap: 1rem;
        button {
          border-radius: 12px;
          padding: 0.4rem 1rem;
          border: none;
          cursor: pointer;
          background-color: green;
          color: white;
        }
      }
    }
    .analytics-graph {
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

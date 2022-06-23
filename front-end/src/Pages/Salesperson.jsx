import * as React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Sidebar from "../Components/sidebar";
import Navbar from "../Components/Navbar";
import { DataGrid } from "@mui/x-data-grid";
const columns = [
  { field: "ProductClass", headerName: "Product", width: 70 },  
  {
    field: "total",
    headerName: "Total Sales",
    description: "This column has a value getter and is not sortable.",    
    width: 160,
  },
];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];
function Salesperson() {
  const [data, setData] = useState(null);
  const URL1 = "/api/salesperson";
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    try {
      fetch(URL1)
        .then((res) => res.json())
        .then((response) => {
          console.log(response);
          setData(response);
        });
    } catch (error) {
      console.log("load period", error);
    }
  };
  return (
    <Section>
      <Sidebar />
      <Navbar />
      <div className="grid">
        <div className="grid-1">
          <form>
            <p>Search</p>
            <input type="text" />
            {"  "}
            <button>Update</button>
          </form>
          <label>Name:</label>
          <label>Total Sales: </label>
          <div>
            <div style={{ height: 700, width: "100%" }}>
              <DataGrid
                rows={data}
                columns={columns}
                // pageSize={5}
                rowsPerPageOptions={[1000]}                
              />
            </div>
          </div>
        </div>
        <div className="grid-2">orders_deatails</div>
      </div>
    </Section>
  );
}

export default Salesperson;
const Section = styled.section`
  margin-left: 36vh;
  height: 100%;
  .grid {
    display: grid;
    grid-template-columns: 70% 28%;
    gap: 2rem;
    margin-top: 2rem;
    .grid-1 {
      z-index: 2;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .grid-2 {
      z-index: 2;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
`;

import "./App.css";
// import Example from './Components/example';
import Dashboard from "./Components/Dashboard";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Routes,
  Route  
} from "react-router-dom";
import Salesperson from "./Pages/Salesperson";
import ProductsReports from "./Pages/ProductsReport";
import Messages from "./Pages/Messages";
import Profit from "./Pages/Overview";
import Overview from "./Pages/Overview";
import Suggestions from "./Pages/Suggestions";
// import suggestions from "./Pages/ProductsReport";


function App() {
  return (
    <Div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="salesperson" element={<Salesperson />} />
          <Route path="productsales" element={<ProductsReports />} />
          <Route path="messages" element={<Messages />} />
          <Route path="profit" element={<Profit />} />
          <Route path="overview" element={<Overview />} />
          <Route path="suggestions" element={<Suggestions />} />
        </Routes>
      </Router>
    </Div>
  );
}

export default App;
const Div = styled.div`
  position: relative;
`;

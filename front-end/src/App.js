import './App.css';
// import Example from './Components/example';
import Dashboard from './Components/Dashboard';
import styled from 'styled-components'
import Sidebar from './Components/sidebar';

function App() {
  return (
    <Div>
     <Sidebar/>
     <Dashboard/>
    </Div>
   
  );
}

export default App;
const Div = styled.div `
position: relative;
`;

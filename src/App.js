import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import TicketProcess from './pages/TicketProcess';
import MyTickets from './pages/MyTickets';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link className='link' to="/">Home</Link></li>
          <li><Link className='link' to="/myTickets">MyTickets</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ticketProcess" element={<TicketProcess/>}/>
        <Route path="/myTickets" element={<MyTickets/>}/>
      </Routes>
    </Router>
  );
}

export default App;

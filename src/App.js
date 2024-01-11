import './App.css';
import { BrowserRouter as Router, Route, Routes, Form } from 'react-router-dom';
import ContactForm from './pages/contact-form';
import Dashboard from './pages/dashboard';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/contactform" element={<ContactForm/>} />
          {/* Add more routes here */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

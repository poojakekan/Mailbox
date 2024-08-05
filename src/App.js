import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import SignupForm from './components/SignupForm';
import LogInForm from './components/LogInForm';

function App() {
  return (
    <div className="App">
      
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LogInForm />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
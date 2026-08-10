import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FloatingChat from './components/FloatingChat';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import Success from './pages/Success';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </main>
        
        <FloatingChat />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

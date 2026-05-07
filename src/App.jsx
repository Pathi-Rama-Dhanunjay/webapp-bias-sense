import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navigation/NavBar';
import Home from './pages/Home';
import ProductOverview from './pages/ProductOverview';
import { ViewProvider } from './context/ViewContext';

function App() {
  // Mock GA Scroll Tracking
  React.useEffect(() => {
    let scrolled = false;
    const handleScroll = () => {
      if (!scrolled && window.scrollY > document.body.scrollHeight / 2) {
        console.log("GA Event: scroll_depth", { scroll_percentage: 50 });
        scrolled = true;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="app-container" style={{ overflowX: 'hidden', width: '100%', maxWidth: '100vw' }}>
        <NavBar />
        <ViewProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<ProductOverview />} />
          </Routes>
        </ViewProvider>
      </div>
    </Router>
  );
}

export default App;

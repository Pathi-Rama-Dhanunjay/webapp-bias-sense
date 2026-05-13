import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navigation/NavBar';
import Home from './pages/Home';
import ProductOverview from './pages/ProductOverview';
import FinancialServices from './pages/solutions/financial-services';
import Healthcare from './pages/solutions/healthcare';
import Hiring from './pages/solutions/hiring';
import PublicSector from './pages/solutions/public-sector';
import UseCases from './pages/UseCases';
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
            <Route path="/solutions/financial-services" element={<FinancialServices />} />
            <Route path="/solutions/healthcare" element={<Healthcare />} />
            <Route path="/solutions/hiring" element={<Hiring />} />
            <Route path="/solutions/public-sector" element={<PublicSector />} />
            <Route path="/use-cases" element={<UseCases />} />
          </Routes>
        </ViewProvider>
      </div>
    </Router>
  );
}

export default App;

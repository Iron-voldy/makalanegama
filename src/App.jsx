import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import { AppProvider } from './context/AppContext';
import CustomCursor from './components/common/CustomCursor';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <div className="cursor-none"> {/* Hide default cursor */}
          <CustomCursor />
          <AppRoutes />
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;

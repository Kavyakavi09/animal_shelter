import './App.css';
import { Navbar, Footer } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Contact, Forms, AllPets } from './pages';
import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/theme';
import IndexedDb, { getAllAdopt, getAllAway } from './db/IndexedDb';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    IndexedDb();
    getAllAdopt();
    getAllAway();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/adopt' element={<Forms />} />
          <Route path='/giveaway' element={<Forms />} />
          <Route path='/allpets' element={<AllPets />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

import './styles/index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FicheLogement from './pages/FicheLogement';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Logo from './components/Logo';
import Footer from './components/Footer';

function App() {
      return (
            <BrowserRouter>
                  <Logo />
                  <Header />
                  <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/FicheLogement/:id" element={<FicheLogement />} />
                        <Route path="/About" element={<About />} />
                        <Route path="/NotFound" element={<NotFound />} />
                        <Route path="*" element={<NotFound />} />
                  </Routes>
                  <Footer />                  
            </BrowserRouter>
      );
}

export default App;

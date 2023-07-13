import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Page/HomePage/HomePage';
import Portfolio from './Page/Portfolio/Portfolio';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Layout from './Layout/Layout';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout Component={HomePage} />} />
                    <Route
                        path="/portfolio"
                        element={<Layout Component={Portfolio} />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

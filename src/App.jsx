import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
// import HomePage from './Page/HomePage/HomePage';
// import Portfolio from './Page/Portfolio/Portfolio';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Layout from './Layout/Layout';

const HomePage = React.lazy(() => import('./Page/HomePage/HomePage'));
const Portfolio = React.lazy(() => import('./Page/Portfolio/Portfolio'));

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <React.Suspense fallback={<>...</>}>
                                <Layout Component={HomePage} />
                            </React.Suspense>
                        }
                    />
                    <Route
                        path="/portfolio"
                        element={
                            <React.Suspense fallback={<>...</>}>
                                <Layout Component={Portfolio} />
                            </React.Suspense>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

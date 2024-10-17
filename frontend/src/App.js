import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

// Pages
import Home from './pages/Home/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume/Resume';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact'
import Polls from './pages/TestPolls';

function App() {
    return (
        <Router>
            <div className="App">
			<NavBar />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/Resume" element={<Resume />} />
					<Route path="/about" element={<About />} />
					<Route path="/polls" element={<Polls />} />

				</Routes>
			</main>
			<Footer />
            </div>
        </Router>
    );
}

export default App;

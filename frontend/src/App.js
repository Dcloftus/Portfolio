import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

// Pages
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';
import Resume from './pages/Resume/Resume';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact'
import Polls from './pages/TestPolls';
import Playground from './pages/Playground/Playground';
import LoftusCo from './pages/LoftusCo/LoftusCo';

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
					<Route path="/projects/:name" element={<ProjectDetails />} />
					<Route path="/Resume" element={<Resume />} />
					<Route path="/about" element={<About />} />
					<Route path="/playground" element={<Playground />} />
					<Route path="/loftusco" element={<LoftusCo />} />
					<Route path="/polls" element={<Polls />} />

				</Routes>
			</main>
			<Footer />
            </div>
        </Router>
    );
}

export default App;

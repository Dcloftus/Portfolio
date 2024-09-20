import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Polls from './components/TestPolls';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
					<Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/work-experience" element={<WorkExperience />} />
					<Route path="/polls" element={<Polls />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

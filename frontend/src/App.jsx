import { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Project';
import Shop from './pages/Shop';
import Shows from './pages/Shows';
import "./App.css";

function App() {

	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/shows" element={<Shows />} />
				<Route path="/shop" element={<Shop />} />
				{/* <Route path="/about" element={<About />} /> */}
			</Routes>
		</>
	);
}

export default App;

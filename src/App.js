import React, { Component } from "react";
import "./App.css";
import Banner from "./Component/banner";
import Header from "./Component/Header";

class App extends Component {
	render() {
		return (
			<div className="app">
				<Header />
				<Banner />
			</div>
		);
	}
}

export default App;

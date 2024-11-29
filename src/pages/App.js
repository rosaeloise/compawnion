import React from "react";
import NavigationBar from "../components/NavigationBar";

import '../css/app.css';

class App extends React.Component {
  render() {
	return (
		<>
			<NavigationBar active='app' />
	  <div>
				<h1 id="appname">App</h1>
	  </div>
		</>
	);
  }
}

export default App;
import React from "react";
import NavigationBar from "../components/NavigationBar";

class App extends React.Component {
  render() {
	return (
		<>
			<NavigationBar active='app' />
	  <div>
		<h1>App</h1>
	  </div>
		</>
	);
  }
}

export default App;
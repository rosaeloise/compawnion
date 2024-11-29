import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import BRKPAW from "../assets/BRKPAW.png";
import mobile from "../assets/mobileapp.png";

import "../css/app.css";

class App extends React.Component {
  render() {
    return (
      <>
        <NavigationBar active="app" />

        <img src={BRKPAW} alt="brkpaw" id="pawprint" />
        <img src={mobile} alt="mobileapp" id="cellphone" />
        <section id="downloadapp">
          <img src={BRKPAW} alt="brkpaw" id="pawprint" />
          <img src={mobile} alt="mobileapp" id="cellphone" />
          <div>
            <h1 id="appname">
              <span>Download Our</span>
              <br />
              Compawnion App
            </h1>

            <p id="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae
              venenatis elit. Mauris eu porta diam. Cras congue tempus tempor.
              Donec aliquet turpis ac arcu efficitur, ut dictum sem rhoncus.
              Nunc velit turpis, tincidunt eu posuere vel, blandit id magna.
              Maecenas vulputate molestie eros, nec pulvinar justo eleifend vel.
              Vestibulum.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae
              venenatis elit. Mauris eu porta diam. Cras congue tempus tempor.
              Donec aliquet turpis ac arcu efficitur, ut dictum sem rhoncus.
              Nunc velit turpis, tincidunt eu posuere vel, blandit id magna.
              Maecenas vulputate molestie eros, nec pulvinar justo eleifend vel.
              Vestibulum.
            </p>

            <Button
              href="https://github.com/Barkcode-Compawnion/compawnion/releases/download/v.1.0.0/Compawnion.apk"
              title="download"
              id="dlbtn"
            >
              Download App
            </Button>
          </div>
        </section>
        <Footer active="home" />
      </>
    );
  }
}

export default App;

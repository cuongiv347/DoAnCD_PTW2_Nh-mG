import React from 'react';
import './css/styles.css';
class Module extends React.Component {
    render() {
      return(
        <div className="menu">
        <div className="container">
        <header className="cd-header">
          <h1>Menu</h1>
        </header>

        <div className="cd-main-content">
            <div className="cd-tab-filter">
              <ul className="cd-filters">
                <li className="filter"><a className="selected" href="#0" data-type="all">All</a></li>
                <li className="filter" data-filter=".starts"><a href="#0" data-type="color-1">starts</a></li>
                <li className="filter" data-filter=".breakfast"><a href="#0" data-type="color-2">breakfast</a></li>
                <li className="filter" data-filter=".lunch"><a href="#0" data-type="color-3">lunch</a></li>
                <li className="filter" data-filter=".dinner"><a href="#0" data-type="color-4">dinner</a></li>
                <li className="filter" data-filter=".desserts"><a href="#0" data-type="color-5">desserts</a></li>
              </ul>
            </div> 

          <section className="cd-gallery">
            <ul>
              <li className="mix starts">
                <img src={require("./images/1.jpg")}alt=""></img>
                      <div className="menu-overlay">
                          <h4>English-Asparagus</h4>
                          <p>Asparagus, hens egg, toasted sunflower seeds, Spenwood cheese</p>
                          <span className="price">$ 14.95</span>
                      </div>
                  </li>
              <li className="mix breakfast">
                <img src={require("./images/2.jpg")}alt=""></img>
                      <div className="menu-overlay">
                          <h4>English-Asparagus</h4>
                          <p>Asparagus, hens egg, toasted sunflower seeds, Spenwood cheese</p>
                          <span className="price">$ 14.95</span>
                      </div>
                  </li>
              <li className="mix lunch">
                <img src={require("./images/3.jpg")}alt=""></img>
                      <div className="menu-overlay">
                          <h4>English-Asparagus</h4>
                          <p>Asparagus, hens egg, toasted sunflower seeds, Spenwood cheese</p>
                          <span className="price">$ 14.95</span>
                      </div>
                  </li>
              <li className="mix dinner">
                <img src={require("./images/4.jpg")}alt=""></img>
                      <div className="menu-overlay">
                          <h4>English-Asparagus</h4>
                          <p>Asparagus, hens egg, toasted sunflower seeds, Spenwood cheese</p>
                          <span className="price">$ 14.95</span>
                      </div>
                  </li>
              <li className="mix desserts">
                <img src={require("./images/5.jpg")}alt=""></img>
                      <div className="menu-overlay">
                          <h4>English-Asparagus</h4>
                          <p>Asparagus, hens egg, toasted sunflower seeds, Spenwood cheese</p>
                          <span className="price">$ 14.95</span>
                      </div>
              </li>
            </ul>
          </section>
        </div>
        </div>
        </div>
      );
    }
  }

export default Module;

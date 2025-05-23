import React, {Component} from "react";
import WeatherForm from "./WeatherForm";
import WeatherPanels from "./WeatherPanels";
import "../Stylesheets/Container.scss";

class Container extends Component {
    state = {
        weatherData: ''
    };

    render() {
        return(
            <section className="weather container">
                <WeatherForm />
                <WeatherPanels weatherData={this.state.weatherData}/>
            </section>
        );
    }
}

export default Container;
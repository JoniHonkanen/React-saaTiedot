import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
<<<<<<< HEAD
import GoogleMap from '../components/google_map';
=======
>>>>>>> origin

class WeatherList extends Component {

    renderWeather(cityData) {

        const temps = cityData.list.map(weather => weather.main.temp - 273.16);
        const pressures = cityData.list.map(pressure => pressure.main.pressure);
        const humidities = cityData.list.map(humidity => humidity.main.humidity);
<<<<<<< HEAD
        const lon = cityData.city.coord.lon;
        const lat = cityData.city.coord.lat;

        // const {lat, lat}  = cityData.city.coord; 
=======

>>>>>>> origin
        console.log(temps);

        return (
            <tr key={cityData.city.name}>
<<<<<<< HEAD
                <td><GoogleMap lon={lon} lat={lat} /></td>
=======
                <td>{cityData.city.name}</td>
>>>>>>> origin
                <td><Chart data={temps} color='green' units="C" /></td>
                <td><Chart data={pressures} color='blue' units="hPa" /></td>
                <td><Chart data={humidities} color='red' units="%" /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);


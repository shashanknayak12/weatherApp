
import './App.css';
import { Component } from 'react';
import Weather from './components/Weather';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css'

const myApiKey = '17985b8124d88c9d4c1db493ba9f02db'
class App extends Component {
    state = {
        searchText: 'Bangalore',
        lat: 0,
        lon: 0,
        name: 'Bangalore',
        country: 'IN',
        daily: [],
        selectedCurrentIndex: 0,
        isLoading: true,
    }


    myData = async () => {
        this.setState({ isLoading: true });
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.searchText}&units=metric&appid=${myApiKey} `)
            const result = await res.json()

            const { name, sys, coord } = result

            const res1 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=hourly,minutely&units=metric&appid=${myApiKey} `)
            const result1 = await res1.json()
            this.setState({ name, country: sys.country, lat: coord.lat, lon: coord.lon, daily: result1.daily, isLoading: false })
        } catch (e) {
            toast.error('Not found!!');
            this.setState({ isLoading: false })
        }

    }

    componentDidMount() {
        this.myData()
    }


    onChange = (e) => {
        this.setState({ searchText: e.target.value })
    }


    onClick = () => {
        this.myData()

    }

    setSelectedIndex = (index) => {
        this.setState({
            selectedCurrentIndex: index
        })
    }


    render() {
        if (this.state.isLoading) {
            <div>

            </div>
        }

        return (

            <div>

                <div>
                    <Weather
                        searchText={this.state.searchText}
                        onClick={this.onClick}
                        onChange={this.onChange}
                        name={this.state.name}
                        country={this.state.country}
                        currentIndex={this.state.selectedCurrentIndex}
                        daily={this.state.daily}
                        setSelectedIndex={this.setSelectedIndex}
                        isLoading={this.state.isLoading}
                    />
                    <ToastContainer />
                </div>

            </div>

        )
    }

}

export default App;

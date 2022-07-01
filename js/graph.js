const API = axios.create({baseURL: 'http://localhost:5000'});

var fetchData = () => {
    API.get('/bmi-data');
}
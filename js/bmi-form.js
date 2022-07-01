document.getElementById("clickMe").onclick = doFunc;

function doFunc () {

    const API = axios.create({baseURL: 'http://localhost:5000'});

    var bmiData = (formData) => {
        var motherBMI = document.getElementById('bmiM').value;
        var childBMI = document.getElementById('bmiC').value;
        
        var formData = {
            childBMI,
            motherBMI,
            time: "May 2019"
        }
        
        API.post('/data/add', formData);
    }
    bmiData();
}
const form = document.getElementById("myForm")
form.addEventListener("submit", doFunc)

function doFunc (event) {

    const API = axios.create({baseURL: 'http://localhost:5000'});

    var signUp = (formData) => {

        var name = document.getElementById('name').value;
        var phone = document.getElementById('phn').value;
        var password = document.getElementById('psw').value;
        
        var formData = {
            name,
            phone,
            password
        }

        API.post('/user/signup', formData)
        .then(response => {
            console.log(response.data)

            if(response.data.result) {
                window.location.href = "Home.html";
            }
        })

        event.preventDefault();
    }

    // var signUp = (formData) => {
    //     API.post('/user/signup', formData);
    // }

    signUp();
}
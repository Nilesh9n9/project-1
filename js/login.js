const form = document.getElementById("myForm")
form.addEventListener("submit", doFunc)

function doFunc (event) {

    const API = axios.create({baseURL: 'http://localhost:5000'});
    console.log("clicked")

    var signIn = () => {

        var phone = document.getElementById('phn').value;
        var password = document.getElementById('psw').value;
        
        var formData = {
            phone,
            password
        }

        API.post('/user/signin', formData)
        .then(response => {
            console.log(response.data)

            if(response.data.result) {
                window.location.href = "Home-Admin.html";
            }
        })

        event.preventDefault();

        
    }

    // var signUp = (formData) => {
    //     API.post('/user/signup', formData);
    // }

    signIn();
}
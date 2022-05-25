const conname =  "yeminhein";
const conpass= "12345678";

function login(e){
    e.preventDefault();
    let username= e.target[0].value;
    username = username.trim();
    let password = e.target[1].value;
    password = password.trim();
    if(username && password ){
        if(username!==conname && password===conpass ){
            document.querySelector('#errorname').innerHTML="Wrong User Name";
           blank();           
        }
        else if(username===conname && password!==conpass){
            document.querySelector('#errorpass').innerHTML="Wrong Password";
            blank();
        }
        else if(username!==conname && password!==conpass){
            document.querySelector('#errorname').innerHTML="Wrong User Name";
            document.querySelector('#errorpass').innerHTML="Wrong Password";
            blank();
        }
        else{
            location.href='Page/profile.html'; 
        }
    }
    else{
        location.href='../index.html';
    }
}

function blank(){
    document.getElementById('username').value="";
    document.getElementById('password').value="";
}

function Register(e){
    e.preventDefault();
    let email = e.target[0].value;
    email = email.trim();
    let username= e.target[1].value;
    username = username.trim();
    let password = e.target[2].value;
    password = password.trim();
    confirmpassword =  e.target[3].value;
    confirmpassword = confirmpassword.trim();
    document.querySelector('#errorname').innerHTML="";
    document.querySelector('#errorpass').innerHTML="";
    document.querySelector('#erroremail').innerHTML="";
    document.querySelector('#errorconfrim').innerHTML="";
    let mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.match(mailformat)){
        document.querySelector('#erroremail').innerHTML="";
    }
    else{
        document.querySelector('#erroremail').innerHTML="Invalid email address!";
    }
    if(username.length < 4){
        document.querySelector('#errorname').innerHTML="User name length minmun 4 word!";
    }
    if(password.length >= 8 ){
        if(password !== confirmpassword ){
            document.querySelector('#errorconfrim').innerHTML="Password not match";
            document.getElementById('password').value="";
            document.getElementById('confrimpassword').value="";
        }
    }
    else{
        document.querySelector('#errorpass').innerHTML="Password length minmun 8 word!"; 
    }
}
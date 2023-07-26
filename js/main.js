var loginInfo = [{email : 'rriki@gamil.com', password : '1234'},
                 {email : 'alice@gmail.com', password : '2345'},
                 {email : 'soobeom@gmail.com', password : '3456'}]

document.getElementById('login-btn').addEventListener('click',function(e){
    var emailInput = document.getElementById('exampleInputEmail1').value;
    var passwordInput = document.getElementById('exampleInputPassword1').value;
    if(emailInput == ''){
        e.preventDefault;
        alert("Email is null");
    } else if( /\S+@\S+\.\S+/.test(emailInput) == false){
        e.preventDefault;
        alert("It's not an email type");
    } else if(passwordInput ==''){
        e.preventDefault;
        alert("Password is null");
    } 
    else {
        let loginIndex = loginInfo.findIndex(e => e.email == emailInput)
        if (loginIndex >= 0){
            if (loginInfo[loginIndex].password == passwordInput){
                document.getElementsByClassName('loginForm')[0].innerHTML='<p style="background-color: rgb(119,134,153); font-size:30px;">😊Success!</p>';
            }
            else {
                alert("Wrong Passwords.");
            }
        }
        else{
            alert("Wrong Email.");
        }
    }
});
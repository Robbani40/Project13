function showFrom(type){
    //  console.log("Clicked on--", type)
    document.getElementById('registerForm').classList.add('d-none');
    document.getElementById('loginForm').classList.add('d-none');
    
    if (type === 'register'){
        document.getElementById('registerFrom').classList.remove('d-none');
    }else if (type === 'login'){
        document.getElementById('loginFrom').classList.remove('d-none');
        
    }

}

function register(){
    const fullname = document.getElementById('regFullname').value;
    const email = document.getElementById('regEmail').value;
    const InputPassword  = document.getElementById('regPassword').value;

    // console.log("Full name:",fullname,"Email:",email,"Password:",Password);


    if (!fullname){
        alert("Please enter your full name.");
        return;
    }
    if (!email){
        alert("Please enter your email.");
        return;
    }
    if (!InputPassword){
        alert("Please enter your Password.");
        return;
    }

    const user = localStorage.getItem(email)
    // console.log("Current user is",user)
    console.log("String value of localStorage", user)

    if (!user){
        alert("user nto exist!")
        return;

    }

    const PerseUser = JSON.parse(user)
// console.groupCollapsed("javaScript object user",PerseUser)
if (InputPassword != PerseUser.Password ){
    alert("Incorrect Password")
    return;

    }
    alert("Login SuccessFull !! Welcome " + PerseUser.fullname)

    document.getElementById('loginEmail').value ='';
    document.getElementById('loginPassword').value ='';

}


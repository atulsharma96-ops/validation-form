// alert("hiii hiii");

//password validation start
let pass = document.getElementById("pass");
let pp = document.getElementById("ppp");
function checkpass() {
    // alert("hii hiii");
    // alert(pass.value);

    // all condition fullfill hai ya nai
    if ((/[A-Z]/.test(pass.value)) && (/[a-z]/.test(pass.value)) && (/[0-9]/.test(pass.value)) && (/[^A-Za-z0-9]/.test(pass.value))) {
        // alert("pass is too week")
        pp.innerHTML = "password is strong";
        pp.style.color = "green";
        pass.style.border = " 1px solid green";
        pass.style.borderRadius = "2px";
    }
    // koi 3 condition fullfill hai ya nahi
    //special character ko hata diya
    else if ((/[A-Z]/.test(pass.value)) && (/[a-z]/.test(pass.value)) && (/[0-9]/.test(pass.value))) {
        pp.innerHTML = "password is medium , password should contain atleast one special cheractor";
        pp.style.color = "orange";
        pass.style.border = " 1px solid orange";
        pass.style.borderRadius = "2px";
    }
    // numeric ko hata diya
    else if ((/[A-Z]/.test(pass.value)) && (/[a-z]/.test(pass.value)) && (/[^A-Za-z0-9]/.test(pass.value))) {
        pp.innerHTML = "password is medium , password should contain atleast one numeric";
        pp.style.color = "orange";
        pass.style.border = " 1px solid orange";
        pass.style.borderRadius = "2px";
    }
    //lowercase ko hata diya
    else if ((/[A-Z]/.test(pass.value)) && (/[0-9]/.test(pass.value)) && (/[^A-Za-z0-9]/.test(pass.value))) {
        pp.innerHTML = "password is medium , password should contain atleast one small character";
        pp.style.color = "orange";
        pass.style.border = " 1px solid orange";
        pass.style.borderRadius = "2px";
    }
    // uppercase ko hta diya
    else if ((/[0-9]/.test(pass.value)) && (/[^A-Za-z0-9]/.test(pass.value)) && (/[a-z]/.test(pass.value))) {
        pp.innerHTML = "password is medium , password should contain atleast one uppercase";
        pp.style.color = "orange";
        pass.style.border = " 1px solid orange";
        pass.style.borderRadius = "2px";
    }
    //koi 2 condition fullfill hai ya nahi 
    //special character ke sath baki 3 ko check kiya
    else if ((/[^A-Za-z0-9]/.test(pass.value)) && (/[0-9]/.test(pass.value))) {
        pp.innerHTML = "password is weak , password should contain atleast one uppercase and onelowercaser";
        pp.style.color = "red";
        pass.style.border = " 1px solid red";
        pass.style.borderRadius = "2px";
    }
    else if ((/[^A-Za-z0-9]/.test(pass.value)) && (/[A-Z]/.test(pass.value))) {
        pp.innerHTML = "password is weak , password should contain atleast one lowercase and one numeric ";
        pp.style.color = "red";
        pass.style.border = " 1px solid red";
        pass.style.borderRadius = "2px";
    }
    else if ((/[^A-Za-z0-9]/.test(pass.value)) && (/[a-z]/.test(pass.value))) {
        pp.innerHTML = "password is weak , password should contain atleast one uppercase and one numeric";
        pp.style.color = "red";
        pass.style.border = " 1px solid red";
        pass.style.borderRadius = "2px";
    }
    // numeric ke sath baki ke 2 ko check kiya
    else if ((/[0-9]/.test(pass.value)) && (/[A-Z]/.test(pass.value))) {
        pp.innerHTML = "password is weak , password should contain atleast one special character and one lowercaser";
        pp.style.color = "red";
        pass.style.border = " 1px solid red";
        pass.style.borderRadius = "2px";
    }
    else if ((/[0-9]/.test(pass.value)) && (/[a-z]/.test(pass.value))) {
        pp.innerHTML = "password is weak , password should contain atleast one uppercase and one special character ";
        pp.style.color = "red";
        pass.style.border = " 1px solid red";
        pass.style.borderRadius = "2px";
    }
    // upper case ke sath lower case ko check kiya
    else if ((/[A-Z]/.test(pass.value)) && (/[a-z]/.test(pass.value))) {
        pp.innerHTML = "password is weak , password should contain atleast one numeric and one special character";
        pp.style.color = "red";
        pass.style.border = " 1px solid red";
        pass.style.borderRadius = "2px";
    }
    //single check kiya
    else if (/[A-Z]/.test(pass.value)) {
        pp.innerHTML = "password is weak , password should contain atleast one lowercase and numeric and one special character";
        pp.style.color = "red";
        pass.style.border = " 1px solid red";
        pass.style.borderRadius = "2px";
    }
    else if (/[^A-Za-z0-9]/.test(pass.value)) {
        pp.innerHTML = "password is weak , password should contain atleast one lowercase and numeric and one uppercase";
        pp.style.color = "red";
        pass.style.border = " 1px solid red";
        pass.style.borderRadius = "2px";
    }
    else if (/[0-9]/.test(pass.value)) {
        pp.innerHTML = "password is weak , password should contain atleast one lowercase and one uppercase and one special character";
        pp.style.color = "red";
        pass.style.border = " 1px solid red";
        pass.style.borderRadius = "2px";
    }
    else {
        pp.innerHTML = "password is weak , password should contain atleast one uppercase and one numeric and one special character";
        pp.style.color = "red";
        pass.style.border = " 1px solid red";
        pass.style.borderRadius = "2px";
    }
    // backpress krne ke bad password input tag ko pahle jaisa kar rahe hai 
    if (pass.value == "") {
        pp.innerHTML = "Note : Password should be contain at least one upper case and one lower case and one special cheratcto and one number";
        pp.style.color = "gray";
        pass.style.border = " 1px solid gray";
        pass.style.borderRadius = "2px";
    }

};
// password validation end

// password show hide function start
function showpass() {
    if (pass.type === "password") {
        pass.type = "text";
    }
    else {
        pass.type = "password";
    }
}
// password show hide function ens

// mobile number validation start
let mob = document.getElementById("mob");
let mnmsg = document.getElementById("mnmsg");
let mobp = /^[0-9]{10,10}$/;
function checkmn() {
    if (mobp.test(mob.value)) {
        mob.style.border = " 1px solid gray";
        mob.style.borderRadius = "2px";
        mnmsg.innerHTML = "";
    }
    else {
        mob.style.border = " 1px solid red";
        mob.style.borderRadius = "2px";
        mnmsg.innerHTML = "mobile number shoud be numeric & 10 digit";
        mnmsg.style.color = "red";
    }
    // backpress krne ke bad mobile input tag ko pahle jaisa kar rahe hai
    if (mob.value == "") {
        mob.style.border = " 1px solid gray";
        mob.style.borderRadius = "2px";
        mnmsg.innerHTML = "";
    }
};
// mobile number validation end

//email validation start
let email = document.getElementById("email");
let emailmsg = document.getElementById("emailmsg");
const regx = /^[a-zA-Z0-9]+\@[a-zA-Z0-9]+\.[a-zA-Z0-9]{3,}$/;
function checkemail() {
    if (regx.test(email.value)) {
        email.style.border = " 1px solid gray";
        email.style.borderRadius = "2px";
        emailmsg.innerHTML = "";
    }
    else {
        email.style.border = " 1px solid red";
        email.style.borderRadius = "2px";
        emailmsg.innerHTML = "email should be correct, it contain (eg : --your email--@gmail.com)";
        emailmsg.style.color = "red";
    }
    // backpress krne ke baad email ke input ko wapis se pahle jaisa kr rahe hai 
    if (email.value == "") {
        email.style.border = " 1px solid gray";
        email.style.borderRadius = "2px";
        emailmsg.innerHTML = "";
    }
};
//email validation end

// name validation start
// for first name
let fname = document.getElementById("fname");
let fnamep = /^[a-zA-Z]{3,12}$/;
function fnamech() {
    if (fnamep.test(fname.value)) {
        fname.style.border = "1px solid gray"
        fname.style.borderRadius = "2px"
        document.getElementById("fnamemsg").innerHTML = "";
    }
    else {
        document.getElementById("fnamemsg").innerHTML = "invalide name";
        document.getElementById("fnamemsg").style.color = "red";
        fname.style.border = "1px solid red"
        fname.style.borderRadius = "2px"
    }
    // back press karne ke baad first name ke input ko pahle jaisa kar rahe hai
    if (fname.value == "") {
        fname.style.border = "1px solid gray"
        fname.style.borderRadius = "2px"
        document.getElementById("fnamemsg").innerHTML = "";
    }
};
// for last name
let lname = document.getElementById("lname");
let lnamep = /^[a-zA-Z]{3,12}$/;
function lnamech() {
    if (lnamep.test(lname.value)) {
        lname.style.border = "1px solid gray"
        lname.style.borderRadius = "2px"
        document.getElementById("lnamemsg").innerHTML = "";
    }
    else {
        document.getElementById("lnamemsg").innerHTML = "invalide name";
        document.getElementById("lnamemsg").style.color = "red";
        lname.style.border = "1px solid red"
        lname.style.borderRadius = "2px"
    }
    // back press karne ke baad last name ke input ko pahle jaisa kar rahe hai
    if (lname.value == "") {
        lname.style.border = "1px solid gray"
        lname.style.borderRadius = "2px"
        document.getElementById("lnamemsg").innerHTML = "";
    }
};
// name validation end

// username validation start
let uname = document.getElementById("uname");
let unamep = /^[a-zA-Z0-9_]{3,15}$/;
function unamecheck() {
    if (unamep.test(uname.value.trim())) {
        uname.style.border = "1px solid gray"
        uname.style.borderRadius = "2px"
        document.getElementById("unamemsg").innerHTML = "";
    }
    else {
        document.getElementById("unamemsg").innerHTML = "username may contain a-z, A-Z, 0-9, '_' only";
        document.getElementById("unamemsg").style.color = "red";
        uname.style.border = "1px solid red"
        uname.style.borderRadius = "2px"
    }
    // back press karne ke baad last name ke input ko pahle jaisa kar rahe hai
    if (uname.value == "") {
        uname.style.border = "1px solid gray"
        uname.style.borderRadius = "2px"
        document.getElementById("unamemsg").innerHTML = "";
    }
};
// username validation end

// check function
function check() {
    if (fname.value == "") {
        document.getElementById("fnamemsg").innerHTML = "please fill this field";
        document.getElementById("fnamemsg").style.color = "red";
    }
    if(lname.value == ""){
          document.getElementById("lnamemsg").innerHTML = "please fill this field";
          document.getElementById("lnamemsg").style.color = "red";
    }
    if(uname.value == ""){
      document.getElementById("unamemsg").innerHTML = "please fill this field";  
      document.getElementById("unamemsg").style.color = "red";
    }
    if(email.value == ""){
        emailmsg.innerHTML = "please fill this field";
        emailmsg.style.color = "red";
    }
    if(mob.value == ""){
        document.getElementById("mnmsg").innerHTML = "please fill this field";
        document.getElementById("mnmsg").style.color = "red";
    }
   if(pass.value == ""){
    document.getElementById("ppp").innerHTML = "please fill this field";
    document.getElementById("ppp").style.color = "red";
   }
}
// reset function
function reset() {
    window.location.reload();
};
/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/

function newuser(user_pic,user_name,user_email,user_country){
    this.user_pic = user_pic;
    this.user_name = user_name;
    this.user_email = user_email;
    this.user_country = user_country;
}

function submituser(event){
    event.preventDefault();

    let form = document.getElementById("form");

    let img = form.user_pic.value;
    let name = form.user_name.value;
    

    let email = form.user_email.value;
   

    let country = form.user_country.value;
   

    // Creating Object

    if(img==="" || name === "" || email==="" || country===""){
        alert("please fill info")} else {

            let data = new newuser(img,name,email,country);

            const totaldata = JSON.parse(localStorage.getItem("user")) || [];

            totaldata.push(data);

            localStorage.setItem("user",JSON.stringify(totaldata));
        }
    

}

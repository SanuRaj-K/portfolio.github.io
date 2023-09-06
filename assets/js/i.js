function sendMail(){
    var params={
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        message:document.getElementById('subject').value
    }
    const serviceId="service_kinp0ax";
const templateId="template_vsxkrc7";

emailjs.send(serviceId,templateId,params)
.then(res=>{
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("subject").value="";
    console.log(res);
    alert("form submitted successfully!!!")
}).catch(err=>console.log(err));
}


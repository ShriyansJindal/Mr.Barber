const james = document.getElementById("james")
const raju = document.getElementById("raju")
const rocky = document.getElementById("rocky")
const dhruv = document.getElementById("dhruv")

const barber_pic = document.getElementById("barber-photo")
const barber_name = document.getElementById("barber-name")

const form = document.getElementById("form");

const submit = document.getElementById("submit");
const thankyou = document.getElementById("thankyou")
const apointment = document.getElementById("appointment")


const background = document.getElementById("change-bg");
function Changeby(){
    const images = ['url("bg1.avif")','url("bg2.jpg")','url("bg3.jpg")']
    const backgroundImg = images[Math.floor(Math.random() * images.length)];
    background.style.backgroundImage = backgroundImg;
}
setInterval(Changeby,3000)


james.onclick=()=>{
    james.style.boxShadow = "#525252 0px 0px 5px 5px";
    raju.style.boxShadow = "none";
    rocky.style.boxShadow = "none";
    dhruv.style.boxShadow = "none";
    barber_name.innerText = "James";
    barber_pic.style.backgroundImage = "url(https://media.istockphoto.com/id/1340452153/photo/portrait-of-a-barber.webp?b=1&s=170667a&w=0&k=20&c=VlwTsPzdwb__ETewlVphgPny4NykdkDucvpy_rPHl5k=)";
}
raju.onclick=()=>{
    // raju.style.border = "2px solid white";
    raju.style.boxShadow = "#525252 0px 0px 5px 5px";
    james.style.boxShadow = "none";
    rocky.style.boxShadow = "none";
    dhruv.style.boxShadow = "none";
    barber_name.innerText = "Raju";
    barber_pic.style.backgroundImage = "url(https://media.istockphoto.com/id/1365608023/photo/shot-of-a-handsome-young-barber-standing-alone-in-his-salon.webp?b=1&s=170667a&w=0&k=20&c=pxeqhIkM--YoZn2HQyrlWWO60QPKo-nmMvU92YWbOhc=)";
    barber_pic.style.backgroundPosition = "center";
}
rocky.onclick=()=>{
    rocky.style.boxShadow = "#525252 0px 0px 5px 5px";
    james.style.boxShadow = "none";
    raju.style.boxShadow = "none";
    dhruv.style.boxShadow = "none";
    barber_name.innerText = "Rocky";
    barber_pic.style.backgroundImage = "url(https://static01.nyt.com/images/2023/05/21/multimedia/00CelebrityBarbers-JP1/00CelebrityBarbers-lede-try-btcf-superJumbo.jpg?quality=75&auto=webp)";
    barber_pic.style.backgroundPosition = "center";
}
dhruv.onclick=()=>{
    dhruv.style.boxShadow = "#525252 0px 0px 5px 5px";
    james.style.boxShadow = "none";
    rocky.style.boxShadow = "none";
    raju.style.boxShadow = "none";
    barber_name.innerText = "Dhruv";
    barber_pic.style.backgroundImage = "url(https://nypost.com/wp-content/uploads/sites/2/2015/06/barber_mendoza1a.jpg?resize=1064,709&quality=75&strip=all)";
    barber_pic.style.backgroundPosition = "center";
}
const body = document.body;
function openform(){
    form.style.display = "block";
    form.style.boxShadow = "0px 0px 0px 400px #000000ad";
    
}
function closeform (){
    form.style.display = "none";
}
submit.onclick =()=>{
       
    submit.style.display= "none";
    thankyou.style.display= "block";
    form.style.display= "none";
    apointment.style.display = "none";
    // alert("Thankyou for Booking");
}

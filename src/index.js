// import "./styles.css";
import "./styles.scss";
import axios from 'axios';

console.log("hello world!");

window.onload= function(){
    const footer = document.querySelector('.main-footer');
    axios.get("./components/copyRight.html")
    .then(function(res){
        console.log(res.data);
        footer.innerHTML = res.data
    })





}//onload
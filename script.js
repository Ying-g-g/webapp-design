//typing effect
var i = 0;
const text = document.getElementById("typing-text");
const fullText = text.innerText;
text.innerText = ""
var speed = 75
function typing(){
    if(i < fullText.length){
        text.innerText += fullText.charAt(i);
        i++;
        setTimeout(typing, speed);
    }    
}
typing();

//smooth navigation
const linkBtn = document.querySelectorAll("nav ul li a");
linkBtn.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const sect = document.querySelector(e.target.getAttribute("href"));
        sect.scrollIntoView({behavior: "smooth"});
    });
});

//more info toggle
function projectToggle(id){
    const projectDetails = document.getElementById(id);
    const isVisible = projectDetails.style.display === "block";
    projectDetails.style.display = isVisible ? "none" : "block";
}
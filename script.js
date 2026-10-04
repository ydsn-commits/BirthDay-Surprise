document.addEventListener("DOMContentLoaded", function () {

let currentPage = 0;
const pages = document.querySelectorAll(".page");

function showPage(index){
pages.forEach(p=>p.classList.remove("active"));
pages[index].classList.add("active");

if(index===2) startTyping();
if(index===5) startFinalFireworks();
}

window.nextPage=function(){
currentPage++;
if(currentPage<pages.length){
showPage(currentPage);
}
}

window.playMusic = function(){
    const music = document.getElementById("bgMusic");
    const overlay = document.getElementById("musicOverlay");
    music.play();
    overlay.classList.add("active");
}

// Floating hearts
const heartsContainer=document.querySelector(".hearts");
for(let i=0;i<40;i++){
let heart=document.createElement("span");
heart.innerHTML="❤";
heart.style.left=Math.random()*100+"vw";
heart.style.fontSize=(10+Math.random()*20)+"px";
heart.style.animationDuration=(5+Math.random()*5)+"s";
heartsContainer.appendChild(heart);
}

// Typewriter
function typeWriter(element,text,speed,callback){
let i=0;
element.innerHTML="";
function typing(){
if(i<text.length){
element.innerHTML+=text.charAt(i);
i++;
setTimeout(typing,speed);
}else if(callback){callback();}
}
typing();
}

function startTyping(){

    const nextBtn = document.getElementById("page3NextBtn");

    // RESET EVERYTHING
    nextBtn.style.opacity = "0";
    nextBtn.style.pointerEvents = "none";

    document.getElementById("typeTitle").innerHTML = "";
    document.getElementById("line1").innerHTML = "";
    document.getElementById("line2").innerHTML = "";
    document.getElementById("line3").innerHTML = "";
    document.getElementById("line4").innerHTML = "";
    document.getElementById("line5").innerHTML = "";
    document.getElementById("line6").innerHTML = "";
    document.getElementById("line7").innerHTML = "";

    typeWriter(
        document.getElementById("typeTitle"),
        "Why You're So Special 💖",
        100,
        function(){
            typeWriter(
                document.getElementById("line1"),
                "You started as my friend…",
                60,
                function(){
                    typeWriter(
                        document.getElementById("line2"),
                        "But somehow became my favorite person.🫶",
                        60,
                        function(){
                            typeWriter(
                                document.getElementById("line3"),
                                "Your laugh is my favorite sound.",
                                60,
                                function(){
                                    typeWriter(
                                        document.getElementById("line4"),
                                        "Your kindness makes everything better.",
                                        60,
                                        function(){
                                            typeWriter(
                                                document.getElementById("line5"),
                                                "With you, friendship feels like home.",
                                                60,
                                                function(){
                                                    typeWriter(
                                                        document.getElementById("line6"),
                                                        "And love feels safe, warm, and forever. ❤️💫",
                                                        60,
                                                        function(){
                                                            typeWriter(
                                                                document.getElementById("line7"),
                                                                "So Never Let me Alone 🥺",
                                                                60,
                                                                function(){
                                                                    setTimeout(function(){
                                                                        nextBtn.style.opacity = "1";
                                                                        nextBtn.style.pointerEvents = "auto";
                                                                    },1000);
                                                                }
                                                            );
                                                        }
                                                    );
                                                }
                                            );
                                        }
                                    );
                                }
                            );
                        }
                    );
                }
            );
        }
    );
}
// Gift fireworks
window.openGift=function(){
const gift=document.querySelector(".page.active .gift");
gift.style.display="none";
createExplosion(document.querySelector(".page.active .fireworks-container"));
flashScreen();
setTimeout(()=>nextPage(),2500);
}

// Realistic explosion
function createExplosion(container){
const colors=["#ff4d6d","#ffd700","#ff69b4","#ffffff","#ff9a00"];

for(let i=0;i<120;i++){
let particle=document.createElement("div");
particle.classList.add("particle");
particle.style.left="50%";
particle.style.top="50%";
particle.style.backgroundColor=colors[Math.floor(Math.random()*colors.length)];

let angle=Math.random()*2*Math.PI;
let distance=Math.random()*250;

particle.style.setProperty("--x",Math.cos(angle)*distance+"px");
particle.style.setProperty("--y",Math.sin(angle)*distance+"px");

container.appendChild(particle);

setTimeout(()=>particle.remove(),1500);
}
}

// Flash effect
function flashScreen(){
let flash=document.createElement("div");
flash.classList.add("flash");
document.body.appendChild(flash);
flash.style.opacity="0.8";
setTimeout(()=>flash.style.opacity="0",200);
setTimeout(()=>flash.remove(),400);
}

// Continuous fireworks on final page
function startFinalFireworks(){
const container=document.querySelector(".page.active .fireworks-container");

setInterval(()=>{
let x=Math.random()*100;
let y=Math.random()*60;
multiBurst(container,x,y);
},800);
}

function multiBurst(container,x,y){
const colors=["#ff4d6d","#ffd700","#ff69b4","#ffffff","#ff9a00"];

for(let i=0;i<60;i++){
let particle=document.createElement("div");
particle.classList.add("particle");
particle.style.left=x+"%";
particle.style.top=y+"%";
particle.style.backgroundColor=colors[Math.floor(Math.random()*colors.length)];

let angle=Math.random()*2*Math.PI;
let distance=Math.random()*200;

particle.style.setProperty("--x",Math.cos(angle)*distance+"px");
particle.style.setProperty("--y",Math.sin(angle)*distance+"px");

container.appendChild(particle);
setTimeout(()=>particle.remove(),1500);
}
}

// --- COUNTDOWN TIMER LOGIC ---

// 👇 CHANGE THIS TO HER BIRTHDAY DATE AND TIME 👇
// Use this exact format: "Month DD, YYYY HH:MM:SS"
const targetDateString = "March 22, 2026 15:55:00"; 

const birthdayDate = new Date(targetDateString).getTime(); 

const timerInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = birthdayDate - now;

    // Stop if the date format is typed incorrectly
    if (isNaN(birthdayDate)) return;

    // If the countdown is still ticking
    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update the numbers on the screen and keep them 2 digits (e.g., "09" instead of "9")
        document.getElementById("days").innerText = days.toString().padStart(2, '0');
        document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
    } 
    // If the countdown hits ZERO!
    else {
        clearInterval(timerInterval); // Stop the clock
        
        // Hide the numbers and show the celebration text
        const countdownEl = document.getElementById("countdown");
        if (countdownEl) countdownEl.style.display = "none";
        
        const textEl = document.getElementById("countdownText");
        if (textEl) {
            textEl.innerHTML = "It's Time! 🎉";
            textEl.style.animation = "glowPulse 2s infinite alternate";
        }
        
        // Unhide the clickable gift box
        const giftBox = document.getElementById("giftBox");
        if (giftBox) giftBox.style.display = "block";
    }
}, 1000);
// ------------------------------

});
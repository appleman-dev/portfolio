
//Theme selector
const colorSelector = document.getElementById("color");
let hue = 120;
colorSelector.addEventListener("input",(e)=>{
    hue=e.target.value;
    document.documentElement.style.setProperty("--primary-bg",`hsl(${hue},35%,5%)`);
    document.documentElement.style.setProperty("--primary-accent",`hsl(${hue-10},75%,45%)`);
})
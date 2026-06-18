const words = [
"NEW RELEASE","PRE-ORDER","BEST SELLER","CONSOLE",
"EXCLUSIVE","LIMITED","PS5","XBOX","SWITCH",
"NEXT GEN","HOT DROP","DIGITAL","PHYSICAL"
];

const layer = document.querySelector(".floating-layer");

function createWord(){
const el = document.createElement("div");
el.className = "floating-word";

el.innerText = words[Math.floor(Math.random() * words.length)];

// 隨機位置
el.style.top = Math.random() * 100 + "%";

// 隨機速度
const duration = 10 + Math.random() * 20;
el.style.animationDuration = duration + "s";

// 隨機大小
el.style.fontSize = (0.8 + Math.random() * 0.8) + "rem";

// 隨機透明度
el.style.opacity = 0.05 + Math.random() * 0.15;

layer.appendChild(el);

// 動畫結束後刪掉
setTimeout(() => {
el.remove();
}, duration * 1000);
}

// 持續生成
setInterval(createWord, 400);
const M = document.getElementById("M")
const A = document.getElementById("A")
const N = document.getElementById("N")
const G = document.getElementById("G")
const O = document.getElementById("O")
const MANGO = document.getElementById("MANGO")

M.addEventListener("click",()=>{
    M.style.display = "none";
    A.style.display = "block";
});

A.addEventListener("click",()=>{
    A.style.display = "none";
    N.style.display = "block";
});

N.addEventListener("click",()=>{
    N.style.display = "none";
    G.style.display = "block";
});

G.addEventListener("click",()=>{
    G.style.display = "none";
    O.style.display = "block";
});
O.addEventListener("click",()=>{
    O.style.display = "none";
    MANGO.style.display = "block";
});


MANGO.addEventListener("click",()=>{
    MANGO.style.display = "none";
    M.style.display = "block";
});
const coin = document.querySelector("#coin");
const button = document.querySelector("#flip");
const statusLabel = document.querySelector("#status");
const golds = document.querySelector("#goldCount");
const silver = document.querySelector("#tailCount");

let goldsCounts = 0;
let silverCounts = 0;

function processResult(result) {
    if (result === 'golds') {
        goldsCounts++;
        golds.innerHTML = goldsCounts;
    } else {
        silverCounts++;
        silver.innerHTML = silverCounts;
    }
    statusLabel.innerText = result.toUpperCase();
}

function flipCoin() {
    const random = Math.random();
    const result = random < 0.5 ? 'golds' : 'silver';

    // Remove previous animation classes
    coin.classList.remove("animate-golds", "animate-silver");

    setTimeout(() => {
        coin.classList.add("animate-" + result);

        setTimeout(() => {
            processResult(result);
        }, 2900);
    }, 100);
}

button.addEventListener("click", flipCoin);

// Opening animation - Pop-up
window.onload = function() {
    setTimeout(function() {
        document.getElementById("popup").style.display = "block";
    }, 1000); // Show the pop-up after 1 second
}

// Login functionality
document.getElementById("loginButton").onclick = function() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}

function login() {
    // Simulate login process (You can add actual validation here)
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("sections").style.display = "block";
}

// Functions to add new items to sections
function addPlayerName() {
    const playerName = prompt("Enter Player Name:");
    if (playerName) {
        const li = document.createElement("li");
        li.textContent = playerName;
        document.getElementById("playerNamesList").appendChild(li);
    }
}

function addPlayerDetail() {
    const playerDetail = prompt("Enter Player Detail:");
    if (playerDetail) {
        const li = document.createElement("li");
        li.textContent = playerDetail;
        document.getElementById("playerDetailsList").appendChild(li);
    }
}

function addBestMoment() {
    const bestMoment = prompt("Enter Best Moment:");
    if (bestMoment) {
        const li = document.createElement("li");
        li.textContent = bestMoment;
        document.getElementById("bestMomentsList").appendChild(li);
    }
}

function addBattleHistory() {
    const battleHistory = prompt("Enter Battle History:");
    if (battleHistory) {
        const li = document.createElement("li");
        li.textContent = battleHistory;
        document.getElementById("battleHistoryList").appendChild(li);
    }
}

function addDocument() {
    const documentName = prompt("Enter Document Name:");
    if (documentName) {
        const li = document.createElement("li");
        li.textContent = documentName;
        document.getElementById("documentsList").appendChild(li);
    }
}

function addExtra() {
    const extraInfo = prompt("Enter Extra Info:");
    if (extraInfo) {
        const li = document.createElement("li");
        li.textContent = extraInfo;
        document.getElementById("extraList").appendChild(li);
    }
}

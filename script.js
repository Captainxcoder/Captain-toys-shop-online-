let users = JSON.parse(localStorage.getItem('users')) || [];
let currentUser = null;

const toys = [
    { name: "स्मार्ट रोबोट", price: 1599, image: "assets/toy1.jpg" },
    { name: "लेगो सिटी सेट", price: 2999, image: "assets/toy2.jpg" },
    { name: "डॉल हाउस", price: 1999, image: "assets/toy3.jpg" }
];

function toggleAuth() {
    document.getElementById('registerBox').classList.toggle('hidden');
    document.getElementById('loginBox').classList.toggle('hidden');
}

function register() {
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;

    if (username && password) {
        const user = { username, password };
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        loginUser(user);
    }
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        loginUser(user);
    } else {
        alert("गलत उपयोगकर्ता नाम या पासवर्ड!");
    }
}

function loginUser(user) {
    currentUser = user;
    document.getElementById('authPage').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
    document.getElementById('welcomeUser').textContent = `नमस्ते ${currentUser.username}!`;
    renderToys();
}

function renderToys() {
    const toysGrid = document.getElementById('toysGrid');
    toysGrid.innerHTML = toys.map(toy => `
        <div class="toy-card">
            <img src="${toy.image}" class="toy-img" alt="${toy.name}">
            <h3>${toy.name}</h3>
            <p>₹${toy.price}</p>
        </div>
    `).join('');
}

function logout() {
    currentUser = null;
    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById('authPage').classList.remove('hidden');
                            }
const toys = [
    { name: "स्मार्ट रोबोट", price: 1599, image: "images/smart-robot.jpg" },
    { name: "लेगो सिटी सेट", price: 2999, image: "images/lego-city.jpg" },
    { name: "डॉल हाउस", price: 1999, image: "images/doll-house.jpg" }
];

function renderToys() {
    const toysGrid = document.getElementById('toysGrid');
    toysGrid.innerHTML = toys.map(toy => `
        <div class="toy-card">
            <img src="${toy.image}" class="toy-img" alt="${toy.name}">
            <div class="toy-info">
                <h3>${toy.name}</h3>
                <div class="price">₹${toy.price}</div>
                <button class="btn"><i class="fas fa-shopping-cart"></i> खरीदें</button>
            </div>
        </div>
    `).join('');
}

renderToys();

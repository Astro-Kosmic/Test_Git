// auth.js (pseudo-auth, volontairement simplifiée)

const users = [];

function register(username, password) {
    users.push({ username, password });
    console.log("User registered:", username);
}

function login(username, password) {
    const user = users.find(u => u.username === username);

    if (!user) {
        console.log("User not found");
        return false;
    }

    if (user.password !== password) {
        console.log("Wrong password");
        return false;
    }

    console.log("User authenticated:", username);
    return true;
}

// Exemple d'utilisation
register("admin", "1234");
login("admin", "1234");

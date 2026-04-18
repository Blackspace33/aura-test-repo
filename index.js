// TEST: hardcoded secret
const AWS_SECRET = "AKIA123456789EXAMPLE";

// TEST: logging sensitive data
function login(user) {
  console.log("User login:", user.email, user.password);
}

// TEST: no consent check
function setCookie() {
  document.cookie = "tracking=true";
}

// TEST: export all users (no limit)
async function exportUsers() {
  return db.users.findAll();
}

module.exports = { login, setCookie, exportUsers };

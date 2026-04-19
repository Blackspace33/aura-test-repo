// TEST: hardcoded secret
const AWS_SECRET = "process.env.AWS_ACCESS_KEY_ID";

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

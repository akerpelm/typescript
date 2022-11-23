"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/login', (req, res) => {
    res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email"/>
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password"/>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  `);
});
const isValidCredential = (email, password) => {
    return email === 'hi@hi.com' && password === 'password';
};
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password && isValidCredential(email, password)) {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send('Invalid email or password');
    }
});

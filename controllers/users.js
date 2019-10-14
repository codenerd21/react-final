const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login,
  match,
  update
};


async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).json({ err: 'bad credentials' });
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({ token });
      } else {
        return res.status(401).json({ err: 'bad credentials' });
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}


async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    res.status(400).json(err);
  }
}

async function match(req, res) {
  const users = await User.find({})
  res.json(users);
}

async function update(req, res) {
  const updateUserResponse = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json(updateUserResponse);
}

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    { user },
    SECRET,
    { expiresIn: '24h' }
  );
}

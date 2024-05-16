const User = require('../models/user');
const { response } = require('express');

const getUsers = async (req, res) => {

  const from = Number(req.query.from) || 0;
  const to = Number(req.query.to) || 10;
  
  const [ users, total ] = await Promise.all([
    User.find()
    .skip(from)
    .limit(to),
    User.countDocuments()
  ]);

  res.json({
    ok: true,
    users,
    total
  });
}

const postUser = async (req, res = response) => { 
  try {
    const user = new User(req.body);
    await user.save();

    res.json({
      ok: true,
      user,
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Error in post create user'
    });
  }
}

const putUser = async (req, res = response) => {

  const uid = req.params.id;

  try {
    const userDB = await User.findById(uid);

    if (!userDB) {
      return res.status(404).json({
        ok: false,
        msg: 'user not found'
      });
    }
    const { ...inputs } = req.body;
    const userUpdated = await User.findByIdAndUpdate(uid, inputs, {new: true});

    
    res.json({
      ok: true,
      userUpdated
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Error in put'
    });
  }
}

const deleteUser = async (req, res) => {
  const uid = req.params.id;

  try {
    const userDB = await User.findById(uid);

    if (!userDB) {
      return res.status(404).json({
        ok: false,
        msg: 'user not found'
      });
    }
   
   await User.findByIdAndDelete(uid);

    
    res.json({
      ok: true,
      msg: 'User delete'
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Error in put'
    });
  }
}

module.exports = {
  getUsers,
  postUser,
  putUser,
  deleteUser,
}

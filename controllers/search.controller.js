const User = require('../models/user');
const { response } = require('express');


const getSearch = async (req, res = response) => {

  const find = req.params.value;
  const regex = new RegExp( find, 'i');
  
  console.log(find)
  const userFound = await User
      .find({ $or: [
        { name: regex },
        { role: regex }
      ]});

  res.json({
    ok: true,
    msg: find,
    userFound
  });
}


module.exports = {
  getSearch,

}

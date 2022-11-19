const User = require("../models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const KEY = "asdfjsdaklf234234";
module.exports = {
  

  login: (req, res) => {
    const { username, password } = req.body;

    User.findOne({ username })
      .then((data) => {
        bcrypt.compare(password, data.password, (err, result) => {
          if (err) {
            res.status(500).json({ message: err });
          } else {
            if (result) {
              
              const token = jwt.sign({ id: data._id, role:data.roles}, KEY);
              res
                .status(200)
                .json({ message: "Login is successfull", token: token });
            } else {
              res.status(403).json({ message: "Login is failed" });
            }
          }
        });
      })
      .catch((err) => {
        res.status(403).json({ message: "Login is failed" });
      });
    },

  register: (req, res) => {
    try {
      const data = req.body
      const saltRounds = 10
      const hash = bcrypt.hashSync(data.password, saltRounds)
      data.password = hash
      const user = new User(data)

      // console.log(user)
      user.save()

      res.json({
        message: "register berhasil",
      })
    } catch (error) {
      res.json({
        message: "failed regis",
      });
    }
  }
}
const User = require('../../model/userModel')


const userController = {

    //POST API
    async create(req, res) {
        // console.log("req", req.body);
        const user = new User({
            firstName: req.body.name,
            // lastName: req.body.lastName,
            email: req.body.email,
            // city: req.body.city,
        })
        user.save().then(result => {
            res.status(200).json({
                success: true,
                
            })
        }).catch(err => {
            console.log(err);
            res.status(500).json({ error: 'An error occurred while creating the user.' });
        })


    },


    // GET API
    async getData(req, res) {
        // console.log("fds", req.body);

        await User.find().then(result => {
            res.json({
                data: result,
            })
        }).catch(err => {
            console.log(err);
        })
    },

    // Update API
    async updateData(req, res) {
        const id = req.params.id;
        const user = {
            firstName: req.body.name,
            // lastName: req.body.lastName,
            email: req.body.email,
            // city: req.body.city,
        };
        const data = await User.findByIdAndUpdate({ _id: id }, user, { new: true });
        res.json({
            success: true,
            data: data
        });
    },

    // Edit API
    async editData(req, res) {
        const id = req.params.id
        User.findOne({ _id: id }).then((resp) => {
            // console.log("resedit", res);
            res.status(200).json({
                success: true,
                data: resp
            })
        }).catch((err) => {
            console.log(err);
            res.status(400).json({ error: err });
        })

    },

    // Delete API
    async deleteData(req, res) {
        const id = req.params.id;
        await User.findOneAndDelete({ _id: id }).then((result) => {
            res.json({
                Message: "Deleted"
            })

        }).catch(err => {
            console.log(err);

        })
    },

    //Register Api

      async register(req, res) {
        await User.findOne({ email: req.body.email }).then((result) => {
          if (result) {
            res.json({
              message: "user exist",
            });
          } else {
            const hashPass = bcrypt.hashSync(req.body.password,saltRounds)
            const user = new User({
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              email: req.body.email,
              city: req.body.city,
              phoneNumber: req.body.phoneNumber,
              password: hashPass,
            });
            user.save().then(ress=>{
                res.json({
                    data:ress,
                    message: "user exist",
                  });
            })
          }
        }).catch
      },


    //login Api
    
    async login(req, res) {
        await User.findOne({ email: req.body.email }).then((resp) => {
            console.log()
            if (!resp) {
                res.status(200).json({
                    // data: ress,
                    success: true,
                    message: "User not exist",
                });
            } else {
                bcrypt.compare(req.body.password, resp.password, function (err, result) {
                    if (result == true) {
                        res.status(200).json({
                            // data: ress,
                            success: true,
                            // message: "User not exist",
                            data: resp
                        });
                    } else {
                        res.status(400).json({
                            // data: ress,
                            success: false,
                            message: "wrong pass",
                        });
                    }
                    // result == true
                })
                // res.json({
                //   data: ress,
                //   message: "user exist",
                // });
            }
        });


    }
}

module.exports = userController
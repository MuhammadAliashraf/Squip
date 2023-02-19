const express = require('express')
const bcrypt = require('bcryptjs')

const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())
const DataBaseuri =
  'mongodb+srv://admin:admin@cluster0.ucps76e.mongodb.net/?retryWrites=true&w=majority'

const squipuser = require('./user')

mongoose.set('strictQuery', true)

mongoose
  .connect(DataBaseuri)
  .then((res) => {
    console.log('DataBase Connected!')
  })
  .catch((err) => {
    console.log('DataBase Not Connected!')
  })

// Signup USer Api With Some Features like hasing, And error on Duplicate Email
app.post('/api/signup', (request, respones) => {
  console.log(request.body)
  const { user_name, email, password, } = request.body
  if (!user_name || !email || !password) {
    respones.json({
      message: 'Required Fileds Are Missing!',
      status: false,
    })
    return
  }
  const HashPassword = bcrypt.hashSync(password, 10)
  const Objectsend = {
    user_name: user_name,
    email: email,
    password: HashPassword,
  }
  squipuser.findOne({ email: email }, (error, Userdata) => {
    if (error) {
      respones.json({
        message: `Internal Errro`,
        status: false,
      })
    } else {
      if (Userdata) {
        respones.json({
          message: `Email Already Exist!`,
          status: false,
        })
      } else {
        squipuser.create(Objectsend, (error, Userdata) => {
          if (error) {
            respones.json({
              message: `Internal Error${error}`,
              status: false,
            })
          } else {
            respones.send({
              message: 'USer Signup Done!',
              status: true,
              Userdata,
            })
          }
        })
      }
    }
  })
})

// login Api 
app.post('/api/login', (request, respones) => {
  const { email, password } = request.body
  if ((!email, !password)) {
    respones.json({
      message: 'Required Fields Are missing!',
      status: false,
    })
    return
  }

  squipuser.findOne({ email: email }, (error, Userdata) => {
    if (error) {
      message.json({
        message: 'Internal Error!',
        Status: false,
      })
    } else {
      if (!Userdata) {
        respones.json({
          message: 'User Does Not Exits',
          Status: false,
        })
      } else {
        const passwordmatch = bcrypt.compareSync(password, Userdata.password)
        //console.log(passwordmatch,"passwordmatch")
        if (passwordmatch) {
          respones.json({
            message: 'User Login Successfully!',
            Status: true,
            Userdata,
          })
        } else {
          respones.json({
            message: 'Invalid Details',
            Status: false,
          })
        }
      }
    }
  })
})

// Get by User Full, using Key ,using ID
app.get('/api/squipuser/:userid', (request, respones) => {
  const { userid } = request.params
  console.log(userid)
  // find = jo ha ak jesi details waly sb user ly ata ha
  // findone = jo ha ouln first user ly kar ata ha
  // Gettinf Specific data using Key
  squipuser.findById(userid, (error, data) => {
    if (error) {
      respones.json({
        message: `internal error${err}`,
        status: false,
      })
    } else {
      console.log('data', data)
      respones.json({
        message: 'User Successfully GET',
        data: data,
        status: true,
      })
    }
  })

  // Getting Full Data From DataBase Without passing any key
  // usermodel.find({}, (error, data) => {
  //   if (error) {
  //     respones.json({
  //       message: `internal error${err}`,
  //       status: false,
  //     })
  //   } else {
  //     console.log('data', data)
  //     respones.json({
  //       message: 'User Successfully GET',
  //       data: data,
  //       status: true,
  //     })
  //   }
  // })
})

// User Created Api
app.post('/api/squipuser', (request, respones) => {
  const { user_name, age, email, password } = request.body || {}

  if (!user_name || !age || !email || !password) {
    respones.send({
      message: 'Fields Are Missing!',
      status: false,
    })
  }
  const Objectsend = {
    user_name: user_name,
    age: age,
    email: email,
    password: password,
  }

  usermodel.create(Objectsend, (err, data) => {
    if (err) {
      respones.json({
        message: `internal error${err}`,
        status: false,
      })
    } else {
      respones.json({
        message: 'User Successfully Send',
        data: data,
        status: true,
      })
    }
  })
})
app.listen(PORT, () => {
  console.log(`Server is Running${PORT}`)
})

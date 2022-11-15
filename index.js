const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

const connectDB = require('./config/dbConfig')
const apiRouter = require('./routes/apiRoutes')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});


// For all api routes
app.use('/api', apiRouter);




// const listener = app.listen(process.env.PORT || 3000, () => {
//   console.log('Your app is listening on port ' + listener.address().port)
// })

//connect database and listen to port
const connectAndListen = async () => {
  try {
      await connectDB();
      const listener = app.listen(process.env.PORT || 3000, () => {
        console.log('Your app is listening on port ' + listener.address().port)
      })
        } catch (error) {
      console.log(error.message);        
  }
}


connectAndListen();


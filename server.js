const express = require('express')
const cors = require('cors')
let router = express.Router();

// Require Router Handlers
const data = require('./api/routes/data.route')

const app = express()

// Init middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

// Direct to Route Handlers
app.use('/', data)

// if(process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'))
//     app.get('*', (req,res) => {
//         res.sendFile(path.resolve(__dirname,'client','build','index.html'))
//     })
// }
module.exports = router;
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server up and running on ${port} 👍`))
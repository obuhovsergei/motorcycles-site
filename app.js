const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

app.use(express.json({ extended:true }))

app.use('/api/auth', require('./routes/auth.routes'))   // Connecting of routes auth
app.use('/api/link', require('./routes/link.routs'))    // Connecting of routes link
app.use('/t', require('./routes/redirect.routes'))

const port = config.get('port') || 5000

async function start() {
    try{
        await mongoose.connect(config.get('mongoUri'), {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         useCreateIndex: true
        })
        app.listen(port, () => console.log(`Start app on ${port}`))
    } catch (e) {
        console.log('Server error', e.message)
        process.exit(1)
    }
}

start()

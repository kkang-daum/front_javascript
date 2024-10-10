const express = require('express')
const path = require('path')
const cors = require('cors')

const upload = require('./upload')
const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/upload', upload)


app.listen(8000, () => {
  console.log(8000,'번 포트에서 대기중...')
})
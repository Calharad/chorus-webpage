import app from './App'

const port = Number(process.env.PORT || 5000)


app.listen(port, '127.0.0.1' , (err) => {
  if (err) {
    return console.log(err)
  } 

  return console.log(`server is listening on ${port}`)
})
// 1. IMPORTACIONES

const express 		= require("express")
const app			= express()


require("dotenv").config()

const hbs			= require("hbs")

const connectDB		= require("./config/db")





// 2. MIDDLEWERS

app.use(express.static("public"))

app.set("views", __dirname + "/views")
app.set("view engine", "hbs")

hbs.registerPartials(__dirname + "/views/partials")


// Para transmitir los datos del formulario a la base de datos
app.use(express.urlencoded({ extended: true }))


connectDB()


// 3. RUTAS 


app.use("/users", require("./routes/users"))

app.use("/", require("./routes/index"))






// 4. SERVIDOR


app.listen(process.env.PORT, () => {
	console.log(`Corriendo en el puerto ${process.env.PORT}`)
})



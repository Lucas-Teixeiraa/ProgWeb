const express = require("express");
const logger = require("morgan");
const handlebars = require("express-handlebars");
const sass = require("node-sass-middleware");
const dotenv = require("dotenv");
const router = require("../GAME/config/router");

dotenv.config();


const app = express();



// Configura a engine Handlebars como view engine
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/app/views`)


app.use(sass({
	src: `${__dirname}/public/scss`,
	dest: `${__dirname}/public/css`,
	outputStyle: 'compressed',
	prefix: '/css'

}));

// Use o middleware Morgan para gerar logs
app.use(logger("combined"));

app.use(express.urlencoded({extended: false}));

// Usa as rotas importadas
app.use(router);


app.use("/img", express.static(`${__dirname}/public/img`) );
app.use("/css", express.static(`${__dirname}/public/css`) );
app.use("/webfonts", express.static(`${__dirname}/node_modules/@fortawesome/fontawesome-free/webfonts`));

app.use('/js', [
	express.static(`${__dirname}/node_modules/jquery/dist`),
	express.static(`${__dirname}/node_modules/popper.js/dist/umd`),
	express.static(`${__dirname}/node_modules/bootstrap/dist/js`),
	express.static(`${__dirname}/public/js`)
]);
// Inicia o servidor na porta 3030
app.listen(process.env.PORT, () => {
  console.log("Server listening on port 3030");
});

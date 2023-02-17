function sobre(req, res){
	res.render("main/sobre");
}

function ui(req, res){
	res.render("main/ui");
}

function game(req, res){
	res.render("main/jogo");
}

function index(req, res){
	res.render("main/index");
}

module.exports = {sobre,ui,game,index}
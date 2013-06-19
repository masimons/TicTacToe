var game = new TicTacToe({piece: "X"}, {piece: "O"})

function render(game) {
	_.each(game.board, function(row, rowIdx) {
		_.each(row, function(item, colIdx) {
			if (item === "X") {
				$("#" + String(rowIdx) + String(colIdx))
					.css("background-color", 'blue')
					.css("text-align", "center")
					.text("X")
			}
			else if (item === "O") {
				$("#" + String(rowIdx) + String(colIdx))
					.css("background-color", 'red')
					.css("text-align", "center")
					.text("O")
			}
		})
	})
	$("#status").text("It is " + game.turn.piece + "'s turn")
}

$(document).ready(function(){
	render(game);
	$("td").click(function(event){
		var coords = _.map((event.target.id).split(''), function(el) {
			return parseInt(el);
		});
		if (game.validMove(coords)) {
			game.makeMove(coords);
		}
		render(game);
		if (game.won()) {
			$("#status").text(game.turn.piece + " Won!");
			$("td").unbind("click");
		}
	})
})

function TicTacToe(player1, player2) {
	this.board = [["_", "_", "_"],
								["_", "_", "_"],
								["_", "_", "_"]
								];
	this.player1 = player1;
	this.player2 = player2;

	this.turn = player1;

}

TicTacToe.prototype.validMove = function(coords) {
	return (this.board[coords[0]][coords[1]] === "_");
}

TicTacToe.prototype.swapTurn = function() {
	(this.turn === this.player1) ? (this.turn = this.player2) : (this.turn = this.player1)
}

TicTacToe.prototype.makeMove = function(coords){
	this.board[coords[0]][coords[1]] = this.turn.piece;
	if (!this.won()) this.swapTurn();
}

TicTacToe.prototype.rows = function() {
	return this.board;
}

TicTacToe.prototype.won = function() {
	return (
					this.winningCombo(this.rows()) ||
					this.winningCombo(this.columns()) ||
					this.winningCombo(this.diagonals())
	);
}

TicTacToe.prototype.columns = function() {
	// may be destructive
	var cols = [[], [], []]
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++){
			cols[j][i] = this.board[i][j];
		}
	}
	return cols;
}

TicTacToe.prototype.diagonals = function() {
	var upDiag = [];
	var downDiag = [];
	for (var i = 0; i < 3; i++) {
			upDiag[i] = this.board[i][2 - i];
			downDiag[i] = this.board[i][i];
	}
	return [upDiag, downDiag];
}

TicTacToe.prototype.winningCombo = function(rows) {
	return _.any(rows, function(row) {
		return (_.isEqual(row, ["X", "X", "X"]) || _.isEqual(row, ["O", "O", "O"]));
	});
}


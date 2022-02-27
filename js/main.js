document.addEventListener('DOMContentLoaded', () => {
	createSquares();

	function createSquares() {
		const gameBoard = document.querySelector('board');
		for (let index = 0; index < 6 * 5; index++) {
			let square = document.createElement("div");
			square.classList.add('square');
			square.setAttribute('id', index);
			gameBoard.appendChild(square);

		}
	}







});
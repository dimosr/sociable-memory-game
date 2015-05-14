$(document).ready(function() {

	var colorIDs = ['color-1', 'color-2', 'color-3', 'color-4'];
	var colorsNumber = 4;
	var game = new Game(0, 50, 0, 200, 8, 500, "colors", "next-color", colorsNumber, colorIDs);

    $('.colors').click(function(){
		$(this).animate({"width": "-=" + game.clickEffectWidth + "px"}, game.clickEffectInterval ).animate({"width": "+=" + game.clickEffectWidth + "px"}, game.clickEffectInterval );
		var id = $(this).attr('id');
		for(i=0; i<game.colorObjects.length; i++){
			if(game.colorObjects[i].id == id){
				var colorNumber = i;
			}
		}
		game.handleNextMove(colorNumber);
	});


	game.proceedToNextLevel();
	/*while(game.currentLevel < game.maximumLevels && game.hasLost == false){

		while(game.movesMade < game.currentLevel && game.hasLost == false){		//waiting for user input

			game.proceedToNextMove();
		}

		//NEXT LEVEL - showing next color
		if(game.hasLost){
			alert('You lost!');
		}
		game.proceedToNextLevel();
	}*/

});



/* IE fix */

if (!Array.prototype.indexOf) {

	Array.prototype.indexOf = function(obj, start) {
		for (var i = (start || 0), j = this.length; i < j; i++) {
			if (this[i] === obj) { return i; }
		}
		return -1;
	}

}

/* ------ */
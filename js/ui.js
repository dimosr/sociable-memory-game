$(document).ready(function() {

	var game = new Game(0, 50, 0, 200, 8, 500, "colors", "next-color");

    $('.colors').click(function(){
		$(this).animate({"width": "-=" + game.clickEffectWidth + "px"}, game.clickEffectInterval ).animate({"width": "+=" + game.clickEffectWidth + "px"}, game.clickEffectInterval );
	});

	while(game.currentLevel < game.maximumLevels ){

		while(game.movesMade < game.currentLevel){		//waiting for user input

		}
		
		//NEXT LEVEL - showing next color

	}

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
function Game(currentLevel, maxLevels, movesMade, clickInterval, clickWidth, flashInterval, colorContainerClass, nextClass, colorsNumber,colorIDs){
	this.hasLost = false;
	this.currentLevel = currentLevel;
	this.maximumLevels = maxLevels;
	this.movesMade = movesMade;
	this.clickEffectInterval = clickInterval;
	this.clickEffectWidth = clickWidth;
	this.flashEffectInterval = flashInterval;
	this.colorContainerClass = colorContainerClass;
	this.nextClass = nextClass;
	this.colorsSequence = new Array();
	this.movesSequence = new Array();
	this.colorObjects = new Array();
	for(i=0; i<colorsNumber; i++){
		var temp = {'id': colorIDs[i]};
		this.colorObjects[i] = temp;
	}
}

Game.prototype.upgradeLevel = function(){
	this.currentLevel++;
	$('#star').html(this.currentLevel);
}

Game.prototype.resetMoves = function(){
	this.movesMade=0;
	$('#moves-value').html(this.currentLevel - this.movesMade);
	this.movesSequence = new Array();
}

Game.prototype.proceedToNextLevel = function(){
	this.upgradeLevel();
	this.resetMoves();
	var nextColor = this.getRandomColor();
	this.colorsSequence.push(nextColor);
	this.flashElement(nextColor);
}

Game.prototype.handleNextMove = function(selectedColorNumber){
	this.movesMade++;
	console.log('moves : ' + this.movesMade);
	console.log('selected : ' + selectedColorNumber);
	console.log('right : ' + this.colorsSequence[this.movesMade-1]);
	if(selectedColorNumber != this.colorsSequence[this.movesMade-1]){
		alert('You lost');
		$('.colors').unbind('click');
	}
	else{
		if(this.movesMade == this.currentLevel){
			this.proceedToNextLevel();
		}
		else{
			this.movesSequence[this.movesMade-1];
			$('#moves-value').html(this.currentLevel - this.movesMade);
		}
	}
}

Game.prototype.getRandomColor = function(){
	return Math.round(Math.random()*(this.colorObjects.length-1));
}

Game.prototype.flashElement = function(elementNumber){
	var elementID = this.colorObjects[elementNumber].id;
	$('.' + this.colorContainerClass + ':not(#' + elementID + ')').fadeOut(this.flashEffectInterval).fadeIn(this.flashEffectInterval);
	$('#' + this.nextClass).css('display','block').hide().fadeIn(this.flashEffectInterval).fadeOut(this.flashEffectInterval);
}
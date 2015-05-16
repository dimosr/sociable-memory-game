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
	this.startMoment = (new Date()).getTime();
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
	this.flashSequence(this.colorsSequence);
}

Game.prototype.handleNextMove = function(selectedColorNumber){
	this.movesMade++;
	console.log('moves : ' + this.movesMade);
	console.log('selected : ' + selectedColorNumber);
	console.log('right : ' + this.colorsSequence[this.movesMade-1]);
	if(selectedColorNumber != this.colorsSequence[this.movesMade-1]){
		this.end(0);
	}
	else{
		if(this.movesMade == this.currentLevel){
			if(this.currentLevel == this.maximumLevels){
				this.end(1);
			}
			else{
				var that = this;
				setTimeout(function(){that.proceedToNextLevel();}, that.clickEffectInterval*5);
			}
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

Game.prototype.flashPreviousElement = function(elementNumber){
	var that = this;
	var elementID = this.colorObjects[elementNumber].id;
	$('.' + this.colorContainerClass + ':not(#' + elementID + ')').fadeTo(this.flashEffectInterval, 0).delay(this.flashEffectInterval*4).fadeTo(this.flashEffectInterval, 1);
}

Game.prototype.flashElement = function(elementNumber){
	var elementID = this.colorObjects[elementNumber].id;
	$('#' + elementID).fadeTo(this.flashEffectInterval, 1).fadeTo(this.flashEffectInterval, 0);
}

Game.prototype.flashSequence = function(sequence){
	var that = this;
	$('.' + this.colorContainerClass).fadeTo(this.flashEffectInterval, 0);
	$('#' + this.nextClass).fadeTo(this.flashEffectInterval, 1);
	if(sequence != null){
		for(i=0; i<sequence.length; i++){
			var colourNumber = sequence[i];
			(function(number){
				setTimeout(function(){that.flashElement(number)},that.flashEffectInterval*4*(i+1));
			})(colourNumber);
		}
	}
	setTimeout(function(){$('.' + that.colorContainerClass).fadeTo(that.flashEffectInterval, 1)}, that.flashEffectInterval*4*(sequence.length+1));
	setTimeout(function(){$('#' + that.nextClass).fadeTo(that.flashEffectInterval, 0)}, that.flashEffectInterval*4*(sequence.length+1));
}

Game.prototype.end = function(gameResult){
	var end = (new Date()).getTime();
	var secondsPlayed = Math.floor((end-this.startMoment)/1000);
	if(gameResult == 0){
		alert("You lost ! Seconds played : " + secondsPlayed + ", Level reached: " + this.currentLevel);
	}
	else if(gameResult == 1){
		alert("You won ! Seconds played : " + secondsPlayed + ", Level reached: " + (this.maximumLevels + 1));
	}
	$('.colors').unbind('click');
	$('#play').show();
}
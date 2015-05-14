function Game(currentLevel, maxLevels, movesMade, clickInterval, clickWidth, flashInterval, colorsClass, nextClass, colorClasses){
	this.currentLevel = currentLevel;
	this.maximumLevels = maxLevels;
	this.movesMade = movesMade;
	this.clickEffectInterval = clickInterval;
	this.clickEffectWidth = clickWidth;
	this.flashEffectInterval = flashInterval;
	this.colorsClass = colorsClass;
	this.nextClass = nextClass;
}

Game.prototype.flashElement = function(elementID){
	$('.' + this.colorsClass + ':not(#' + elementID + ')').fadeOut(this.flashEffectInterval).fadeIn(this.flashEffectInterval);
	$('#' + this.nextClass).css('display','block').hide().fadeIn(this.flashEffectInterval).fadeOut(this.flashEffectInterval);
}
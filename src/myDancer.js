var makeMyDancer = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer"></span>');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  
  // this.top = top
  // this.left = left
  // this.timeBetweenSteps = timeBetweenSteps
  //var oldStep = ;
  // console.log(this.oldStep)



  //return this.blinkyDancer;
};

makeBlinkyDancer.prototype = Object.create(MakeDancer.prototype)
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
makeBlinkyDancer.prototype.oldStep = MakeDancer.prototype.step;

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  //oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.oldStep();
  this.$node.toggle();
};
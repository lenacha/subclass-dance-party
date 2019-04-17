var otherDancer = function(top, left, timeBetweenSteps) {
    //var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);
    MakeDancer.call(this, top, left, timeBetweenSteps);
    var imgUrl = "https://www.freeiconspng.com/uploads/pokeball-icon-20.jpg";
    this.$node = $(`<img class="myDancer1" src ="${imgUrl}" width="10%" height="10%" name="image_name">`);
    // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
    // so we must keep a copy of the old version of this function
  
    this.oldStep = MakeDancer.prototype.step
    this.setPosition(top, left);
    this.step();
    
    // this.top = top
    // this.left = left
    // this.timeBetweenSteps = timeBetweenSteps
    //var oldStep = ;
    // console.log(this.oldStep)
    this.dirX = 'right';
    this.dirY = 'down';
    this.timeBetweenSteps = 10;
    
  
    //return this.blinkyDancer;
  };
 


  otherDancer.prototype = Object.create(MakeDancer.prototype);
  otherDancer.prototype.constructor = otherDancer;
  otherDancer.prototype.oldStep = MakeDancer.prototype.step;
  
  otherDancer.prototype.step = function() {
    
    this.oldStep();
    //this.$node.toggle();

    if(this.left < 0) {
      this.dirX = 'right'
    } else if (this.left > window.innerWidth) {
      this.dirX = 'left'
    }
    if(this.top < 0) {
      this.dirY = 'down'
    } else if(this.top > window.innerHeight) {
      this.dirY = 'up'
    }

    if(this.dirX === 'right') {
      this.left += 3     
    } else if (this.dirX === 'left') {
      this.left -= 3
    }
    if(this.dirY === 'down') {
      this.top += 3
    } else if (this.dirY === 'up') {
      this.top -=3
    }
    this.setPosition(this.top, this.left)
  };
  
  // .myDancer{
  //   position:absolute;
  //   transform: rotate(100);
  // }

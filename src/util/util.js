
  var startx, starty;
//字符串变成数组
function convert2Array(str) {
    console.log(str ? str.split(',') : [])
    return str ? str.split(',') : [];
}

function convert2Arrays(str) {
    
    return JSON.parse(str)
}
/**
 * touchstart callback
 * 
 * @param {any} event 
 */

function touchStart (e) {
    startx = e.touches[0].pageX;
    starty = e.touches[0].pageY;
  }
  
  /**
   * touchmove callback
   * 
   * @param {any} event 
   */
  
  function touchMove (event) {
    // event.preventDefault();
    this.endX = event.targetTouches[0].pageX;
  }
  /**
   * touchend callback
   * 
   * @param {any} event 
   */
  function touchEnd (e) {
    
    var endx, endy;
        endx = e.changedTouches[0].pageX;
        endy = e.changedTouches[0].pageY;
        var direction = getDirection(startx, starty, endx, endy);
        switch (direction) {
            case 0:
                
                break;
            case 1:
               
                break;
            case 2:
              
                break;
            case 3:
                this.currents++;
                this.update(this.currents)
                break;
            case 4:
                this.currents--
                ;
                this.update(this.currents)
                break;
            default:
 
  }
}
  

  //获得角度
  function getAngle(angx, angy) {
      return Math.atan2(angy, angx) * 180 / Math.PI;
  };

  //根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
  function getDirection(startx, starty, endx, endy) {
      var angx = endx - startx;
      var angy = endy - starty;
      var result = 0;

      //如果滑动距离太短
      if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
          return result;
      }

      var angle = getAngle(angx, angy);
      if (angle >= -135 && angle <= -45) {
          result = 1;
      } else if (angle > 45 && angle < 135) {
          result = 2;
      } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
          result = 3;
      } else if (angle >= -45 && angle <= 45) {
          result = 4;
      }

      return result;
  }


export {
    convert2Array,
    convert2Arrays,
    touchStart,
    touchMove,
    touchEnd
}

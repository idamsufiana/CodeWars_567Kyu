function twoArePositive(a, b, c) {
  
    var arr = [a, b, c];
    var num = 0
    for(var i=0; i<arr.length; i++){
      if(arr[i]>0) num ++;
    }
    if(num==2) return true;
    return false;
  }
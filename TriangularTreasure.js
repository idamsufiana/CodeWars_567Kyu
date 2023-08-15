function triangular( n ) {
    let output = [];
    if (n) { 
    for (let i=0; i<=n; i++) {
      output.push(i);
  }
  } else {
    return 0;
  }
   return output.reduce((sum, current) => sum + current, 0);
  }
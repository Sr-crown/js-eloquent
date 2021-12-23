let control1 = [[1,2,3,4],[5,6,7,8],[0,3,4,6]];

const aplanar = (arra) =>{
  return arra.reduce((a,b)=>{
    return a.concat(b)});
}

console.log(aplanar(control1));

function similar(A,B){
  let sum,SA,SB,result
  sum=0
  SA=0
  SB=0
  for(let i=0;i<A.length;i++){
    sum += A[i] * B[i]
    SA+=Math.pow(A[i],2)
    SB+=Math.pow(B[i],2)
  }
  result=sum/((Math.sqrt(SA))*(Math.sqrt(SB)))
  return result
}
r=similar([1,2,3],[1,2,4])
console.log(r)




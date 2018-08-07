
function similar(A,B){
  let sum,SA,SB
  sum=0
  SA=0
  SB=0
  for(let i=0;i<A.length;i++){
    sum += A[i] * B[i]
    SA+=Math.pow(A[i],2)
    SB+=Math.pow(B[i],2)
  }
  console.log("sum=",sum)
  console.log("SA=",SA)
  console.log("SB=",SB)
  let result=sum/(Math.sqrt(SA))*(Math.sqrt(SB))
  return result
}

s1=[1,2,3]
s2=[1,2,5]
r=similar(s1,s2)

console.log(r)

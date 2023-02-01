let ch='1 (555)-234-1234';
let num="0123456789";
let chek=" ()-"
let s=0;
let r=1;
let chekking="true"
function telephoneCheck(ch){
for (i=0;i<ch.length;i++){
    if (num.includes(ch[i])){
      s++
    }
    if (num.includes(ch[i])==false && chek.includes(ch[i])== false){
        chekking=false
    }
}
if ((s>10)||(s==10 && ch[0]!='1')|| (chekking==false)){
    return (false)
}
if (s==10){
  if ((ch[r]!=" ")&&(num.includes(ch[r])==false)){
    return(false)
  }
  if (ch[r]==" "){
    r++;
  }}
  if ((ch.indexof('(')!=-1)||(ch.indexof('(')!=r)){
    return(false)
  }
  if (ch.indexof('(')==r){
    if (ch.indexof(')')!=r+4){
        return(false)
    }
    r++
  }
  if (num.includes(ch[r])==false ||num.includes(ch[r+1])==false||num.includes(ch[r+2])==false  ){
    return(false)
}
r=r+3;
if (ch[r]==")"){r++}
if (ch[r]==" "||ch[r]=="-"){
    r++}
    return true}
//I did not understand the second task  

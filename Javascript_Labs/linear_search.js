// This is an example of Linear search
var num = 5;
var arr = [1,2,3,4,6,7,8];
var found = false;
for(var i=0; i<arr.length; i++){
  if(arr[i]==num){
    console.log("Found");
    found = true;
  }
}
if (found == false){
 console.log("Not Found");
}
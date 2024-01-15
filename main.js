document.write("76. to create an array by taking the first and last elements from a given array of integers. The length must be larger than or equal to 1"+"<br>");
function test76(arr){
    var x=[];
    x.push(arr[0],arr[arr.length-1]);
    return x;
}
document.write("The array :[1,2,3,4], ans :"+test76([1,2,3,4])+"<br><br>");
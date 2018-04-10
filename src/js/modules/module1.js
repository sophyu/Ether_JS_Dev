require("babel-core/register");
require("babel-polyfill");
function getPromise(isSucc){
    return new Promise(function(resolve,reject){
        if(isSucc){
            setTimeout(()=> {
                resolve("successful!!")
            },200);
        }else{
            setTimeout(()=>{
                reject("Error!!")
            },500);
        }
    });
}
async function foo() {
    var s = await bar();
    console.log(s);
  }
  
  function bar() {
    return "bar";
  }
export {getPromise,foo}
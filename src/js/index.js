import {getPromise,foo} from './modules/module1'

getPromise(true).then(
    function(succValue){
        console.log(succValue);
},function(failValue){
    console.log(failValue);
});
//async|
foo();

function receivesAFunction(callback){
    callback();

}

function returnsANamedFunction(){
    const sayHello = () => "Hello!";

    return sayHello;
}

function returnsAnAnonymousFunction(){

    return function () {
        console.log(5+9);
    }
}
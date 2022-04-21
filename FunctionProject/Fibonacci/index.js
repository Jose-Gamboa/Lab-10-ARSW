var bigInt = require("big-integer");
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    //Diccionario para guardar los datos encontrados
    var prev_values = {};
    let nth = req.body.nth
    let nth_1 = bigInt.one;
    let nth_2 = bigInt.zero;
    let answer = bigInt.zero;
    
    //Casos base
    prev_values[0] = nth_2;
    prev_values[1] = nth_1;
      
    

    function fibonacci(n) {
        if (n < 0)
            throw 'must be greater than 0'
        else if (n in prev_values) return prev_values[n];
        return prev_values[n] = fibonacci(n-1) + fibonacci(n-2);
    };

    answer = fibonacci(nth);

    context.res = {
        body: answer.toString()
    };
}
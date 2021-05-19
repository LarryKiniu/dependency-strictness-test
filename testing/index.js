// Let's see if we can get the path to a phantom dependency (transitive/phantom dependency)
let encodeUrl;
try{
    encodeUrl = require.resolve('encodeurl');
} catch (e) {
    encodeUrl = "Cannot find module 'encodeurl'";
}

// Let's see if we can get the path to a declared dependency (in package.json)
let express;
try{
    express = require.resolve('express');
} catch (e) {
    express = "Cannot find module 'express'";
}

console.log('encodingUrl -> ',encodeUrl);
console.log('express -> ',express);

/**
 * This tests the strictness of midgard-yarn-strict vs yarn
 */

// After testing `yarn install` - clean the node_modules folder using `npx rimraf ./**/node_modules`
// After testing `npx midgard-yarn-strict` - clean the node_modules folder using `npx rimraf ./**/node_modules` and the .store folder using `npx rimraf ./**/.store`

/**
 * After installing dependencies with `yarn install`
 * The folder structure is:
 * -------------------------------------------------------------------
 * node_modules
 *    |_______ express
 *    |_______ encodeurl
 * testing
 *    |_______ index.js
 *    |_______ package.json
 * package.json
 * yarn.lock
 * -------------------------------------------------------------------
 * The total size on disk of the project is: 2.6MB
 * Install time is: 0.33s
 * The result of running `node testing/index.js` is:
 * encodingUrl -> <project-path>/strictness-test/node_modules/encodeurl/index.js
 * express -> <project-path>/strictness-test/node_modules/express/index.js
 */

/**
 * After installing dependencies with `npx midgard-yarn-strict`
 * The folder structure is:
 * -------------------------------------------------------------------
 * .store
 *    |_______0
 *            .
 *            |_____ node_modules
 *            |_____ package.json
 *            .
 *            .
 *            53
 * node_modules
 *    |_______ strictness-test -> ../../strictness-test
 * testing
 *    |_______ index.js
 *    |_______ package.json
 * package.json
 * yarn.lock
 * -------------------------------------------------------------------
 * The total size on disk of the project is: 2.6MB
 * Install time is: 0.34s
 * The result of running `node testing/index.js` is:
 *   encodingUrl ->  Cannot find module 'encodeurl'
 *   express -> <project-path>/strictness-test/.store/15/index.js
 */

// Let's see if we can get the path to a phantom dependency (transitive dependency)
let encodeUrl
try{
    encodeUrl = require.resolve('encodeurl');
} catch (e) {
    encodeUrl = "Cannot find module 'encodeurl'";
}

// Let's see if we can get the path to a declared dependency (in package.json)
let express = require.resolve('express');

// By installing dependencies using `yarn install`we get a folder structure that looks like:
/**

 */

console.log('encodingUrl -> ',encodeUrl)
console.log('express -> ',express)

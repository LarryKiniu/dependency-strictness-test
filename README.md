# Testing dependency strictness
 This project the strictness of installing dependencies using `midgard-yarn-strict` vs `yarn`  
 By strictness I mean if a workspace can use transitive dependencies/phantom dependencies  
>**To test with yarn, run `yarn install`**  
>**To test with midgard-yarn-strict, run `npx midgard-yarn-strict`**  
 
# Using `yarn`  
> After testing `yarn install` - clean the node_modules folder using `npx rimraf ./**/node_modules`  
 After installing dependencies with `yarn install`
 The folder structure is:
 -------------------------------------------------------------------
      node_modules  
         |_______ express  
         |_______ encodeurl  
      testing  
         |_______ index.js  
         |_______ package.json  
      package.json
      yarn.lock
 -------------------------------------------------------------------
 The total size on disk of the project is: 2.6MB  
 Install time is: 0.33s  
 The result of running `node testing/index.js` is:  
   >`encodingUrl -> <project-path>/strictness-test/node_modules/encodeurl/index.js`   
   >`express -> <project-path>/strictness-test/node_modules/express/index.js`  
 
# Using `midgard-yarn-strict`
> After testing `npx midgard-yarn-strict` - clean the node_modules folder using `npx rimraf ./**/node_modules` and the .store folder using `npx rimraf ./**/.store`  
After installing dependencies with `npx midgard-yarn-strict`
The folder structure is:
-------------------------------------------------------------------
      .store
         |__0____
            .    |
            .    |_____ node_modules
            .    |_____ package.json
            .
            .
            53
      node_modules
         |_______ strictness-test -> ../../strictness-test
      testing
          |_______ index.js
          |_______ package.json
      package.json
      yarn.lock
-------------------------------------------------------------------
The total size on disk of the project is: **2.6MB**  
Install time is: **0.34s**  
The result of running `node testing/index.js` is:  
  >`encodingUrl ->  Cannot find module 'encodeurl'`  
  >`express -> <project-path>/strictness-test/.store/15/index.js`

# Why does this happens even though both dependencies are present every time?  
```console
$ git clone git@github.com:chrisvanpatten/wp-scripts-unit-test-case.git
$ cd wp-scripts-unit-test-case
$ nvm use
$ npm install
$ npm run test
```

```
 FAIL  src/index.test.js
  ● Test suite failed to run

    TypeError: Cannot read property 'AsyncModeProvider' of undefined

       6 |   const module = jest.requireActual("@wordpress/data");
       7 |
    >  8 |   return {
         |   ^
       9 |     ...module,
      10 |     useSelect: jest.fn().mockReturnValue({}),
      11 |   };

      at Object.get [as AsyncModeProvider] (node_modules/@wordpress/data/build/index.js:11:31)
      at src/index.test.js:8:3
```

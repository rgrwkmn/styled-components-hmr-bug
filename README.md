```
$ yarn install
$ yarn start
$ open http://localhost:8080
```

Open `App.js`, modify the file, and save it. This should trigger the hot module reload and show this error in the console:

```
React-hot-loader: fatal error caused by  ƒ StyledComponent() {
        classCallCheck(this, StyledComponent);
        return possibleConstructorReturn(this, _ParentComponent.apply(this, arguments));
      }  - no instrumentation found.  Please require react-hot-loader before React. More in troubleshooting.
```

HMR continues to work, but in my larger project HMR does not work after this error occurs.

Remove `StyledDiv` from the `App.js` render function, refresh the browser, modify the file, and save it again. The error should not be shown in the console this time.

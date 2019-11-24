# Dev Notes

## Figma
https://www.figma.com/file/TFCFCztFEDnyCpY2Bxushp/Kartuli?node-id=0%3A1

## Color Tools
- https://paletton.com
- https://color.adobe.com
-
- https://mycolor.space

## React routing
- https://reacttraining.com/react-router/web/guides/quick-start

```
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}


export const Lesson = (props) => {
 let match = useRouteMatch();

  return (
    <LessonWrapper>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </LessonWrapper>
  )
}
```

## Jest
- https://jestjs.io/docs/en/getting-started
- https://jestjs.io/docs/en/api
- https://jestjs.io/docs/en/expect


# ignoring files
See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

## PWA
- https://medium.com/@toricpope/transform-a-react-app-into-a-progressive-web-app-pwa-dea336bd96e6
- https://medium.com/better-programming/build-a-realtime-pwa-with-react-99e7b0fd3270
- https://blog.bitsrc.io/how-to-build-a-react-progressive-web-application-pwa-b5b897df2f0a

## register
./src/index.js
`serviceWorker.unregister();`
If you want your app to work offline and load faster, you can change
unregister() to register() below. Note this comes with some pitfalls.
Learn more about service workers: https://bit.ly/CRA-PWA

## Typescript
- tsconfig.js -> .json
- npm install @types/styled-components

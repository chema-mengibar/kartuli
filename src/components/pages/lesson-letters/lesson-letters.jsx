import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Routes from '../../../helpers/routes'

import {LessonLettersWrapper} from './lesson-letters.styles'

function Letter() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

const execises = [
  {
    category:'exercise',
    label:'>>exercise 1',
    link:`/exercise/a`
  },
  {
    category:'exercise',
    label:'>>exercise 2',
    link:`/exercise/b`
  },
]

export const LessonLetters = (props) => {

  let match = useRouteMatch();
  console.log( match )

  return (
    <LessonLettersWrapper>
      <ul>
        {
          execises.map( (item, idt) => {
            return ( 
              <li key={`exercise-${idt}`}>
                 <Link to={`${match.url}${item.link}`}>{item.label}</Link>
              </li>
            )
          })
        }
      </ul>

      <Switch>
        <Route path={`${match.url}/exercise/:topicId`}>
          dinamically  <Letter />
        </Route>
        <Route path={match.path}>
          <h3>Please select an exercise.</h3>
        </Route>
      </Switch>
    </LessonLettersWrapper>
  )
}
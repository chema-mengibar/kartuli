import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import {LessonLetters} from '../lesson-letters/lesson-letters'
import Routes from '../../../helpers/routes'

import {LessonWrapper} from './lesson.styles'

export const Lesson = (props) => {

  let match = useRouteMatch();

  return (
    <LessonWrapper>
      <ul>
        {
          Routes('lesson').map( (item, idt) => {
            return ( 
              <li key={`lesson-${idt}`}>
                 <Link to={`${match.url}${item.link}`}>{item.label}</Link>
              </li>
            )
          })
        }
      </ul>

      <Switch>

        <Route path={`/lesson/letters/`}>
          Letters
          <LessonLetters></LessonLetters>
        </Route>

        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>

      </Switch>

    </LessonWrapper>
  )
}
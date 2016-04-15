import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import ScorePage from './containers/ScorePage';
import EditParticipantsPage from './containers/EditParticipantsPage';
import StatsPage from './containers/StatsPage.js';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route component={App}>
    <Route path="/" component={ScorePage} />
    <Route path="edit" component={EditParticipantsPage}/>
    <Route path="stats" component={StatsPage}/>
    <Route path="*" component={NotFoundPage} />
  </Route>
);

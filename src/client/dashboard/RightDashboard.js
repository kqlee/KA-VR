// import React, { PropTypes } from 'react';
import React from 'react';
import TodoApp from '../todo/App';

// Import calendar, settings components
const RightDashboard = () => (
  <div className="rightdashboard hide-on-small-only col m3">
    <TodoApp />
  </div>
);

export default RightDashboard;

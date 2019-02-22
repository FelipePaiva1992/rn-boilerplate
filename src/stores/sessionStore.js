import React from 'react';

const SessionContext = React.createContext({
  user: {},
  setUser: value => {
    this.user = value;
  },
  cleanUser: () => {
    this.user = {};
  },
});

export default SessionContext;

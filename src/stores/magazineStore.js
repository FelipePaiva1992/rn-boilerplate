import React from 'react';

const MagazineContext = React.createContext({
  magazine: [],
  addMagazine: value => {
    this.magazine = value;
  },
  cleanMagazine: () => {
    this.magazine = [];
  },
});

export default MagazineContext;

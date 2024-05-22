import React from 'react';

const MainContent = ({pageName, designer}) => {
  return (
    <main>
      {pageName}
      <br/>
      Designed by 
      <br/>
      {designer}
  </main>
  );
}

export default MainContent;
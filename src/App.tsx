/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FC } from 'react';
import { Helmet } from 'react-helmet';


const App: FC = () => {
  return (
    <div>
      <Helmet>
        <title>James Jarrett</title>
        <meta name="title" content="Welcome to my portfolio site" />
      </Helmet>
    </div>
  );
};

export default App;

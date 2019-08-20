/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import {FC, useEffect} from 'react';
import { render } from 'react-dom';
import { Helmet } from 'react-helmet';
import { Container, Segment, Header, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import ConfettiHeader from './components/ConfettiHeader'



const App: FC = () => {

  return (
    <div>
      <ConfettiHeader />
      <Helmet>
        <title>James Jarrett</title>
        <meta name="title" content="Welcome to my portfolio site" />
      </Helmet>
      <Segment size="large" color="black" inverted>
      <Icon link name="github" inverted />
          <Icon link name="twitter"  inverted />
          <Icon link name="linkedin"  inverted />

      </Segment>
    </div>
  );
};

export default App;

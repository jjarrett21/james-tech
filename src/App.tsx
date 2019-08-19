/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import {FC, useEffect} from 'react';
import { render } from 'react-dom';
import { Helmet } from 'react-helmet';
import { Container, Segment, Header } from 'semantic-ui-react';
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

        
        {/* <Header>
          <ConfettiHeader />
        </Header>
        <Segment raised inverted color="grey" size="large">
          Welcome to James.Tech
        </Segment>
        <Segment raised inverted color="grey" size="large">
          About
        </Segment>
        <Segment raised inverted color="grey" size="large">
          Contact Form Goes here
        </Segment>
        <Segment raised inverted color="grey" size="large">
          Social Links?
        </Segment> */}
    </div>
  );
};

export default App;

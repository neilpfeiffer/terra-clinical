/* eslint-disable import/no-extraneous-dependencies */
import Base from 'terra-base';
import 'terra-base/lib/baseStyles';
import React from 'react';
import { Link } from 'react-router';
import Grid from 'terra-grid';
import List from 'terra-list';
import './site.scss';

const propTypes = {
  children: React.PropTypes.node,
};

const App = props => (
  <Base>
    <Grid>
      <Grid.Row>
        <Grid.Column small={2}>
          <div className="terraClinical-Site-directionality" dir="ltr">
            <button onClick={() => document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr')} >ltr</button>
            <button onClick={() => document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl')} >rtl</button>
          </div>
          <List className="terraClinical-Site-Nav">
            <List.Item content={<Link to="/">Home</Link>} />
            <List.Item content={<Link to="/site/action-header">Action Header</Link>} />
            <List.Item content={<Link to="/site/detail-view">Detail View</Link>} />
            <List.Item content={<Link to="/site/error-view">Error View</Link>} />
            <List.Item content={<Link to="/site/header">Header</Link>} />
            <List.Item content={<Link to="/site/item-display">Item Display</Link>} />
            <List.Item content={<Link to="/site/item-view">Item View</Link>} />
            <List.Item content={<Link to="/site/label-value-view">Label Value View</Link>} />
            <List.Item content={<Link to="/site/no-data-view">No Data View</Link>} />
            <List.Item content={<Link to="/tests">Tests</Link>} />
          </List>
        </Grid.Column>
        <Grid.Column small={10}>
          {props.children}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Base>
);

App.propTypes = propTypes;

export default App;

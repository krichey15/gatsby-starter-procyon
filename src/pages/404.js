import React from 'react';
import { Typography, Grid } from 'material-ui';
import Section from '../components/Section';
import Layout from '../components/layout';

const NotFoundPage = () => (
  <Layout>
    <Section>
      <Grid item xs={12} sm={8}>
        <Typography variant="display1">NOT FOUND</Typography>
        <Typography>
          You just hit a route that doesn&#39;t exist... the sadness.
        </Typography>
      </Grid>
    </Section>
  </Layout>
);

export default NotFoundPage;

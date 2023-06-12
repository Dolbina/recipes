// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import {RecipeReviewCard} from '../components/RecipeReviewCard/RecipeReviewCard'



// import { setIsLoading } from 'redux/contacts/selector';
import { GlobalStyle } from '../components/GlobalStyle';

import { Layout } from 'components/Layout/Layout';
import { Grid } from '@mui/material';



export default function Contacts (){
  return (
    <>
      <Helmet>
        <title>Your recipes</title>
      </Helmet>
      <Layout>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} lg={3}>
            <RecipeReviewCard />
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <RecipeReviewCard />
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <RecipeReviewCard />
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <RecipeReviewCard />
          </Grid>
        </Grid>
        <GlobalStyle />
      </Layout>
    </>
  );
}

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AppScreen1 from '../../assets/images/identify-screen-vault-2.png';
import AppScreen2 from '../../assets/images/identify-screen-story-2.png';
import ClientExamples from '../../assets/images/client-examples.png';
import  "./Home.scss";

const Home = () => {

    const renderHeroSection = () => (
      <React.Fragment>
        <Grid 
          item
          container
          xs={8}
          classes={{
            root: "heroLeftSide"
          }}
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item xs={7}>
            <p className="smallHeaderText">Supply chain visibility and transparency</p>
            <h1>Everledger uses blockchain to help customers trust in what they buy</h1>
            <p className="headerDescription">We enable great brands to communicate the origin and impact of their products. Increase engagement by connecting to shoppers’ changing values and help build a better world.</p>
            <Grid container classes={{ root: "heroActions" }} justifyContent="flex-start">
              <Grid item><Button disableElevation variant="contained" classes={{ root: "primaryButton" }}>Book a product demo</Button></Grid>
              <Grid item><Button disableElevation variant="outlined" classes={{ root: "secondaryButton" }}>Book a product demo</Button></Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid 
          item
          container
          xs={4}
          classes={{
            root: "heroRightSide"
          }}
          alignItems="center"
          justifyContent="space-"
        >
          <Grid item xs={6} display="flex" className="appImage1"><img src={AppScreen1}/></Grid>
          <Grid item xs={6} display="flex" className="appImage2"><img src={AppScreen2} /></Grid>
        </Grid>
      </React.Fragment>
    )

    const renderClientsSection = () => (
      <Grid 
        item
        container
        xs={12}
        classes={{
          root: "clientSection"
        }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}><p className="clientSectionTitle">Trusted By</p></Grid>
        <Grid item xs={12} display="flex" className="clientExamples" justifyContent="center"><img src={ClientExamples} /></Grid>
      </Grid>
    )

    return (
        <Grid
          container
          spacing={2}
          classes={{
            root: "homeContainer",
          }}
        >
          { renderHeroSection() }
          { renderClientsSection() }
        </Grid>
    );
}

export default Home;
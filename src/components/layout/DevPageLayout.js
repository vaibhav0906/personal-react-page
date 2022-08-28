/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import VaibhavProfile from '../../resources/profile-pic.png';
import LinkedInLogo from '../../resources/linkedinLogo.png';
import ProductHuntLogo from '../../resources/productHunt.png';
import MailLogo from '../../resources/mailLogo.png';
import { Link } from 'react-router-dom';
import AmazonPayLogo from '../../resources/amazonPay.png';
import AmazonLogo from '../../resources/amazon.jpeg';
import DripCapitalLogo from '../../resources/dripCapitalLogo.png';
import PersonalWebpage from '../../resources/personalPage.png';
import BackArrow from '../../resources/backArrow.png';
import {
  Container,
  Grid,
  Header,
  List,
  Image,
  Menu,
  Segment,
  Visibility
} from 'semantic-ui-react'


const socialMediaLogo = {
    width: '3em',
    height: '3em'
}

const profileLogo = {
    width: '5em',
    height: '5em'
}



const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Media greaterThan='mobile'>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
              <Menu.Item position='left'>
                    <Link to = "/">
                        <Image circular src={BackArrow} style= {profileLogo} />
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <a href = "https://www.linkedin.com/in/vaibhav-kumar-31k/">
                        <Image circular src={VaibhavProfile} style= {profileLogo} />
                    </a>
                </Menu.Item>
            
                <Menu.Item position='right'>
                    <a href = "https://www.linkedin.com/in/vaibhav-kumar-31k/">
                        <Image src= {LinkedInLogo} style= {socialMediaLogo}  />
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href = "https://www.producthunt.com/@vaibhav_kumar31">
                        <Image src= {ProductHuntLogo} style= {socialMediaLogo} />
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href = "mailto:kvaibhav3101@gmail.com">
                        <Image src= {MailLogo} style= {socialMediaLogo} />
                    </a>
                </Menu.Item>
              </Container>
            </Menu>
        </Visibility>

        {children}
      </Media>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const DevPageLayout = () => (
  <ResponsiveContainer>
        <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
            <Grid.Column width={8}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                Bizportal
              </Header>
              <p style={{ fontSize: '1.21em' }}>
              <List bulleted>
                  <List.Item> Designed (HLD/LLD) and Engineered Bizportal from Backend which is Exporter-Importer Trade Discovery Platform. </List.Item>
                  <List.Item>Worked on end to end design and implementation of Microservices
                    <List.List>
                      <List.Item> Notification Service : To Deliver Outbound Emails, SMS and Whatsapp messages, App Notification. </List.Item>
                      <List.Item> User Management Service : Manages User, Company and User-Company Relation. </List.Item>
                      <List.Item> Bizportal Backend : Front Facing Service Interacting with different MicroServices to 
                        facilitate discovery usecases. </List.Item>
                      <List.Item> Container Tracking Service : Tracks Shipment Container periodically using Cron Job</List.Item>
                    </List.List> 
                  </List.Item>
                  <List.Item>Tech Stack Used : 
                      <List.List>
                          <List.Item> Back End : Go </List.Item>
                          <List.Item> Database : MySQL, MongoDB </List.Item>
                          <List.Item> Cloud Service : AWS </List.Item>
                      </List.List>
                  </List.Item>
              </List>
              </p>
            </Grid.Column>
            <Grid.Column floated='right' width={6}>
              <Image size='large' src={DripCapitalLogo} />
            </Grid.Column>
            <Grid.Column textAlign='center'>
            </Grid.Column>
        </Grid>
      </Segment>
      <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
                Automated Invoice Generation Process
            </Header>
            <p style={{ fontSize: '1.21em' }}>
            <List bulleted>
                <List.Item>Impact
                    <List.List>
                        <List.Item> Automated the Invoice Generation process which reduced the error rate and time to generate invoices for partners </List.Item>
                        <List.Item> Reduction of time in generation of invoice per partner : From 2 mins to 5 seconds</List.Item>
                    </List.List>
                </List.Item>
                <List.Item>Designed (HLD/LLD) and implemented the automation</List.Item>
                <List.Item>Tech Stack Used : 
                    <List.List>
                        <List.Item> Used Lambda to deploy the code</List.Item>
                        <List.Item> Back End : Java </List.Item>
                        <List.Item> Cloud Service : AWS </List.Item>
                    </List.List>
                </List.Item>
            </List>
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image size='large' src={AmazonLogo} />
            <Header as='h5' style={{ fontSize: '1.8em' }}>
                Access Point Payments, Amazon
            </Header>
          </Grid.Column>
          <Grid.Column textAlign='center'>
          </Grid.Column>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
                Sonar Wave Money Transfer and Check Bank Balance in AmazonPay
            </Header>
            <p style={{ fontSize: '1.21em' }}>
            <List bulleted>
                <List.Item>Impact
                    <List.List>
                        <List.Item> DAU(Daily Active Users) increased by 7% approximately </List.Item>
                        <List.Item> Approx 1.5 mn active users are checking bank balance daily. </List.Item>
                        <List.Item>Approx 45,000 active users are using Sound Payment </List.Item>
                    </List.List>
                </List.Item>
                <List.Item>Designed (HLD/LLD) and developed mobile payment experience using React JS</List.Item>
                <List.Item>Tech Stack Used : 
                    <List.List>
                        <List.Item> Framework : Spring MVC </List.Item>
                        <List.Item> Front Ent : React JS Native Mobile Experience </List.Item>
                        <List.Item> Cloud Service : AWS </List.Item>
                    </List.List>
                </List.Item>
            </List>
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image size='large' src={AmazonPayLogo} />
          </Grid.Column>
          <Grid.Column textAlign='center'>
          </Grid.Column>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
                Vaibhav Kumar's Homepage
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            <List bulleted>
            <List.Item><a href = 'https://github.com/vaibhav0906/personal-react-page'> Github Code</a> </List.Item>
                <List.Item>Tech Stack Used : 
                    <List.List>
                        <List.Item> Front Ent : React JS </List.Item>
                        <List.Item> Cloud Service : Deployed via Heroku App </List.Item>
                    </List.List>
                </List.Item>
            </List>
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image rounded size='large' src={PersonalWebpage} />
          </Grid.Column>
          <Grid.Column textAlign='center'>
          </Grid.Column>
      </Grid>
    </Segment>
  </ResponsiveContainer>
)

export default DevPageLayout
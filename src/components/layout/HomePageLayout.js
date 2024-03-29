/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import VaibhavSouthGoaImage from '../../resources/vaibhav-bg-goa.jpg';
import VaibhavProfile from '../../resources/profile-pic.png';
import LinkedInLogo from '../../resources/linkedinLogo.png';
import ProductHuntLogo from '../../resources/productHunt.png';
import MailLogo from '../../resources/mailLogo.png';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Visibility
} from 'semantic-ui-react'


const socialMediaLogo = {
    width: '3em',
    height: '3em'
}

const homePage = {
    backgroundImage: 'url(' + VaibhavSouthGoaImage + ')',
    minHeight: 700,
    padding: '1em 0em'
}

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Vaibhav Kumar'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Software Developer at Drip Capital, Amazon'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />

    <br/> <br/> <br/>

      <Header as='h5' style={{ fontSize: '1.5em' }}>
          <Link to="/dev-projects"> As Software Developer </Link>
      </Header>
      <Header as='h5' style={{ fontSize: '1.5em' }}>
      <Link to="/product-projects"> As Product Enthusiast </Link>
      </Header>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

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
                <Menu.Item position='right'>
                    <a href = "https://www.linkedin.com/in/vaibhav-kumar-31k/">
                        <Image src= {LinkedInLogo} style= {socialMediaLogo} avatar />
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href = "https://www.producthunt.com/@vaibhav_kumar31">
                        <Image src= {ProductHuntLogo} style= {socialMediaLogo} avatar/>
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href = "mailto:kvaibhav3101@gmail.com">
                        <Image src= {MailLogo} style= {socialMediaLogo} avatar/>
                    </a>
                </Menu.Item>
              </Container>
            </Menu>
          <Segment
            inverted
            textAlign='center'
            style={homePage}
          >
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Media>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Media as={Sidebar.Pushable} at='mobile'>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as='a' active>
              Home
            </Menu.Item>
            
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' inverted>
                      Log in
                    </Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
                About me
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            Vaibhav Kumar loves programming, knowing about new product, reading blogs, traveling, boxing, and lifting heavy things. He does not love talking about himself in the 3rd person. 
            He is software developer at Drip Captital, a Fintech Startup that solves problem of Export and Import Financing. Previously, he has worked in Amazon (Amazon Pay) to build a complete
            payment experience to user and startups like Hevo Data, a company that is innovating in ETL/ Reverse-ETL space. 
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image rounded size='large' src={VaibhavProfile} />
          </Grid.Column>
          <Grid.Column textAlign='center'>
          </Grid.Column>
      </Grid>
    </Segment>
  </ResponsiveContainer>
)

export default HomepageLayout
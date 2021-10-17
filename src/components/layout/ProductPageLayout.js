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
import BackArrow from '../../resources/backArrow.png';
import {
  Container,
  Grid,
  Header,
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

const ProductPageLayout = () => (
  <ResponsiveContainer>
      <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
                To be Added ...
            </Header>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>

          </Grid.Column>
          <Grid.Column textAlign='center'>
          </Grid.Column>
      </Grid>
    </Segment>
  </ResponsiveContainer>
)

export default ProductPageLayout
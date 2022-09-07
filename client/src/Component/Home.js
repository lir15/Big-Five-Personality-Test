import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Switch } from 'react-router-dom'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Big Five Personality Test'
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
      content='Get to know more about yourself.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Divider></Divider>
    <Button size='huge'>
      <Link to = '/question'>Take The Test</Link>
      <Icon name='right arrow' />
    </Button>
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
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>

              <Menu.Item as='a' active><Link to = '/'>Home</Link></Menu.Item>

<Menu.Item as='a'><Link to = '/question'>Take The Test</Link></Menu.Item>

<Menu.Item as='a'><Link to = '/result'>Result</Link></Menu.Item>

<Menu.Item as='a'><Link to = '/stats'>Stats</Link></Menu.Item>
              </Container>
            </Menu>
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

const ResponsiveContainer = ({ children }) => (
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={6}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              About The Test
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            The Big Five personality traits, 
            also known as the five-factor model (FFM) and the OCEAN model, 
            is a taxonomy, or grouping, for personality traits. 
            When factor analysis (a statistical technique) 
            is applied to personality survey data, 
            some words used to describe aspects of personality 
            are often applied to the same person. 
            For example, someone described as conscientious is more 
            likely to be described as "always prepared" rather than "messy". 
            This theory is based therefore on the association between words 
            but not on neuropsychological experiments. 
            This theory uses descriptors of common language and therefore 
            suggests five broad dimensions commonly used to describe the human personality and psyche.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={7}>
          <Header as='h3' style={{ fontSize: '2em' }}>
              Types Of Questions
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            EXT - Questions to measure Extroversion
            <Divider/>
            AGR - Questions to measure Agreeableness
            <Divider/>
            CSN - Questions to measure Conscientiousness
            <Divider/>
            EST - Questions to measure Neuroticism
            <Divider/>
            OPN - Questions to measure Openness to Experience
            </p>
          </Grid.Column>
        </Grid.Row>
       
        <Grid.Row>
          <Grid.Column width={20}>
            <Header as='h3' style={{ fontSize: '2em' }}>
            Q. What does each factor mean?
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            Openness - How open a person is to new ideas and experience<br />
            Conscientiousness - How goal-directed, persistent, and organized a person is<br />
            Extraversion - How much a person is energized by the outside world<br />
            Agreeableness - How much a person puts others' interests and needs ahead of their own<br />
            Neuroticism - How sensitive a person is to stress and negative emotional triggers<br />
            </p>
          </Grid.Column>

         


        </Grid.Row>
        <Grid.Row>
        <Grid.Column width={20}>
            <Header as='h3' style={{ fontSize: '2em' }}>
            Q. How long is this test?
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            The test consists of 50 questions and takes about 3-5 minutes to complete.
            </p>
          </Grid.Column>
          </Grid.Row>
          <Grid.Row>
        <Grid.Column width={20}>
            <Header as='h3' style={{ fontSize: '2em' }}>
            Q. Is this personality test scientific and/or accurate?
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            This test has been researched extensively to ensure it is valid and reliable. It is based on psychological research into the core of personality, and our own psychometric research. Your scores show you how you compare to the other people in a large, international sample for each of the Big Five personality traits.
            </p>
          </Grid.Column>
          </Grid.Row>
         

      </Grid>
    </Segment>

    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={7}>
              <Header inverted as='h4' content='Author' />
              <List link inverted>
                <List.Item as='a'>Lucas Li</List.Item>
                <List.Item as='a'>rucheng.li@vanderbilt.edu</List.Item>
                <List.Item as='a'>Vanderbilt University</List.Item>
                <List.Item as='a'>CS 3265</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Reference
              </Header>
              <p>
              <List.Item as='a'>https://www.kaggle.com/tunguz/big-five-personality-test</List.Item>
              <List.Item as='a'>  https://www.truity.com/test/big-five-personality-test</List.Item>
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default HomepageLayout
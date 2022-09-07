import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Switch } from 'react-router-dom'
import { Divider,Checkbox } from 'antd'
import axios from 'axios'
import {
  Button,
  Container,
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
import {useState} from 'react'

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
      content='How To Take The Test'
      inverted
      style={{
        fontSize: mobile ? '2em' : '2em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '1em',
      }}
    />
    <Header
      as='h2'
      content='For each question, choose how much you agree or disagree with the statement.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1em',
      }}
    />
        <Header
      as='h2'
      content='1 - strongly disagree. 2 - slightly disagree. 3 - neutral. 4 - slightly agree. 5 - strongly agree.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1em',
      }}
    />
    <Header
      as='h2'
      content='In order to get accurate result, please select one option for each question.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1em',
      }}
    />
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
            style={{ minHeight: 250, padding: '1em 0em' }}
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

              <Menu.Item as='a'><Link to = '/'>Home</Link></Menu.Item>

<Menu.Item as='a' active><Link to = '/question'>Take The Test</Link></Menu.Item>

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



const Question = () => {
  const[ext1,setEXT1] = useState(0)
  const[ext2,setEXT2] = useState(0)
  const[ext3,setEXT3] = useState(0)
  const[ext4,setEXT4] = useState(0)
  const[ext5,setEXT5] = useState(0)
  const[ext6,setEXT6] = useState(0)
  const[ext7,setEXT7] = useState(0)
  const[ext8,setEXT8] = useState(0)
  const[ext9,setEXT9] = useState(0)
  const[ext10,setEXT10] = useState(0)
  const[est1, setEST1] = useState(0)
  const[est2, setEST2] = useState(0)
  const[est3, setEST3] = useState(0)
  const[est4, setEST4] = useState(0)
  const[est5, setEST5] = useState(0)
  const[est6, setEST6] = useState(0)
  const[est7, setEST7] = useState(0)
  const[est8, setEST8] = useState(0)
  const[est9, setEST9] = useState(0)
  const[est10, setEST10] = useState(0)
  const[agr1, setAGR1] = useState(0)
  const[agr2, setAGR2] = useState(0)
  const[agr3, setAGR3] = useState(0)
  const[agr4, setAGR4] = useState(0)
  const[agr5, setAGR5] = useState(0)
  const[agr6, setAGR6] = useState(0)
  const[agr7, setAGR7] = useState(0)
  const[agr8, setAGR8] = useState(0)
  const[agr9, setAGR9] = useState(0)
  const[agr10, setAGR10] = useState(0)
  const[csn1, setCSN1] = useState(0)
  const[csn2, setCSN2] = useState(0)
  const[csn3, setCSN3] = useState(0)
  const[csn4, setCSN4] = useState(0)
  const[csn5, setCSN5] = useState(0)
  const[csn6, setCSN6] = useState(0)
  const[csn7, setCSN7] = useState(0)
  const[csn8, setCSN8] = useState(0)
  const[csn9, setCSN9] = useState(0)
  const[csn10, setCSN10] = useState(0)
  const[opn1, setOPN1] = useState(0)
  const[opn2, setOPN2] = useState(0)
  const[opn3, setOPN3] = useState(0)
  const[opn4, setOPN4] = useState(0)
  const[opn5, setOPN5] = useState(0)
  const[opn6, setOPN6] = useState(0)
  const[opn7, setOPN7] = useState(0)
  const[opn8, setOPN8] = useState(0)
  const[opn9, setOPN9] = useState(0)
  const[opn10, setOPN10] = useState(0)

  const options = [
    { label: '1 - strongly disagree', value: '1' },
    { label: '2 - slightly disagree', value: '2' },
    { label: '3 - neutral', value: '3' },
    { label: '4 - slightly agree', value: '4' },
    { label: '5 - strongly agree', value: '5' },
  ];

  function onChangeEXT1(checkedValues) {
    console.log('checked = ', checkedValues);
    setEXT1(checkedValues)
  }

  function onChangeEXT2(checkedValues) {
    console.log('checked = ', checkedValues);
    setEXT2(checkedValues)
  }
  function onChangeEXT3(checkedValues) {
    console.log('checked = ', checkedValues);
    setEXT3(checkedValues)
  }
  function onChangeEXT4(checkedValues) {
    console.log('checked = ', checkedValues);
    setEXT4(checkedValues)
  }
  function onChangeEXT5(checkedValues) {
    console.log('checked = ', checkedValues);
    setEXT5(checkedValues)
  }
  function onChangeEXT6(checkedValues) {
    console.log('checked = ', checkedValues);
    setEXT6(checkedValues)
  }
  function onChangeEXT7(checkedValues) {
    console.log('checked = ', checkedValues);
    setEXT7(checkedValues)
  }
  function onChangeEXT8(checkedValues) {
    console.log('checked = ', checkedValues);
    setEXT8(checkedValues)
  }
  function onChangeEXT9(checkedValues) {
    console.log('checked = ', checkedValues);
    setEXT9(checkedValues)
  }
  function onChangeEXT10(checkedValues) {
    console.log('checked = ', checkedValues);
    setEXT10(checkedValues)
  }

  function onChangeEST1(checkedValues) {
    console.log('checked = ', checkedValues);
    setEST1(checkedValues)
  }

  function onChangeEST2(checkedValues) {
    console.log('checked = ', checkedValues);
    setEST2(checkedValues)
  }
  function onChangeEST3(checkedValues) {
    console.log('checked = ', checkedValues);
    setEST3(checkedValues)
  }
  function onChangeEST4(checkedValues) {
    console.log('checked = ', checkedValues);
    setEST4(checkedValues)
  }
  function onChangeEST5(checkedValues) {
    console.log('checked = ', checkedValues);
    setEST5(checkedValues)
  }
  function onChangeEST6(checkedValues) {
    console.log('checked = ', checkedValues);
    setEST6(checkedValues)
  }
  function onChangeEST7(checkedValues) {
    console.log('checked = ', checkedValues);
    setEST7(checkedValues)
  }
  function onChangeEST8(checkedValues) {
    console.log('checked = ', checkedValues);
    setEST8(checkedValues)
  }
  function onChangeEST9(checkedValues) {
    console.log('checked = ', checkedValues);
    setEST9(checkedValues)
  }
  function onChangeEST10(checkedValues) {
    console.log('checked = ', checkedValues);
    setEST10(checkedValues)
  }
  
  function onChangeAGR1(checkedValues) {
    console.log('checked = ', checkedValues);
    setAGR1(checkedValues)
  }
  function onChangeAGR2(checkedValues) {
    console.log('checked = ', checkedValues);
    setAGR2(checkedValues)
  }
  function onChangeAGR3(checkedValues) {
    console.log('checked = ', checkedValues);
    setAGR3(checkedValues)
  }
  function onChangeAGR4(checkedValues) {
    console.log('checked = ', checkedValues);
    setAGR4(checkedValues)
  }
  function onChangeAGR5(checkedValues) {
    console.log('checked = ', checkedValues);
    setAGR5(checkedValues)
  }
  function onChangeAGR6(checkedValues) {
    console.log('checked = ', checkedValues);
    setAGR6(checkedValues)
  }
  function onChangeAGR7(checkedValues) {
    console.log('checked = ', checkedValues);
    setAGR7(checkedValues)
  }
  function onChangeAGR8(checkedValues) {
    console.log('checked = ', checkedValues);
    setAGR8(checkedValues)
  }
  function onChangeAGR9(checkedValues) {
    console.log('checked = ', checkedValues);
    setAGR9(checkedValues)
  }
  function onChangeAGR10(checkedValues) {
    console.log('checked = ', checkedValues);
    setAGR10(checkedValues)
  }
  function onChangeCSN1(checkedValues) {
    console.log('checked = ', checkedValues);
    setCSN1(checkedValues)
  }
  function onChangeCSN2(checkedValues) {
    console.log('checked = ', checkedValues);
    setCSN2(checkedValues)
  }
  function onChangeCSN3(checkedValues) {
    console.log('checked = ', checkedValues);
    setCSN3(checkedValues)
  }
  function onChangeCSN4(checkedValues) {
    console.log('checked = ', checkedValues);
    setCSN4(checkedValues)
  }
  function onChangeCSN5(checkedValues) {
    console.log('checked = ', checkedValues);
    setCSN5(checkedValues)
  }
  function onChangeCSN6(checkedValues) {
    console.log('checked = ', checkedValues);
    setCSN6(checkedValues)
  }
  function onChangeCSN7(checkedValues) {
    console.log('checked = ', checkedValues);
    setCSN7(checkedValues)
  }
  function onChangeCSN8(checkedValues) {
    console.log('checked = ', checkedValues);
    setCSN8(checkedValues)
  }
  function onChangeCSN9(checkedValues) {
    console.log('checked = ', checkedValues);
    setCSN9(checkedValues)
  }
  function onChangeCSN10(checkedValues) {
    console.log('checked = ', checkedValues);
    setCSN10(checkedValues)
  }
  function onChangeOPN1(checkedValues) {
    console.log('checked = ', checkedValues);
    setOPN1(checkedValues)
  }
  function onChangeOPN2(checkedValues) {
    console.log('checked = ', checkedValues);
    setOPN2(checkedValues)
  }
  function onChangeOPN3(checkedValues) {
    console.log('checked = ', checkedValues);
    setOPN3(checkedValues)
  }
  function onChangeOPN4(checkedValues) {
    console.log('checked = ', checkedValues);
    setOPN4(checkedValues)
  }
  function onChangeOPN5(checkedValues) {
    console.log('checked = ', checkedValues);
    setOPN5(checkedValues)
  }
  function onChangeOPN6(checkedValues) {
    console.log('checked = ', checkedValues);
    setOPN6(checkedValues)
  }
  function onChangeOPN7(checkedValues) {
    console.log('checked = ', checkedValues);
    setOPN7(checkedValues)
  }
  function onChangeOPN8(checkedValues) {
    console.log('checked = ', checkedValues);
    setOPN8(checkedValues)
  }
  function onChangeOPN9(checkedValues) {
    console.log('checked = ', checkedValues);
    setOPN9(checkedValues)
  }
  function onChangeOPN10(checkedValues) {
    console.log('checked = ', checkedValues);
    setOPN10(checkedValues)
  }

  function submitAnswer(){
      axios.post('http://localhost:3002/create',{
        ext1: ext1,
        ext2: ext2,
        ext3: ext3,
        ext4: ext4,
        ext5: ext5,
        ext6: ext6,
        ext7: ext7,
        ext8: ext8,
        ext9: ext9,
        ext10: ext10,
        est1: est1,
        est2: est2,
        est3: est3,
        est4: est4,
        est5: est5,
        est6: est6,
        est7: est7,
        est8: est8,
        est9: est9,
        est10: est10,
        agr1: agr1,
        agr2: agr2,
        agr3: agr3,
        agr4: agr4,
        agr5: agr5,
        agr6: agr6,
        agr7: agr7,
        agr8: agr8,
        agr9: agr9,
        agr10: agr10,
        csn1: csn1,
        csn2: csn2,
        csn3: csn3,
        csn4: csn4,
        csn5: csn5,
        csn6: csn6,
        csn7: csn7,
        csn8: csn8,
        csn9: csn9,
        csn10: csn10,
        opn1: opn1,
        opn2: opn2,
        opn3: opn3,
        opn4: opn4,
        opn5: opn5,
        opn6: opn6,
        opn7: opn7,
        opn8: opn8,
        opn9: opn9,
        opn10: opn10
      }).then(()=>{
      })
  }

  return(
  <ResponsiveContainer>
    <Segment style={{ padding: '4em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row >
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              EXT1
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I am the life of the party.
            </p>
            <Checkbox.Group options={options} onChange={onChangeEXT1} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              EXT2
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I don't talk a lot.
            </p>
            <Checkbox.Group options={options} onChange={onChangeEXT2} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              EXT3
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I am comfortable around people.
            </p>
            <Checkbox.Group options={options} onChange={onChangeEXT3} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              EXT4
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I keep in the background.
            </p>
            <Checkbox.Group options={options} onChange={onChangeEXT4} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              EXT5
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I start conversations.
            </p>
            <Checkbox.Group options={options} onChange={onChangeEXT5} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              EXT6
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I have little to say.
            </p>
            <Checkbox.Group options={options} onChange={onChangeEXT6} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              EXT7
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I talk to a lot of different people at parties.
            </p>
            <Checkbox.Group options={options} onChange={onChangeEXT7} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              EXT8
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I don't like to draw attention to myself.
            </p>
            <Checkbox.Group options={options} onChange={onChangeEXT8} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              EXT9
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I don't mind being the center of attention.
            </p>
            <Checkbox.Group options={options} onChange={onChangeEXT9} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              EXT10
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I am quite around strangers.
            </p>
            <Checkbox.Group options={options} onChange={onChangeEXT10} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              EST1
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I get stressed out easily.
            </p>
            <Checkbox.Group options={options} onChange={onChangeEST1} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              EST2
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I am relaxed most of the time.
            </p>
            <Checkbox.Group options={options} onChange={onChangeEST2} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              EST3
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I worry about things.
            </p>
            <Checkbox.Group options={options} onChange={onChangeEST3} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              EST4
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I seldom feel blue.
            </p>
            <Checkbox.Group options={options} onChange={onChangeEST4} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              EST5
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I am easily disturbed.
            </p>
            <Checkbox.Group options={options} onChange={onChangeEST5} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              EST6
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I get upset easily.
            </p>
            <Checkbox.Group options={options} onChange={onChangeEST6} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              EST7
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I change my mood a lot.
            </p>
            <Checkbox.Group options={options} onChange={onChangeEST7} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              EST8
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I have frequent mood swings.
            </p>
            <Checkbox.Group options={options} onChange={onChangeEST8} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              EST9
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I get irritated easily.
            </p>
            <Checkbox.Group options={options} onChange={onChangeEST9} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              EST10
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I often feel blue.
            </p>
            <Checkbox.Group options={options} onChange={onChangeEST10} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              AGR1
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I feel little concern for others.
            </p>
            <Checkbox.Group options={options} onChange={onChangeAGR1} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              AGR2
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I am interested in people.
            </p>
            <Checkbox.Group options={options} onChange={onChangeAGR2} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              AGR3
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I insult people.
            </p>
            <Checkbox.Group options={options} onChange={onChangeAGR3} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              AGR4
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I sympathize with others' feeling.
            </p>
            <Checkbox.Group options={options} onChange={onChangeAGR4} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              AGR5
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I am not interested in other people's problems.
            </p>
            <Checkbox.Group options={options} onChange={onChangeAGR5} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              AGR6
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I have a soft heart.
            </p>
            <Checkbox.Group options={options} onChange={onChangeAGR6} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              AGR7
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I am not really interested in others.
            </p>
            <Checkbox.Group options={options} onChange={onChangeAGR7} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              AGR8
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I take time out for others.
            </p>
            <Checkbox.Group options={options} onChange={onChangeAGR8} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              AGR9
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I feel other's emotions.
            </p>
            <Checkbox.Group options={options} onChange={onChangeAGR9} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              AGR10
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I make people feel at ease.
            </p>
            <Checkbox.Group options={options} onChange={onChangeAGR10} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              CSN1
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I am always prepared.
            </p>
            <Checkbox.Group options={options} onChange={onChangeCSN1} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              CSN2
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I leave my belongings around.
            </p>
            <Checkbox.Group options={options} onChange={onChangeCSN2} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              CSN3
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I pay attention to details.
            </p>
            <Checkbox.Group options={options} onChange={onChangeCSN3} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              CSN4
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I make a mess of things.
            </p>
            <Checkbox.Group options={options} onChange={onChangeCSN4} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              CSN5
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I get chores done right away.
            </p>
            <Checkbox.Group options={options} onChange={onChangeCSN5} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              CSN6
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I often forget to put things back in their proper place.
            </p>
            <Checkbox.Group options={options} onChange={onChangeCSN6} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              CSN7
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I like order.
            </p>
            <Checkbox.Group options={options} onChange={onChangeCSN7} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              CSN8
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I shirk my duties.
            </p>
            <Checkbox.Group options={options} onChange={onChangeCSN8} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              CSN9
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I follow a schedule.
            </p>
            <Checkbox.Group options={options} onChange={onChangeCSN9} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              CSN10
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I am exacting in my work.
            </p>
            <Checkbox.Group options={options} onChange={onChangeCSN10} />
          </Grid.Column>
          <Divider/>

          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              OPN1
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I have a rich vocabulary.
            </p>
            <Checkbox.Group options={options} onChange={onChangeOPN1} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              OPN2
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I have difficulty understanding abstract ideas.
            </p>
            <Checkbox.Group options={options} onChange={onChangeOPN2} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              OPN3
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I have a vivid imagination.
            </p>
            <Checkbox.Group options={options} onChange={onChangeOPN3} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              OPN4
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I am not interested in abstract ideas.
            </p>
            <Checkbox.Group options={options} onChange={onChangeOPN4} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              OPN5
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I have excellent ideas.
            </p>
            <Checkbox.Group options={options} onChange={onChangeOPN5} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              OPN6
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I do not have a good imagination.
            </p>
            <Checkbox.Group options={options} onChange={onChangeOPN6} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              OPN7
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I am quick to understand things.
            </p>
            <Checkbox.Group options={options} onChange={onChangeOPN7} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              OPN8
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I use difficult words.
            </p>
            <Checkbox.Group options={options} onChange={onChangeOPN8} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              OPN9
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I spend time reflecting on things.
            </p>
            <Checkbox.Group options={options} onChange={onChangeOPN9} />
          </Grid.Column>
          <Divider/>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2.0em' }}>
              OPN10
            </Header>
            <p style={{ fontSize: '1.5em' }}>
            I am full of ideas.
            </p>
            <Checkbox.Group options={options} onChange={onChangeOPN10} />
          </Grid.Column>
          <Divider/>
      
        </Grid.Row>
      </Grid>
      <Button onClick={submitAnswer}><Link to = '/result'>Submit Your Answers</Link></Button>
    </Segment>

    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={4}>
              <Header inverted as='h4' content='Author' />
              <List link inverted>
                <List.Item as='a'>Lucas Li</List.Item>
                <List.Item as='a'>rucheng.li@vanderbilt.edu</List.Item>
                <List.Item as='a'>Vanderbilt University</List.Item>
                <List.Item as='a'>CS 3265</List.Item>
              </List>
            </Grid.Column>
            {/* <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column> */}
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
}

export default Question
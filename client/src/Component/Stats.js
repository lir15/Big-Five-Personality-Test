import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Switch } from 'react-router-dom'
import { Column} from '@ant-design/charts';
import { Select } from 'antd';
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
import { set } from '@antv/util';

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
      content='Statistics'
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
      content='This section displays some statistics of all the answer collected.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1em',
        fontWeight: 'normal',
        marginTop: mobile ? '1em' : '2em',
        marginBottom:'1em',
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

                <Menu.Item as='a'><Link to = '/question'>Take The Test</Link></Menu.Item>
                
                <Menu.Item as='a' ><Link to = '/result'>Result</Link></Menu.Item>

                <Menu.Item as='a' active><Link to = '/stats'>Stats</Link></Menu.Item>
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


const Stats = () =>{
    const { Option } = Select;
    const[time,setTime] = useState(0);
    const [answer, setAnswer] = useState(0);
function onChange(value) {
  axios.get('http://localhost:3002/searchquestion',{
      params: {question: value}
  }).then((response) =>{
    console.log(response.data[0])
    var temp = JSON.stringify(response.data[0]);
    if(value.length == 4){
        console.log(temp.substr(13,6))
        var a = parseFloat(temp.substr(13,6)) 
        console.log(a)
        setAnswer(a)
    }
    else if(value.length == 5){
        console.log(temp.substr(14,6))
        var a = parseFloat(temp.substr(14,6)) 
        console.log(a)
        setAnswer(a)
    }
  });
  axios.get('http://localhost:3002/searchtime',{
    params: {question: value}
}).then((response) =>{
  console.log(response.data[0])
  var temp = JSON.stringify(response.data[0]);
  if(value.length == 4){
      console.log(temp.substr(15,4))
      var a = parseFloat(temp.substr(15,4)) 
      console.log(a)
      setTime(a*0.001)
  }
  else if(value.length == 5){
      console.log(temp.substr(16,4))
      var a = parseFloat(temp.substr(16,4)) 
      console.log(a)
      setTime(a*0.001)
  }
});
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}
    return(
        <ResponsiveContainer>
          <Segment style={{ padding: '4em 0em' }} vertical>
          <Select
    showSearch
    style={{ width: 400 }}
    placeholder="Search A Question"
    optionFilterProp="children"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="EXT1">EXT1</Option>
    <Option value="EXT2">EXT2</Option>
    <Option value="EXT3">EXT3</Option>
    <Option value="EXT4">EXT4</Option>
    <Option value="EXT5">EXT5</Option>
    <Option value="EXT6">EXT6</Option>
    <Option value="EXT7">EXT7</Option>
    <Option value="EXT8">EXT8</Option>
    <Option value="EXT9">EXT9</Option>
    <Option value="EXT10">EXT10</Option>
    <Option value="EST1">EST1</Option>
    <Option value="EST2">EST2</Option>
    <Option value="EST3">EST3</Option>
    <Option value="EST4">EST4</Option>
    <Option value="EST5">EST5</Option>
    <Option value="EST6">EST6</Option>
    <Option value="EST7">EST7</Option>
    <Option value="EST8">EST8</Option>
    <Option value="EST9">EST9</Option>
    <Option value="EST10">EST10</Option>
    <Option value="AGR1">AGR1</Option>
    <Option value="AGR2">AGR2</Option>
    <Option value="AGR3">AGR3</Option>
    <Option value="AGR4">AGR4</Option>
    <Option value="AGR5">AGR5</Option>
    <Option value="AGR6">AGR6</Option>
    <Option value="AGR7">AGR7</Option>
    <Option value="AGR8">AGR8</Option>
    <Option value="AGR9">AGR9</Option>
    <Option value="AGR10">AGR10</Option>
    <Option value="CSN1">CSN1</Option>
    <Option value="CSN2">CSN2</Option>
    <Option value="CSN3">CSN3</Option>
    <Option value="CSN4">CSN4</Option>
    <Option value="CSN5">CSN5</Option>
    <Option value="CSN6">CSN6</Option>
    <Option value="CSN7">CSN7</Option>
    <Option value="CSN8">CSN8</Option>
    <Option value="CSN9">CSN9</Option>
    <Option value="CSN10">CSN10</Option>
    <Option value="OPN1">OPN1</Option>
    <Option value="OPN2">OPN2</Option>
    <Option value="OPN3">OPN3</Option>
    <Option value="OPN4">OPN4</Option>
    <Option value="OPN5">OPN5</Option>
    <Option value="OPN6">OPN6</Option>
    <Option value="OPN7">OPN7</Option>
    <Option value="OPN8">OPN8</Option>
    <Option value="OPN9">OPN9</Option>
    <Option value="OPN10">OPN10</Option>
  </Select>
      <Grid container stackable verticalAlign='middle'>
      <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em'}}>
            Average Answer For This Question
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            {answer}
            </p>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
            Average Time Spent On This Question
            </Header>
            <p style={{ fontSize: '1.33em'}}>
            {time} seconds
            </p>
          </Grid.Column>
        </Grid.Row>
        <Segment style={{ padding: '14em 0em' }} vertical></Segment>
        <Grid.Row>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2em', textAlign: 'left' }}>
            Openness
            </Header>
            <p style={{ fontSize: '1.33em', textAlign:'left' }}>
            Openness describes a person’s tendency to think in abstract, complex ways. High scorers tend to be creative, adventurous, and intellectual. They enjoy playing with ideas and discovering novel experiences. Low scorers tend to be practical, conventional, and focused on the concrete. They tend to avoid the unknown and follow traditional ways.<br/>

Openness is strongly related to a person’s interest in art and culture. People who are high in openness tend to enjoy the arts and seek out unusual, complex forms of self-expression. People who are low in openness are often suspicious of the arts and prefer to focus on more practical pursuits.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2em', textAlign: 'left' }}>
            Conscientiousness
            </Header>
            <p style={{ fontSize: '1.33em', textAlign: 'left' }}>
            Conscientiousness describes a person’s ability to exercise self-discipline and control in order to pursue their goals. High scorers are organized and determined, and are able to forego immediate gratification for the sake of long-term achievement. Low scorers are impulsive and easily sidetracked.<br/>

The concept of Conscientiousness focuses on a dilemma we all face: shall I do what feels good now, or instead do what is less fun but will pay off in the future? Some people are more likely to choose fun in the moment, and thus are low in Conscientiousness. Others are more likely to work doggedly toward their goals, and thus are high in this trait.

            </p>
          </Grid.Column>
          </Grid.Row>
          <Grid.Row>
        <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2em', textAlign:'left'}}>
            Extraversion

            </Header>
            <p style={{ fontSize: '1.33em', textAlign:'left'}}>
            Extraversion describes a person’s inclination to seek stimulation from the outside world, especially in the form of attention from other people. Extraverts engage actively with others to earn friendship, admiration, power, status, excitement, and romance. Introverts, on the other hand, conserve their energy, and do not work as hard to earn these social rewards. <br/>

Extraversion seems to be related to the emotional payoff that a person gets from achieving a goal. While everyone experiences victories in life, it seems that extroverts are especially thrilled by these victories, especially when they earn the attention of others. Getting a promotion, finding a new romance, or winning an award are all likely to bring an extrovert great joy. In contrast, introverts do not experience as much of a “high” from social achievements. They tend to be more content with simple, quiet lives, and rarely seek attention from others.
            </p>
          </Grid.Column>
          </Grid.Row>

          <Grid.Row>
        <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2em', textAlign:'left'}}>
            Agreeableness

            </Header>
            <p style={{ fontSize: '1.33em', textAlign:'left'}}>
            Agreeableness describes a person’s tendency to put others’ needs ahead of their own, and to cooperate rather than compete with others. People who are high in Agreeableness experience a great deal of empathy and tend to get pleasure out of serving and taking care of others. They are usually trusting and forgiving. <br/>

People who are low in Agreeableness tend to experience less empathy and put their own concerns ahead of others. Low scorers are often described as hostile, competitive, and antagonistic. They tend to have more conflictual relationships and often fall out with people.

            </p>
          </Grid.Column>
          </Grid.Row>
         
          <Grid.Row>
        <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2em', textAlign:'left'}}>
            Neuroticism

            </Header>
            <p style={{ fontSize: '1.33em', textAlign:'left'}}>
            Neuroticism describes a person’s tendency to experience negative emotions, including fear, sadness, anxiety, guilt, and shame. While everyone experiences these emotions from time to time, some people are more prone to them than others.

This trait can be thought of as an alarm system. People experience negative emotions as a sign that something is wrong in the world. You may be in danger, so you feel fear. Or you may have done something morally wrong, so you feel guilty. However, not everyone has the same reaction to a given situation. High Neuroticism scorers are more likely to react to a situation with fear, anger, sadness, and the like. Low Neuroticism scorers are more likely to brush off their misfortune and move on.
            </p>
          </Grid.Column>
          </Grid.Row>
         

      </Grid>
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
export default Stats;
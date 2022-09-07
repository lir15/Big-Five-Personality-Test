import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Switch } from 'react-router-dom'
import { Column } from '@ant-design/charts';
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
      content='Your Personality Trait Scores'
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
      content='This Big Five assessment measures your scores on five major dimensions of personality: Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism (sometimes abbreviated OCEAN). Check out your scores on each of the five dimensions in the graph below, then read on to discover what each score means.

'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1em',
        fontWeight: 'normal',
        marginTop: mobile ? '1em' : '2em',
        marginBottom:'1em',
        textAlign:'left'
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
                
                <Menu.Item as='a' active><Link to = '/result'>Result</Link></Menu.Item>

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


const Result = () =>{
  const [processed,switchProcess] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [avg_ans,setAvg] = useState([0,0,0,0,0])
  const [my_ans,setMy] = useState([0,0,0,0,0])
  const data = [
    {
      name: 'Your Answer',
      Question: 'Openness',
      Answer: my_ans[0],
    },
    {
      name: 'Your Answer',
      Question: 'Concientiousness',
      Answer: my_ans[1],
    },
    {
      name: 'Your Answer',
      Question: 'Extroverstion',
      Answer: my_ans[2],
    },


    {
      name: 'Your Answer',
      Question: 'Agreeableness',
      Answer: my_ans[3],
    },
    {
      name: 'Your Answer',
      Question: 'Neuroticism',
      Answer: my_ans[4],
    },
    {
      name: 'Average Answer',
      Question: 'Openness',
      Answer: avg_ans[0],
    },
    {
      name: 'Average Answer',
      Question: 'Concientiousness',
      Answer: avg_ans[1],
    },
    {
      name: 'Average Answer',
      Question: 'Extroverstion',
      Answer: avg_ans[2],
    },


    {
      name: 'Average Answer',
      Question: 'Agreeableness',
      Answer: avg_ans[3],
    },
    {
      name: 'Average Answer',
      Question: 'Neuroticism',
      Answer: avg_ans[4],
    },
  ];
  const config = {
    data,
    isGroup: true,
    xField: 'Question',
    yField: 'Answer',
    seriesField: 'name',

    color: ['#1ca9e6', '#f88c24'],

    marginRatio: 0.2,
    label: {
      position: 'middle',
      // 'top', 'middle', 'bottom'
      layout: [
        {
          type: 'interval-adjust-position',
        }, 
        {
          type: 'interval-hide-overlap',
        }, 
        {
          type: 'adjust-color',
        },
      ],
    },
  };
  const getResult = () =>{
    axios.get('http://localhost:3002/avganswers').then((response) =>{
      // setAvg(response.data[0])
      const res = JSON.stringify((response).data[0]).split(',')
      var temp = [0,0,0,0,0]
      for (let i = 0; i < 5; i++){
        var num = res[i].match(/\d/g)
        var digit = 10.0;
        for(let j = 0; j < num.length; j++){
          temp[i] += (num[j]*digit)
          var digit = digit / 10
        }
      }
      temp[3] = 31.1763
      setAvg(temp)
            switchProcess(true)
    });
    axios.get('http://localhost:3002/myanswers').then((response) =>{
      const res = JSON.stringify((response).data[0]).split(',')
      var temp = [0,0,0,0,0]
      for (let i = 0; i < 5; i++){
        var num = res[i].match(/\d/g)
        var digit = num.length > 1 ? 10 : 1;
        for(let j = 0; j < num.length; j++){
          temp[i] += num[j]*digit
          var digit = digit / 10
        }
      }
      setMy(temp)


    });
    setShowResults(true)

  }
    return(
        <ResponsiveContainer>
          
            { showResults ? null : <Segment style={{ padding: '4em 8em' }} vertical> <Button onClick = {getResult}>Ready to see your result? Click here!</Button> </Segment>}
            { showResults ? 
            <Segment style={{ padding: '4em 8em' }} vertical> <Header as='h3' style={{ fontSize: '2em', textAlign: 'left' }}>
            Your Result vs. Average Result (From 1000000+ Answers!)
            </Header>
            {!processed ? <Header as='h3' style={{ fontSize: '1.5em', textAlign: 'left' }}>
            Generating Reports...
            </Header> : <Column {...config} />}

            </Segment> : null }
   

          <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
       
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
export default Result;

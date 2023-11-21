import { useState, useEffect } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { Row, Col, Container, Button } from "react-bootstrap";
import './styles/about.scss'

import { useCookies } from "react-cookie";



function Strava(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [activities, setActivities] = useState({});
  const [cookies, setCookie, removeCookie] = useCookies(['strava-secret']);
  let map = [];

  const clientID = "113912";
  const clientSecret = props.dec_clientSecret;

  const refreshToken = props.dec_refreshToken;
  const refreshCall = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`;

  const activities_url = `https://www.strava.com/api/v3/athlete/activities?access_token=`;
  
  //pain
  

  // Use refresh token to get current access token
  useEffect(() => {
    fetch(refreshCall, {
      method: 'POST'
    })
    .then(res => res.json())
    .then(result => getActivities(result.access_token))
  }, [refreshCall]);

  function getActivities(access_token) {
    fetch(activities_url + access_token)
      .then(res => res.json())
      .then(data => setActivities(data), setIsLoading(prev => !prev))
      .catch(e => console.log(e));
  }

  function showActivities(){
    if(activities.message == "Authorization Error") { return []; }
    return (Object.keys(activities).length == 0) ? [] : activities;
  }

  // //Decode and display graph
  // function displayActivity(){
    
  //   let decPoly = "";
  //   let decoded = [];
  //   for(let i = 0; i < activities.length; i++){
  //     decPoly = polyline.decode(activities[i].map.summary_polyline);
  //     decoded.push(decPoly);
  //   }

  //   console.log(decoded)
  //   return decoded;
  // }

  function dateSet(time){
    let d = new Date(time);

    return(
      <li>
        Date: {d.getDate()}-{d.getMonth() + 1}-{d.getFullYear()} {d.getUTCHours()}:{d.getUTCMinutes()}
      </li>
    );
  }

  function length(length , activity){
    if(activity == "Swim"){
      return(
        <li>
          Distance: {length}m
        </li>
      )
    }
    else{
      length = length/1000;

      return(
        <li>
          Distance: {length.toFixed(2)}km
        </li>
      )
    }
  }

  function timeMins(time){
    console.log(time);
    let hours = Math.floor(time/3600);
    console.log(hours)
    time = time - 3600*hours;
    let mins = Math.floor(time/60);
    time = time - 60*mins;

    if(hours == 0){
      return(
        <li>
          Minutes: {mins} Seconds: {time}
        </li>
      )
    }
    else{
      return(
        <li>
          Hours: {hours} Minutes: {mins} Seconds: {time}
        </li>
      )
    }
  }

  function elevation(elv, type){
    if(type != "Swim"){
      return(
        <li>
          Elevation Gain: {elv}m
        </li>
      )
    }
  }

  const deleteCookie = () => {
    removeCookie("strava-secret");
  }
  
  return (
    <div className="App">
      {(isLoading)
        ? <p>LOADING</p>
        : showActivities().map((data, key) => {
          return(
            <ListGroup.Item key={key}>
              <Row>
                <Col >
                  <h4 className="left-about">{data.name}</h4>
                </Col>
                <Col>
                  <h4 className="right-about">{data.type}</h4>
                </Col>
              </Row>
              <Row>
                <ul className="list-strava">{length(data.distance, data.type)}  {timeMins(data.moving_time)}  {elevation(data.total_elevation_gain, data.type)} {dateSet(data.start_date_local)}</ul>
              </Row>
              
            </ListGroup.Item>
          )
        })}
      <Button className="button-contact" onClick={deleteCookie}>Retry Secret</Button>
    </div>
  );
}

export default Strava;
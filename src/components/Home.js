import React from 'react'
import singing from '../assets/images/singing.png'
import cyber from '../assets/images/cyber.png'
import creative from '../assets/images/creative-writing.png'
import image from '../assets/images/Designer.png' 
import running from '../assets/images/Running.png'
import art from '../assets/images/art.png'
import photo from '../assets/images/photography.png'
import Footer from './Footer'
const Home = () => {
  return (
    <div className='App-body'>
        <div className='intro-page'>
         <div className='quote'>
        <p>CHALLENGE</p>
        <p>COMPETE</p>
        <p> CONQUER</p>
        </div>
      <img src={image} className='image'alt="image"/>
      </div>
      
      <div className="anticipated-events">
              <div className="anticipated-events-header">
                <p className='anticipated-events-header-title'>Most Anticipated Events</p>
                <p className='anticipated-events-header-phrase'>Get ready to have Fun</p>
              </div>

              <div className="anticipated-events-body">
              <div className="anticipated-event-card">
                <div className="event-image">
                  <img className='anticipated-image' src={singing} alt="Event"/>
                </div>
                <div className="event-info">
                  <div className='event-title'>
                  <p>Silent Wanderer</p>
                  </div>
                  <div className='event-description'>
                  <p>Broken Souls wander in the dark nights where the choir makes them feel better.Make them feel Better with your voice.</p>
                  </div>
                  <button className='register'>Register</button>
                </div>
              </div>
              <div className="anticipated-event-card">
                <div className="event-image">
                  <img className='anticipated-image' src={cyber} alt="Event"/>
                </div>
                <div className="event-info">
                  <div className='event-title'>
                  <p>Cyber Alarms</p>
                  </div>
                  <div className='event-description'>
                  <p>Cybersecurity: More Than Just a Buzzword – It’s Our Mission!</p>
                  </div>
                  <button className='register'>Register</button>
                </div>
              </div>
              <div className="anticipated-event-card">
                <div className="event-image">
                  <img className='anticipated-image' src={creative} alt="Event"/>
                </div>
                <div className="event-info">
                  <div className='event-title'>
                  <p>Creative Writing</p>
                  </div>
                  <div className='event-description'>
                  <p>Unleash your imagination and pen your best stories, poems, or essays. Compete for prizes and recognition while sharing your unique voice with others.</p>
                  </div>
                  <button className='register'>Register</button>
                </div>
              </div>
              </div>

              <button className='events-button'>View All Events</button>
      </div>
            <div className='latest-events'>
            <div className="anticipated-events-header">
                <p className='anticipated-events-header-title'>Upcoming Events</p>
                <p className='anticipated-events-header-phrase'>Brace Yourselves</p>
              </div>
            <div className='latest-events-body'>
              <div className='latest-events-card'>
              <div className='latest-events-image'>
                <img className="latest-image"src={running} alt="event"/>
              </div>
          <div className='latest-events-info'>
              <div className='latest-event-title'>
              <p>Running</p>
              </div>
              <div className='latest-event-description'>
              <p>Celebrate your artistic spirit by submitting your original artwork in any medium. Whether it’s painting, drawing, or digital art, showcase your unique style and creativity. </p>
              </div>
          </div>
          <button className='know-more'>Know More</button>
              </div>
              <div className='latest-events-card'>
              <div className='latest-events-image'>
                <img className="latest-image"src={art} alt="event"/>
              </div>
          <div className='latest-events-info'>
              <div className='latest-event-title'>
              <p>Create Your Art</p>
              </div>
              <div className='latest-event-description'>
              <p>Celebrate your artistic spirit by submitting your original artwork in any medium. Whether it’s painting, drawing, or digital art, showcase your unique style and creativity. </p>
              </div>
          </div>
          <button className='know-more'>Know More</button>
              </div>
              <div className='latest-events-card'>
              <div className='latest-events-image'>
                <img className="latest-image"src={photo} alt="event"/>
              </div>
          <div className='latest-events-info'>
              <div className='latest-event-title'>
              <p>PhotoGraphy</p>
              </div>
              <div className='latest-event-description'>
              <p>Celebrate your artistic spirit by submitting your original artwork in any medium. Whether it’s painting, drawing, or digital art, showcase your unique style and creativity. </p>
              </div>
          </div>
          <button className='know-more'>Know More</button>
              </div>
            </div>
            <button className='events-button'>View All Events</button>
            </div>
            <hr/>
            <Footer/>
      </div>
      
  )
}

export default Home
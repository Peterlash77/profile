import React from 'react'
import {Link} from 'react-router-dom';
import "./Navbar.css"
import peter from '../Image/peterlashbg.png'
import php from'../icon/php.png'
import linkedin from'../icon/linkedin.png'
import twitter from'../icon/twitter.png'
import windows from'../icon/windows.png'
import js from'../icon/js.png'
import Python from'../icon/python.png'
import wordpress from'../icon/wordpress.png'
import HTML from'../icon/html5.png'
import Vector from'../icon/Vector.png'
import Vector1 from'../icon/Vector (1).png'
import Vector2 from'../icon/Vector (2).png'
import Vector3 from'../icon/Vector (3).png'
import Vector4 from'../icon/Vector (4).png'
import Vector5 from'../icon/Vector (5).png'
import Vector6 from'../icon/Vector (6).png'
import Vector7 from'../icon/Vector (7).png'
import eight from'../icon/Vector (8).png'
import femi from'../icon/Ellipse6.png'
import th from'../icon/th.jpg'
import tele from'../icon/tele.jpg'

const Navbar = () => {
  return (
    <div>
      <div className='container'>
        <div>
          <ul >
            <li className='Home'><Link style={{color: 'black',textDecoration:'none'}} to='/'><b>Peter Olaosebikan</b></Link></li>
            <li className='About'><Link style={{color: 'black', textDecoration:'none'}} to='/About'>About</Link></li>
            <li className='Service'><Link style={{color: 'black',textDecoration:'none'}} to='/Service'>Service</Link></li> 
            <li className='Project'><Link style={{color: 'black',textDecoration:'none'}} to='/Project'>Projects</Link></li> 
            <li className='Contact'><Link style={{color: 'black',textDecoration:'none'}} to='/Contact'>Contact </Link></li>     
          </ul>
          <div className='introduce'>
            <h6 className='pat'>hi there</h6>
            <p className='left1'>I AM PETER OLAOSEBIKAN</p>
            <h3 className='left2'> A TOP-NOTCH DEVELOPER, WRITER AND MENTOR.</h3>
            </div>
          </div>
          
          <div >
            <div className='top-icon'>
            <img  className='linkedin' src={linkedin}alt=''/>
            <img className='twitter' src={twitter}alt=''/>
            </div>
            <div className='peter'><img src={peter} style={{height: '500px', width:'600px',backgroundColor: '#D3DCF8'}}    alt=''/></div>
          </div>
          </div>
      <div className='top'>
        <h1 className='About-me'>About Me</h1>
        <p className='text'>Peter Olaosebikan is a passionate and a goal driven Techprenuer whose interest is in using technology to bring solutions to solve real world problems</p>
        <div className='carry'>
          <img  className='linkedin' src={linkedin}alt=''/>
            <img className='twitter' src={twitter}alt=''/>
          </div>
      </div>

      <div className='phase3'>
        <h1 className="Skills">My Skills</h1>
        <p className='possess'>Here are a few skills i possess</p>
        <div className='all-skills'>
          <div className='left'>
            <div>
              <div className='php'>PHP</div>
            <img src={php}alt=''/><input className='range' type="range" min="-90" max="100" ></input><br/>
            <div className='js'>Js</div><img src={js}alt=''/> <input className='range' type="range" min="-90" max="100" ></input></div><br/>
            <div className='windows'>windows</div><img src={windows}alt=''/> <input className='range' type="range" min="-90" max="100" ></input><br/>
            </div>
          <div className='right'>
            <div className='python'>Python</div><img src={Python}alt=''/> <input className='range' type="range" min="-90" max="100" ></input><br/>
            <div className='wordpress'>WordPress</div><img src={wordpress}alt=''/> <input className='range' type="range" min="-90" max="100" ></input><br/>
            <div className='html'>Html</div><img src={HTML}alt=''/> <input className='range' type="range" min="-90" max="100" ></input><br/>
          </div>
        </div>
      </div>
      <div>
        <div className='phase4'>
          <h1 className='render'>Services I Render.</h1>
          <div className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sollicitudin tellus. Phasellus ac nisi augue.</div>
        </div>
        <div className="phase5">
          <div className='first'>
          <div className='one'><img src={Vector}alt=''/>
          <h5 className='middle'>Training</h5>
          <p className='last'>Offer instructor led training in a way that fit with the way you work</p>
          </div>
          <div className='fur'><img src={Vector3}alt=''/>
          <h5 className='middle'>Database Development</h5>
          <p className='last'>With equipped skills of developing and maintaining databases i could  help develop scalable and optimized databases for your organization.</p>
          </div>
          <div className='seven'><img src={Vector6}alt=''/>
          <h5 className='middle'>Saas Development</h5>
          <p className='last'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sollicitudin tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sollicitudin tellus.</p>
          </div>
          </div>
          <div className='second'>
          <div className='two'><img src={Vector1}alt=''/>
          <h5 className='middle'>IT Consulting</h5>
          <p className='last'>I offer Information technology consulting as a field of activity focused on advising organizations on how best to use information technology in achieving their business objectives.</p>
          </div>
          <div className='five'><img src={Vector4}alt=''/>
          <h5 className='middle'>Customer Software Development</h5>
          <p className='last'>I help develop tehnical solutions in form of softwarres that answer to the needs of customer's problems.</p>
          </div>
          <div className='eight'><img src={Vector7}alt=''/>
          <h5 className='middle'>Technical Writing</h5>
          <p className='last'>I help channel and transfer information between two or more parties, through any medium that best facilitates the transfer and comprehension of the information.</p>
          </div>
          </div>
          <div className='third'>
          <div><img src={Vector2}alt=''/>
          <h5 className='middle3'>Responsive Web Design</h5>
          <p className='last'>I Help design Mobile-friendly, worldclass websites that helps scales your bussiness and helps user experience get better.</p>
          </div>
          <div className='six'><img src={Vector5}alt=''/>
          <h5 className='middle6'>Software Testing</h5>
          <p className='last'>I help test softwares ready for production to fish out bugs and give advice on how to make it scalable, usable and enterprise-friendly. </p>
          </div>
          <div className='nine'><img src={eight}alt=''/>
          <h5 className='middle'>Web Development</h5>
          <p className='last'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sollicitudin tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sollicitudin tellus.</p>
          </div>
          </div>
        </div>
      </div>
      <div className='phase6'>
        <div>
          <h3 className='milestone'>Milestones of Projects</h3>
          <p  className='mileston1'>Here are a few  people and projects i've patnered and worked on.</p>
          <div className='colors'>
            <div className='cola'>
              <div className='color1'>
                  <h3 className='title'>Project Title 1</h3>
                  <p className='andriod'>Android, IoT</p>
              </div>
              <div className='cole'>
                <div className='color3'>
                  <h3 className='title'>Co-Founder @ZURI Internship 3</h3>
                  <p className='andriod'>Web, PHP, Python</p>
                </div>
                <div className='color4'>
                  <h3 className='title'>Co-Fouder HNG internship 4</h3>
                </div>
              </div>
              
            </div>
            <div className='cola'>
            <div className='color2'>
                <h3 className='title'>Project Title 2</h3>
                <p className='andriod'>Android, IoT</p>
              </div>
              <div>
                <div className='color5'>
                <h3 className='title'>Project Title 5</h3>
                <p className='andriod'>Android, IoT</p>
              </div>
                <div className='color6'>
                  <h3 className='title'>Project Title 6</h3>
                  <p className='andriod'>Android, IoT</p>
                </div>
            </div>
              

            </div>
          </div>
            
            
        </div>
      </div>
      <div className='phase7'>
        <div className='testimony'><h4 className= 'testy'>Testimonies and Recommendations</h4></div>
       
          <div className='four'>
            <div>
              <div><img  className='femi' src={femi}alt=''/></div>
              <h3  className='femi1'>Aderiye Taiwo</h3>
              <p className='femi2'>Peter gets things done. He's very passionate about what he does and he's always fun to be with.</p>
              <div><img  className='femi' src={femi}alt=''/></div>
              <h3  className='femi1'>Mike Kadiri</h3>
              <p className='femi2'>Peter gets things done. He's very passionate about what he does and he's always fun to be with.</p>
            </div>
            <div>
              <div><img  className='femi' src={femi}alt=''/></div>
              <h3  className='femi1'>Jade Adeyemi</h3>
              <p className='femi2'>Peter gets things done. He's very passionate about what he does and he's always fun to be with.</p>
              <div><img  className='femi' src={femi}alt=''/></div>
              <h3  className='femi1'> Chisom Nwanyi</h3>
              <p className='femi2'>Peter gets things done. He's very passionate about what he does and he's always fun to be with.</p>
            </div>
          </div>
      </div>
      <div className='phase8'>
              <div className='touch'>
                <h2>Get In Touch.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sollicitudin tellus. Phasellus ac nisi augue.</p>
                <div className='carry2'>
                <img  className='linked' src={linkedin}alt=''/>
                <img className='twit' src={twitter}alt=''/>
                <h3 className='xy'>- Peter_Lash</h3>
                </div>
                <div className='contact'>
                <div className='div1'>
                  <div><img className='tele' src={tele}alt=''/></div>
                 <div className='number'><i><b>08141386096 </b></i><br/> Send a message Anytime!</div>
                 </div>
                <div className='div2'>
                  <div><img  className='th' src={th}alt=''/></div>
                <div className='email'><i><b>Peterlash31@gmail.com</b></i></div>
                </div>
                </div>
              </div>
              <div className='form'>
                <div>
                  <h2 className='serv'>Need a Service</h2>
                  <h1 className='mess'>Send a Message</h1>
                </div>
                <div>
                  <label  for="text" className='tex'>Enter Full Name:</label><br/>
                  <input style={{width: '500px', height:'25px'}} type="text"  name="fname"></input><br/> <br/>
                  <label for="text" className='tex'>Enter Email Address:</label><br/>
                  <input style={{width: '500px', height:'25px'}} type="text"  name="fname"></input><br/> <br/>
                  <label for="text" className='tex'>Enter Phone Number:</label><br/>
                  <input style={{width: '500px', height:'25px'}} type="text"  name="fname"></input><br/> <br/>
                  <label for="text" className='tex'>Enter a Message:</label><br/>
                  <input style={{width: '500px', height:'25px'}} type="text"  name="fname"></input><br/> <br/>
                  <input type="submit" className='submit' value="Submit"></input>
                </div>
              </div>
            </div>
            <div className='footer'>
              <div className='tee'>
                <div className='line' style={{width: '450px', height:'5px'}}></div>
                <div className='fname'>Peter Olaosebikan</div>
                <div className='line' style={{width: '450px', height:'5px',}}></div>
              </div>
              <div>
                <img  className='linked' src={linkedin}alt=''/>
                <img className='twit' src={twitter}alt=''/>
              
              </div>
              <div className='copyright'>
              Copyright Ⓒ 2021  |  All rights Reserved
              </div>
              
            </div>
    </div>
  )
}

export default Navbar
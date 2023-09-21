import app2 from '../assets/app2.jpg'
import googlePlay from '../assets/googlePlay.png'
import logo from '../assets/logo.png'
import faceBook from '../assets/faceBook.png'
import '../App.css'
import './login.css'
const LogIn = () => {
    return ( 
        <div className="login_container">
            <div className="box_1">
             
                <img src={logo} alt='' className='instagram_logo'/>
               
               
                <div className='input_box'>
                    <input  type='text' placeholder='Phone Number, UserName,Email Adress'/>
                </div>
                <div className='input_box'>
                    <input type='password'  />
                </div>
                <div className='login_button_box'>
                    <button className='login_button'>Log IN</button>
                </div>
                <div className='lines_box'>
                    <div className='line_1'></div>
                    <div className='or'>oR</div>
                    <div className='line_2'></div>
                </div>
                <div className='fb_link'>
                    <span>
                        <img src={faceBook} alt='#' className='fb_logo'/>
                    </span>
                    <p className='fb-link'>Log In With Facebook</p>
                </div>
                <div className='forgatten_password_box'>
                    <p className='forgatten_password_link'>Forgatten Your Password</p>
                    </div>
            </div>
            <div className="box_2">
                <p>dont have an account?<span>sign in</span></p>
            </div>
            <div className="get_app_box">
                <p>Get the APP</p>
            </div>
            <div className="app_store_google_play">
            <img src={app2} alt='' className='app2'/>
            <img src={googlePlay} alt='' className='googlePlay'/>
            </div>

        </div>
     );
}
 
export default LogIn;
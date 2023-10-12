import React from 'react'
import './Profile.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined'
import SettingsIcon from '@mui/icons-material/Settings'
import VideoCameraFrontRoundedIcon from '@mui/icons-material/VideoCameraFrontRounded'
import { AuthCountext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import { useThemeContext } from '../../context/ThemeContext'
function Profile() {
  const { user } = AuthCountext()
  const theme = useThemeContext()
  const darkMode = theme.darkMode
  return (
    <div className={`${darkMode ? 'profileColorDark' : 'profileColorLight'}`}>
      <header>
        <span>
          <Link to='/homepage' className='home-button'>
            <span>Home</span>
          </Link>
        </span>
        <div className='container'>
          <div className='profile'>
            <div
              className='p'
              style={{ display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'start', alignItems: 'start' }}
            >
              <div className='profile-image'>
                <img src='./images/profile.png' alt='user' />
              </div>
              <div className='profile-user-settings'>
                <h1 className='profile-user-name'>{user[0].userName}</h1>
                <button className='btn profile-edit-btn'>Edit Profile</button>
                <button className='btn profile-settings-btn' aria-label='Profile Settings'>
                  <SettingsIcon aria-aria-hidden />
                </button>
              </div>
              <div className='profile-bio '>
                <span className='profile-real-name'> Enjoy your moments 🇨🇦🌕📖⛹</span>
              </div>
            </div>

            <div className='profile-stats'>
              <ul>
                <li>
                  <span className='profile-state-count'>164</span>posts
                </li>
                <li>
                  <span className='profile-state-count'>1984</span>followers
                </li>
                <li>
                  <span className='profile-state-count'>16764</span>following
                </li>
              </ul>
            </div>

            {/* // */}
          </div>
          {/* end of profile section */}
        </div>
      </header>

      {/* end of the container */}
      <main>
        <div className='container'>
          <div className='gallery'>
            <div className='gallery-item' tabIndex='0'>
              <img src='./images/pic1.png' alt='gallery-1' className='gallery-image ' />
              <div className='gallery-item-type'>
                <span className='visually-hidden'>video</span>
                <FileCopyOutlinedIcon className='fa' aria-hidden />
              </div>
              <div className='gallery-item-info'>
                <ul>
                  <li className='gallery-item-likes'>
                    <span className='visually-hidden'>likes:</span>
                    342
                    <FavoriteBorderIcon aria-hidden />
                  </li>
                  <li className='gallery-item-comments'>
                    <span className='visually-hidden'>comments:</span>
                    432
                    <ChatBubbleOutlineIcon className='fa' aria-hidden />
                  </li>
                </ul>
              </div>
            </div>

            <div className='gallery-item' tabIndex='0'>
              <img src='./images/pic3.png' alt='gallery-1' className='gallery-image' />
              <div className='gallery-item-type'>
                <span className='visually-hidden'>video</span>
                <VideoCameraFrontRoundedIcon className='fa' aria-hidden />
              </div>
              <div className='gallery-item-info'>
                <ul>
                  <li className='gallery-item-likes'>
                    <span className='visually-hidden '>likes:</span>
                    56
                    <FavoriteBorderIcon />
                  </li>
                  <li className='gallery-item-comments'>
                    <span className='visually-hidden '>comments:</span>
                    76
                    <ChatBubbleOutlineIcon className='fa' aria-hidden />
                  </li>
                </ul>
              </div>
            </div>

            <div className='gallery-item' tabIndex='0'>
              <img src='./images/pic2.png' alt='gallery-1' className='gallery-image' />
              <div className='gallery-item-type'>
                <span className='visually-hidden'>video</span>
                <FileCopyOutlinedIcon className='fa' aria-hidden />
              </div>
              <div className='gallery-item-info'>
                <ul>
                  <li className='gallery-item-likes'>
                    <span className='visually-hidden '>likes:</span>
                    478
                    <FavoriteBorderIcon />
                  </li>
                  <li className='gallery-item-comments'>
                    <span className='visually-hidden '>comments:</span>
                    4<ChatBubbleOutlineIcon className='fa' aria-hidden />
                  </li>
                </ul>
              </div>
            </div>

            <div className='gallery-item' tabIndex='0'>
              <img src='./images/pic4.png' alt='gallery-1' className='gallery-image' />
              <div className='gallery-item-type'>
                <span className='visually-hidden'>video</span>
                <VideoCameraFrontRoundedIcon className='fa' aria-hidden />
              </div>
              <div className='gallery-item-info'>
                <ul>
                  <li className='gallery-item-likes'>
                    <span className='visually-hidden '>likes:</span>
                    478
                    <FavoriteBorderIcon />
                  </li>
                  <li className='gallery-item-comments'>
                    <span className='visually-hidden '>comments:</span>
                    4<ChatBubbleOutlineIcon className='fa' aria-hidden />
                  </li>
                </ul>
              </div>
            </div>

            <div className='gallery-item' tabIndex='0'>
              <img src='./images/pic5.png' alt='gallery-1' className='gallery-image' />
              <div className='gallery-item-info'>
                <ul>
                  <li className='gallery-item-likes'>
                    <span className='visually-hidden '>likes:</span>
                    478
                    <FavoriteBorderIcon />
                  </li>
                  <li className='gallery-item-comments'>
                    <span className='visually-hidden '>comments:</span>
                    4<ChatBubbleOutlineIcon className='fa' aria-hidden />
                  </li>
                </ul>
              </div>
            </div>

            <div className='gallery-item' tabIndex='0'>
              <img src='./images/pic6.png' alt='gallery-1' className='gallery-image' />
              <div className='gallery-item-info'>
                <ul>
                  <li className='gallery-item-likes'>
                    <span className='visually-hidden '>likes:</span>
                    478
                    <FavoriteBorderIcon />
                  </li>
                  <li className='gallery-item-comments'>
                    <span className='visually-hidden '>comments:</span>
                    4<ChatBubbleOutlineIcon className='fa' aria-hidden />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* //end of gallery */}
        </div>
        <div className='loader'></div>
      </main>
    </div>
  )
}

export default Profile

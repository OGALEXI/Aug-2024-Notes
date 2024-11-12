import './ProfilePage.css'
import catImg2 from '../../assets/IMG_8637.jpg'

function ProfilePage({ firstname, lastname}) {

    return (
      <>
        <div id="prof-box">
        <h1>Welcome to my crib</h1>
        <img id="cat-img2" src={catImg2}/>
        </div>
        <p>My name is {firstname} {lastname}</p>
        
      </>
    )
  }
  
  export default ProfilePage
  
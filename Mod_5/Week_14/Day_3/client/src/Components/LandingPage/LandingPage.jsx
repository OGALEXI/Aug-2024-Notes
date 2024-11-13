import './LandingPage.css'
import debrasCat from '../../assets/IMG_8641.jpg'

function LandingPage({ catName, sonName}) {


    return (
      <div id="lp-container">
        <h1>Welcome, I'm Debra and I looove to cook.</h1>
        <section id="db-about-me">
            <img src={debrasCat}/>
            <p>"My cat's name is {catName} and my son's name is {sonName}. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
        </section>
      </div>
    )
}
  
export default LandingPage
  
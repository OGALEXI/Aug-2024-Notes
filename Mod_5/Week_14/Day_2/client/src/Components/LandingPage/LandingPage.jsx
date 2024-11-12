import Stats from "./Stats"
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

function LandingPage() {
    const navigate = useNavigate();

    const catClick = () => {
        navigate('/cats')
    }


    return (
      <div>
        <h1>LandingPage</h1>

        <button onClick={catClick}>Go to Cats</button>
        <Stats />
      </div>
    )
}
  
export default LandingPage
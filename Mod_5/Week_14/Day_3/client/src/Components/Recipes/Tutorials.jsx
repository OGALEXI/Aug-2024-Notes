import { useState, useEffect } from "react"

function Tutorials() {
    let [count, setCount] = useState(0);
    let [count2, setCount2] = useState(0)
    // let [catsArr, setCatsArr] = useState([]);

    // let fetchCats = async () => {
    //   let cats = fetch('http://blala')
    //   setCatsArr(cats)
    // }

    useEffect(() => {
      // fetchCats()
      console.log("EXECUTED")
    }, [count])
    
    return (
      <div id="tut-box">
        <h1>Tutorials</h1>
        <button onClick={() => setCount(count + 1)}>{count} +</button>
        <button onClick={() => setCount2(count2 + 1)}>{count2} +</button>
        {/* {
          cats.map
        } */}
      </div>
    )
}
  
export default Tutorials
  
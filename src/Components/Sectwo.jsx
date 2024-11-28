import sec from "../assets/images/sec.jpg";
import logo from "../assets/images/logo.jpg"


function Sectiontwo()
{
    return(
        <>
         <div className="sec-2">
        <img src={sec} width="100%"></img>

        <div className="sec-2_content">
            <h1>Bullet 350</h1>

            <img className="logo" src={logo} width="70px"></img>

            <button>Explore <i id="slider-right-activate" className={"fa-solid fa-angle-right"}
                    style={{color: "#0a0a0a", padding: "1px",margin:"2px"}}></i></button>
        </div>


    </div>


        </>
    )
}


export default Sectiontwo
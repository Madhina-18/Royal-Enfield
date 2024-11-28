import sec3 from "../assets/images/sec3.jpg";

function Sectionfive()
{
    return(
        <>
        <div className="sec-5">
        <img src={sec3} width="100%"></img>

        <div className="sec-5_content">
            <h1>Classic 650</h1>
            <button> Explore <i id="slider-right-activate" className={"fa-solid fa-angle-right"}
                    style={{color: "#0a0a0a" , margin:"2px"}}></i></button>
        </div>


    </div>
        
        </>
    )
}

export default Sectionfive
import sec2 from "../assets/images/sec2.jpg";

function Sectionfour()
{
     return(
        <>
          <div className="sec-4">
        <img src={sec2} width="100%"></img>

        <div className="sec-4_content">

            <button> Bynow <i id="slider-right-activate" className={"fa-solid fa-angle-right"}
                    style={{color: "#0a0a0a", padding: "1px;", margin:"2px"}}></i></button>
        </div>


        <div className="sec_4_s">
            <div className="sec-4_sub">
                <p>Accessories | </p>
                <p>Geniue Motorcycles Accessories | </p>
                <p>Make it Yours | </p>
                <p> Royal Enfield X Alpinestar | </p>
                <p> Royal Enfield x TCX | </p>
                <p> MIY Riding Jacket </p>


            </div>
        </div>


    </div>


        </>
     )
}

export default Sectionfour
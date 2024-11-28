import sec1 from "../assets/images/sec1.jpg";



function Sectionthree()
{
    return(
        <>
         <div className="sec-3">
        <img src={sec1} width="100%"></img>

        <div className="sec-3_content">
            <h1>There is One Near You </h1>
            <button> Find a Store <i id="slider-right-activate" className={"fa-solid fa-angle-right"}
                    style={{color: "#0a0a0a" , padding: "1px",margin:"1px"}}></i></button>
        </div>


        <div className="sec_3_s">
            <div className="sec-3_sub">
                <h2>Locate Us</h2>
                <p>Goa Garage Cafe | </p>
                <p>Genuine Parts Distributors | </p>
                <p>Service Centres | </p>
                <p> Stores</p>
               

            </div>
        </div>



    </div>

        
        </>
    )
}

export default Sectionthree
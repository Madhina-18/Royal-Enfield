
import one from "../assets/images/one.jpg" 

function Slider() {
    return (
        <>
            <div className="slider">

                <div className="slider-left-button">
                    <i id="slider-left-activate" className="fa-solid fa-angle-left" style={{color: "#030303"}}></i>
                </div>


                <div className="slider_content">
                    <h1>Lets Start Your Journey</h1>


                    <div className="slider_btns" >
                        <button style={{margin:"10px"}} >Knowmore</button>
                        <button>Register</button>
                    </div>

                </div>

                <div className="slider_image_container">
                    <img className="slider_image" src={one} width="100%" alt=""></img>

                </div>

                <div className="slider-right-button">
                    <i id="slider-right-activate" class="fa-solid fa-angle-right" style={{color: "#0a0a0a"}}></i>
                </div>


            </div>


        </>
    )

}

export default Slider
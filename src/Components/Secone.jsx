import s1 from "../assets/images/s1.jpg";
import s21 from "../assets/images/s21.jpg";
import s3 from "../assets/images/s3.jpg";
import s4 from "../assets/images/s4.jpg";
import s5 from "../assets/images/s5.jpg";
import s6 from "../assets/images/s6.jpg";



function Sectionone()
{
     return(
     
     <>
     <div className="sec-1">
        <h1>News and Media</h1>

        <div className="sec-1_container">

            <div className="sec_img">
                <img src={s1} width="400px"></img>
            </div>

            <div className="sec_img">
                <img src={s21} width="400px"></img>
            </div>

            <div className="sec_img">
                <img src={s3} width="400px"></img>
            </div>

            <div className="sec_img">
                <img src={s4} width="400px"></img>
            </div>

            <div className="sec_img">
                <img src={s5} width="400px"></img>
            </div>

            <div className="sec_img">
                <img src={s6} width="400px"></img>
            </div>



        </div>

        <div className="sub">
            <h1>Motorcycles</h1>
            <div className="sub_titles">
                <p>New Himalayan</p>
                <p>Bullet 350 </p>
                <p>Guerrilla 450 </p>
                <p>Interceptor 650 </p>
                <p> Hunter 350 </p>
                <p> Scram 411 </p>
                <p> Meteor 350 </p>
                <p>Bear 650</p>
                <p> Classic 350</p>
                <p>Shotgun 650</p>

            </div>
        </div>
    </div>

     </>)
}


export default Sectionone
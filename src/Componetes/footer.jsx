import React from "react";
import '../estilos/footer.css';
import { GrBitcoin } from "react-icons/gr";
import { AiFillFacebook } from "react-icons/ai";

  



const footer=()=>{
    return(
        <footer class="pie">
    
        <div class="header">
            <div class="logo">
                <img src="logo.png" alt=""/>
                <p class="logotipo">Informatica Studios</p>
            </div>
            <div class="redes">
                <span className="fb"><GrBitcoin/></span>
                <span className="tw"><AiFillFacebook/></span>
                <span className="in"><i class="fa-brands fa-instagram"></i></span>
                <span class="li"><i class="fa-brands fa-linkedin"></i></span>
                <span class="yt"><i class="fa-brands fa-youtube"></i></span>
             
               
            </div>
        </div>
        <hr/>
        <div class="section">
            <div>
                <h2>Company</h2>
                <a href="#">Home</a>
                <a href="#">Contac Us</a>
                <a href="#">About Us</a>
                <a href="#">GetStarted</a>
            </div>
            <div>
                <h2>Services</h2>
                <a href="#">App Design</a>
                <a href="#">Web Design</a>
                <a href="#">Logo Design</a>
                <a href="#">Banner Design</a>
            </div>
            <div>
                <h2>Account</h2>
                <a href="#">Profile</a>
                <a href="#">My Account</a>
                <a href="#">Preferences</a>
                <a href="#">Purchase</a>
            </div>
            <div>
                <h2>Courses</h2>
                <a href="#">Html y Css</a>
                <a href="#">JavaScript</a>
                <a href="#">Photography</a>
                <a href="#">Photoshop</a>
            </div>
            <div>
                <h2>Suscribe</h2>
                <form action="">
                    <input type="text" placeholder="Enter your Email"/>
                    <button type="submit">Suscribe</button>
                </form>
            </div>
        </div>
        <div class="derechos">
            <p>Copyright©2022Informatica Studios. All right reserved</p>
            <p>Privacy Policy  Terms and conditions</p>
        </div>
    </footer>
    )
}

export default footer;
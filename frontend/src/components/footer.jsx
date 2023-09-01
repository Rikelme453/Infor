import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import img from '../assets/face.svg'

function Footer(){
    return(
            <>
            
            <footer>
<div class="footer">
<div class="row">
<a href="#"><img src={img} alt="" draggable="false" /></a>
<a href="#"><i class="fa fa-instagram"></i></a>
<a href="#"><i class="fa fa-youtube"></i></a>
<a href="#"><i class="fa fa-twitter"></i></a>
</div>

<div class="row">
<ul>
<li><a href="#">Contato</a></li>
<li><a href="#">Outros Serviços</a></li>
<li><a href="#">Política & Privacidade</a></li>
<li><a href="#">Termos & Condições</a></li>
<li><a href="#">Quem Somos?</a></li>
</ul>
</div>

<div class="row">
CME Copyright © 2023 CME - All rights reserved || Designed By: Ruivo
</div>
</div>
</footer>



            </>
    )
}

export default Footer
import './legs.css'
import linkedin from "./assets/images/image 1.png"
import insta from "./assets/images/image 2.png"

function Leg7() {

  return (
<div id='hi3'>
<p id='vairasText5'>Contact me</p>
<section id='contactSection'>

<section>
<img src={linkedin} id='contactImages'></img>
<p id='link'>@salvinastaukevicius</p>
<a href="https://www.linkedin.com/in/salvinas-taukevičius-3b2265167/">
  <button id='connectButtons'>+ Connect</button>
</a>
</section>

<section>
<img src={insta} id='contactImages'></img>
<p id='link'>@chadv1nas</p>
<a href="https://www.instagram.com/chadv1nas/">
  <button id='connectButtons'>+ Follow</button>
</a>

</section>

</section>




</div>
  );
};

export default Leg7;

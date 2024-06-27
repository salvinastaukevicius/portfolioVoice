import './legs.css'
import face from './assets/images/face2.png'
import steps from './assets/images/steps.png';

function Leg5() {

  return (
<div id='hi3'>
<p id='vairasText5'>Step tracker</p>
<img src={steps} id='imageVairas'></img>
<section id='vairasSizer'>
<p id='vairasText4'>Personal PWA project that tracks your steps, This app fetches data from your own google fitness API and showcases it in different graphs.  </p>
</section>
<a href="https://git.fhict.nl/I481136/S4-smart-mobile/-/tree/main/PWA/Healthtracker">
  <button id='more'>Git</button>
</a>


</div>
  );
};

export default Leg5;

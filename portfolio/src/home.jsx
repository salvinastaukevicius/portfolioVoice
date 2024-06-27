import './home.css'
import ScrollCircle from './ScrollCircle'
import MyVoiceSection from './MyVoiceSection'
import Asection from './Asection';
import Menu from './menu';
import Leg1 from './leg1';
import Leg2 from './Leg2';
import Leg3 from './leg3';
import Leg4 from './leg4';
import Leg5 from './leg5';
import Leg6 from './leg6';
import Leg7 from './leg7';
import images from './assets/images/arrow.svg';
function Home() {

  return (
<>
<Menu />
<div id='sticky'> <MyVoiceSection /> </div>
<Asection />
<br></br>


<Leg1 />
<Leg2 />
<Leg3 />
<Leg4 />
<Leg5 />
<Leg6 />
<Leg7 />

</>






  );
};

export default Home

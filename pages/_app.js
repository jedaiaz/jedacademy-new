import '../styles/main.css'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function MyApp({ Component, pageProps}) {

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 0,
    });
  }, []);


return <div>  
<Component {...pageProps}/>
</div>
}




export default MyApp



import Link from "next/link";
// import css from 'styled-jsx/css'
import cssStyles from '/app/about.module.css';

console.log(cssStyles , "CSS_Styles")
const About = () => {
   return(
    <div>
      <h1 className={cssStyles.green}>This is the About Page</h1>
      <p>This is the About Page</p>

      <h1 className={cssStyles.green}>HI I AM JAHANSHER KHAN</h1>
      <h1 className={cssStyles.green}>I AM STUDENT MY TEACHER NAME HAMZA ALVI</h1>

    <Link href="/"><button>GO TO HOME</button></Link>
    </div>
   
     
   )
    
  }

  export default About;
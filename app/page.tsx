import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <nav>
       <ul>
        <li><Link href="#home">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/service">Service</Link></li>
        <li><Link href="/contect">Contact</Link></li>
       </ul>
       </nav>

       <div id="home">
        <h1 className={styles.css}>This is HOME page</h1>
       </div>
        
        <footer>
         <h1>Thanks Sir Hamza to share The knowledge</h1>
   
        </footer>
    </div>
  
   
  );
}

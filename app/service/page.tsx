import Link from "next/link";
import cssStyle from '/app/service.module.css';
const Service = () => {
    return (
        <div>
            <h1 className={cssStyle.service}>This is the Service Page</h1>
            <Link href="/"><button className={cssStyle.button}>GO TO HOME</button></Link>
        </div>
    );
}

export default Service;
import Link from "next/link";
import cssStyle from '/app/content.module.css'
const Contact = () => {
    return (
        <div>
            <form action="">
                <div>
                    Name:
                    <input  className={cssStyle.input} type="text" placeholder="Name"/>
                     <br />
                     <br />
                   Email:
                    <input  className={cssStyle.input} type="email" placeholder="Email"/>
                </div>
            </form>
            <br />
            <Link href="/"><button>GO TO HOME</button></Link>
        </div>
    );
}

export default Contact
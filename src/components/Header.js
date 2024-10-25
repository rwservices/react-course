import Link from "next/link";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="hgroup-wrap">
                    <div className="site-logo">
                        <Link href='/'>PLC</Link>
                    </div>
                    <Navbar/>
                </div>
            </div>
        </header>
    );
}

export default Header;
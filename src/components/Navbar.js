import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link href='/blogs'>Blogs</Link></li>
                <li><Link href='/contact'>Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
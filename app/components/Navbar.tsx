import Link from "next/link";

export default function Navbar() {
    return(
        <nav className="navbar">
            <Link href="/" className="navbar-logo">
            Course Mapper</Link>
            <div className="navbar-links">
                <Link href="/">Home</Link>
                <Link href="/planner">Planner</Link>
                <Link href="/login">Login</Link>
                <Link href="/signup">Sign Up</Link>
            </div>
        </nav>

    );
}
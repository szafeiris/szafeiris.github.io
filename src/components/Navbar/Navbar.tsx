import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Link } from "react-scroll";

export interface NavigationLinkData {
    id: string;
    name: string;
    offset?: number;
}

export default function Navbar({ links }: { links: NavigationLinkData[] }) {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(true);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setHidden(latest <= 300);
    });

    return (
        <>
            <motion.nav
                className="navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5"
                variants={{
                    visible: { opacity: 1 },
                    hidden: { display: "none", opacity: 0 },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.8 }}
                style={{ display: hidden ? "none" : "flex" }}
            >
                <div className="navbar-brand ms-lg-3">
                    <h1 className="m-0 er display-6 text-primary glow">
                        Stelios Zafeiris
                    </h1>
                </div>

                <div className="collapse navbar-collapse px-lg-3">
                    <div className="navbar-nav m-auto py-0">
                        {links.map((link) => (
                            <Link
                                key={link.id}
                                to={link.id}
                                className="nav-item nav-link"
                                spy={true}
                                smooth={true}
                                offset={link.offset ?? -50}
                                duration={500}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </motion.nav>
        </>
    );
}

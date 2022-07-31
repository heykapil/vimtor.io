import Link from "next/link";
import { motion } from "framer-motion";
import Button from "../button";
import { useRouter } from "next/router";
import { classNames } from "../../lib/style";

interface NavbarItemProps {
    href: string;
    children: string;
}

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 8 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

function NavbarItem({ href, children }: NavbarItemProps) {
    const { pathname } = useRouter();

    const active = pathname === href;

    return (
        <motion.li variants={item}>
            <Link href={href} passHref>
                <a
                    className={classNames(
                        "transition-color text-lg hover:text-gray-900 outline-gray-800 relative group",
                        active ? "text-gray-900" : "text-gray-400"
                    )}
                >
                    {children}
                    <span
                        className={classNames(
                            "absolute left-0 -bottom-2 transition-all group-hover:w-full group-hover:opacity-100 bg-gray-600 h-0.5 duration-300",
                            active ? "w-full opacity-100" : "w-0 opacity-0"
                        )}
                    />
                </a>
            </Link>
        </motion.li>
    );
}

function DesktopNavbar() {
    return (
        <div className="flex items-center">
            <div className="hidden sm:block">
                <motion.ul
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="flex items-baseline space-x-8"
                >
                    <NavbarItem href="/projects">Projects</NavbarItem>
                    <NavbarItem href="/technologies">Technologies</NavbarItem>
                    <NavbarItem href="/resume">Resume</NavbarItem>
                    <motion.li
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 1, ease: [0.15, 1.5, 0.5, 1] }}
                    >
                        <Link href="/contact" passHref>
                            <Button variant="primary" size="small">
                                Contact
                            </Button>
                        </Link>
                    </motion.li>
                </motion.ul>
            </div>
        </div>
    );
}

export default DesktopNavbar;

"use client"

import Link from "next/link";
import { FaDiscord, FaGithub , FaLinkedinIn } from "react-icons/fa6";
import { Switch } from "@/components/ui/switch";
import { Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        setIsDarkMode(theme === "dark");
    }, [theme]);

    const handleOnSwitch = () => {
        setIsDarkMode(!isDarkMode);
        setTheme(isDarkMode ? "light" : "dark");
    };

    const socials = [
        {
            link: "https://www.linkedin.com/in/mateuszmartyna",
            label: "LinkedIn",
            icon: FaLinkedinIn
        },
        {
            link: "https://github.com/WhiteWolfWCY",
            label: "Github",
            icon: FaGithub
        }
    ];

    return (
        <nav className="py-10">
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-xl md:text-2xl font-bold underline underline-offset-8 decoration-primary -rotate-2">WhiteWolf 🐺</h1>
                <div className="flex flex-row gap-5 items-center">
                    <div className="flex gap-1 items-center justify-center mr-0 lg:mr-5">
                        <Switch className="duration-500" checked={isDarkMode} onCheckedChange={handleOnSwitch} />
                        <Moon />
                    </div>
                    <div className="flex flex-row gap-2">
                        {socials.map((social) => (
                            <Link href={social.link} key={social.label} >
                                <social.icon className="h-5 w-5 hover:text-muted-foreground hover:scale-125 transition-all transform duration-150" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}

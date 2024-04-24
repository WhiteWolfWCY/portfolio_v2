"use client"

import Link from "next/link";
import { FaGithub , FaLinkedinIn  , FaSquareXTwitter } from "react-icons/fa6";
import { Switch } from "@/components/ui/switch"
import { Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";


export default function Navbar(){
    const mounted = useRef(false);

    useEffect(() => {
        mounted.current = true;

        return () => {
            mounted.current = false;
        };
    }, []);

    const {theme, setTheme} = useTheme();

    const handleOnSwitch = () => {
        if(theme === "light"){
            setTheme("dark")
            return
        }else{
            setTheme("light")
            return
        }
    }

    const socials = [
        {
            link: "",
            label: "LinkedIn",
            icon: FaLinkedinIn
        },
        {
            link: "",
            label: "Github",
            icon: FaGithub
        },
        {
            link: "",
            label: "X",
            icon: FaSquareXTwitter
        },
    ]

    return (
        <nav className="py-10">
            <div className="flex flex-row justify-between items-center">
                    <h1 className="text-2xl font-bold underline underline-offset-8 decoration-primary -rotate-2">WhiteWolf 🐺</h1>
                    <div className="flex flex-row gap-5">
                        <div className="flex gap-2 items-center justify-center mr-5">
                            <Switch className="duration-500" checked={theme === "dark"} onCheckedChange={handleOnSwitch} />
                            <Moon />
                        </div>
                            
                        {socials.map((social) => (
                            <Link href={social.link} key={social.label}>
                                <social.icon className="h-5 w-5 hover:text-muted-foreground hover:scale-125 transition-all transform duration-150" />
                            </Link>
                        ))}
                    </div>
            </div>
        </nav>
    )
}
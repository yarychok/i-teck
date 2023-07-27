import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import Logo from "@/assets/logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between";

    return <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* left side of navbar */}
                    <img src={Logo} alt="logo" />

                    {/* right side of navbar */}
                    <div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link 
                                page="Home"
                                selectedPage={selectedPage} 
                                setSelectedPage={setSelectedPage}
                            />
                            <Link 
                                page="Benefits"
                                selectedPage={selectedPage} 
                                setSelectedPage={setSelectedPage} 
                            />
                            <Link 
                                page="Our classes"
                                selectedPage={selectedPage} 
                                setSelectedPage={setSelectedPage} 
                            />
                            <Link 
                                page="Contact us" 
                                selectedPage={selectedPage} 
                                setSelectedPage={setSelectedPage}
                            />
                        </div>
                        <div className={`${flexBetween} gap-8`}>
                            <p>Sign in</p>
                            <button>Become a member</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
}

export default Navbar;
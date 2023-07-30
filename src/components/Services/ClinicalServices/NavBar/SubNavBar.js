import './SubNavBar.css'
import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const SubNavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className="bg-blue-600 py-4">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Mobile menu button (hamburger icon) */}
                    {
                        mobileMenuOpen ? <button
                            type="button"
                            className="text-white block lg:hidden focus:outline-none"
                            onClick={toggleMobileMenu}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button> : <button
                            type="button"
                            className="text-white block lg:hidden focus:outline-none"
                            onClick={toggleMobileMenu}
                        >
                            <svg
                                className="h-6 w-6 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.75 5.75H21.25V3.25H2.75v2.5zM2.75 11.75H21.25V9.25H2.75v2.5zM2.75 18.25H21.25V15.75H2.75v2.5z"
                                />
                            </svg>
                        </button>
                    }

                    {/* Desktop menu items */}
                    <div className="hidden lg:flex space-x-8">
                        <HashLink
                            smooth
                            to="/#general-opthalmology"
                            className="text-white hover:text-gray-300"
                        >
                            General Opthalmology
                        </HashLink>
                        <HashLink
                            smooth
                            to="/#pediatric-opthalmology"
                            className="text-white hover:text-gray-300"
                        >
                            Pediatric Opthalmology
                        </HashLink>
                        <HashLink
                            smooth
                            to="/#cataract"
                            className="text-white hover:text-gray-300"
                        >
                            Cataract
                        </HashLink>
                        <HashLink
                            smooth
                            to="/#retina-vitreous"
                            className="text-white hover:text-gray-300"
                        >
                            Retina & Vitreous
                        </HashLink>
                        <HashLink
                            smooth
                            to="/#orbit-oculoplasty"
                            className="text-white hover:text-gray-300"
                        >
                            Orbit, Oculoplasty
                        </HashLink>
                        <HashLink
                            smooth
                            to="/#cornea"
                            className="text-white hover:text-gray-300"
                        >
                            Cornea
                        </HashLink>
                        <HashLink
                            smooth
                            to="/#glaucoma"
                            className="text-white hover:text-gray-300"
                        >
                            Glaucoma
                        </HashLink>
                    </div>

                    {/* Mobile menu items */}
                    <div
                        className={`${mobileMenuOpen ? 'block' : 'hidden'
                            } lg:hidden space-y-4 mt-4`}
                    >
                        <HashLink
                            smooth
                            to="/#general-opthalmology"
                            className="block text-white hover:text-gray-300"
                            onClick={toggleMobileMenu}
                        >
                            General Opthalmology
                        </HashLink>
                        <HashLink
                            smooth
                            to="/#pediatric-opthalmology"
                            className="block text-white hover:text-gray-300"
                            onClick={toggleMobileMenu}
                        >
                            Pediatric Opthalmology
                        </HashLink>
                        <HashLink
                            smooth
                            to="/#cataract"
                            className="block text-white hover:text-gray-300"
                            onClick={toggleMobileMenu}
                        >
                            Cataract
                        </HashLink>
                        <HashLink
                            smooth
                            to="/#retina-vitreous"
                            className="block text-white hover:text-gray-300"
                            onClick={toggleMobileMenu}
                        >
                            Retina & Vitreous
                        </HashLink>
                        <HashLink
                            smooth
                            to="/#orbit-oculoplasty"
                            className="block text-white hover:text-gray-300"
                            onClick={toggleMobileMenu}
                        >
                            Orbit, Oculoplasty
                        </HashLink>
                        <HashLink
                            smooth
                            to="/#cornea"
                            className="block text-white hover:text-gray-300"
                            onClick={toggleMobileMenu}
                        >
                            Cornea
                        </HashLink>
                        <HashLink
                            smooth
                            to="/#glaucoma"
                            className="block text-white hover:text-gray-300"
                            onClick={toggleMobileMenu}
                        >
                            Glaucoma
                        </HashLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default SubNavBar;

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between">
                    {/* Company Information */}
                    <div className="mb-6 lg:mb-0">
                        <h2 className="text-xl font-bold mb-2">Dessert</h2>
                        <p className="mb-2">1234 Street Name</p>
                        <p className="mb-2">City:  Bengaluru, State: Karnataka, 12345</p>
                        <p className="mb-2">Email: Dessertinfo@company.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>

                    {/* Navigation Links */}
                    <div className="mb-6 lg:mb-0">
                        <h2 className="text-xl font-bold mb-2">Quick Links</h2>
                        <ul>
                            <li className="mb-1"><a href="/" className="hover:underline">Home</a></li>
                            <li className="mb-1"><a href="/" className="hover:underline">About Us</a></li>
                            <li className="mb-1"><a href="/" className="hover:underline">Services</a></li>
                            <li className="mb-1"><a href="/" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>

                    {/* Social Media Icons */}
                    <div className="mb-6 lg:mb-0">
                        <h2 className="text-xl font-bold mb-2">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                <FaInstagram size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright Notice */}
                <div className="mt-8 text-center text-sm">
                    <p>&copy; 2024 Company Name. All rights reserved.</p>
                    <p>&copy;Created by Rahul.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

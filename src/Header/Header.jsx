// import React from 'react';
// https://i.ibb.co/7yzWJGB/funStore.png
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-200  text-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">
                            <li><Link to='/'>Home</Link ></li>
                            <li tabIndex={0}>
                                <Link to='/all-toys' className="justify-between">
                                    All-Toys
                                </Link>
                                
                            </li>
                            <li tabIndex={0}>
                                <Link className="justify-between">
                                    My-Toys
                                </Link>
                            </li>
                            <li tabIndex={0}>
                                <Link to='/addToy' className="justify-between">
                                    Add-A-Toy
                                </Link>
                            </li>
                            <li><Link to='/blogs'>Blogs</Link></li>
                        </ul>
                    </div>
                    <div className="btn btn-ghost normal-case items-center flex-nowrap text-xl">
                        <img className="w-16 mix-blend-hard-light rounded-full" src="https://i.ibb.co/VWR5RKh/slazzer-edit-image.png" alt="" />
                        <h3 className="text-xl font-bold">Fun Store</h3>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link ></li>
                            <li tabIndex={0}>
                                <Link to='/all-toys' className="justify-between">
                                    All-Toys
                                </Link>
                                
                            </li>
                            <li tabIndex={0}>
                                <Link className="justify-between">
                                    My-Toys
                                </Link>
                            </li>
                            <li tabIndex={0}>
                                <Link to='/addToy' className="justify-between">
                                    Add-A-Toy
                                </Link>
                            </li>
                            <li><Link to='/blogs'>Blogs</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                    <button className="btn ms-3 btn-outline btn-warning">
                        <Link to='/login'>Login</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
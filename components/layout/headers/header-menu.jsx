import Link from 'next/link';
import React from 'react';

const MainMenu = () => {
    return (
        <>    
            <ul>
                <li className='menu-item-has-children'><Link href='/'>Home</Link>
                  
                </li>  
                <li className='menu-item-has-children'><Link href='/about-us'>About Us</Link>
               
                </li>
                <li className='menu-item-has-children'><Link href='/services'>Services</Link>
                 
                </li>
                <li className='menu-item-has-children'><Link href='/portfolio-filter'>Products</Link>
                    {/* <ul className='sub-menu'>
                        <li><Link href='/blog'>Blog Grid</Link></li>
                        <li><Link href='/blog-standard'>Blog Standard</Link></li>
                        <li><Link href='/blog/revamp-your-business-with-expert-consulting'>Blog Details</Link></li>
                    </ul> */}
                </li>
                <li className='menu-item-has-children'><Link href='/contact-two'>Contact</Link>
                    {/* <ul className='sub-menu'>
                        <li><Link href='/contact'>Contact Style 01</Link></li>
                        <li><Link href='/contact-two'>Contact Style 02</Link></li>
                        <li><Link href='/contact-three'>Contact Style 03</Link></li>
                        <li><Link href='/contact-four'>Contact Style 04</Link></li>
                    </ul> */}
                </li>      
            </ul>  
        </>
    );
};

export default MainMenu;
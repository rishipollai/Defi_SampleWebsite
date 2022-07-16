import React, {useState,useEffect} from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {

    const [color,setColor] = useState('transparent')
    const [textColor,setTextColor]= useState('white')
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    
    useEffect(()=>{
      const changeColor = ()=>{
          if(window.scrollY>=90){
              setColor('#ffffff');
              setTextColor('#000000');
          }else{
              setColor('transparent');
              setTextColor('#ffffff');
          }
      }
      window.addEventListener('scroll',changeColor);
  },[]);

  return (
    <div className='fixed w-full h-[90px] bg-black ease-in duration-300'>
      <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
        <div>
          <h1 className='text-[#00d8ff]'>DEFI</h1>
        </div>
        <div className='hidden md:flex'>
          <ul className='flex text-white items-center'>
            <li>Platform</li>
            <li>Developers</li>
            <li>Community</li>
            <li>About</li>
            <button className='ml-4'>Use Defi</button>
          </ul>
        </div>

        {/* Hamburger menu */}
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={30} className='text-white' /> : <AiOutlineMenu size={30} className='text-white' />}
          
          
        </div>

        {/* Mobile Menu */}
        <div className={nav ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center' : 
    'absolute left-[-100%]'}>
          <ul>
            <li className='text-2xl'>Platform</li>
            <li className='text-2xl'>Developers</li>
            <li className='text-2xl'>Community</li>
            <li className='text-2xl'>About</li>
            <button className='m-8'>Use Defi</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

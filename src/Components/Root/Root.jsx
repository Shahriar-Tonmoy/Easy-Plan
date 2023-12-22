import { useState } from "react";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import { Outlet } from "react-router-dom";


const Root = () => {
    const [theme, setTheme] = useState('dark')
    const handleToggle = e=>{
        console.log(e.target.checked);
        const buttonStat = e.target.checked;
        if(!buttonStat === true){
            setTheme('dark');
        }
        else{
            setTheme('light');
        }
      }
    return (
           <div className={`${theme=='dark' ? 'bg-[#222831]' : 'bg-[#EEEEEE]'} `} data-theme={theme}>
           <Nav handleToggle={handleToggle}></Nav>
           <Outlet></Outlet>
           <Footer ></Footer>
        </div>
    );
};

export default Root;
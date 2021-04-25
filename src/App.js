import './App.css';
    
const menu=document.querySelector('#mobile-menu')
const menuLinks=document.querySelector('.navbar_menu')

const mobileMenu=()=>{
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
}

//menu.addEventListener('click',this.mobileMenu);
function App() {
  return (
    // <div className="editor">
    //  <div className="editor_wrapper">
    //    <div className="editor_body">
    //    <div  id="editorCode"className="editor_code"></div>
    //    </div>
    //    <div className="editor_footer">
    //    <div className="editor_footer_left">
    //      <button className="button">Run ></button>
    //      <button className="button">Reset ></button>

    //    </div>
    //    <div className="editor_footer_right">
    //      <div  className="editor_console">
    //        <ul className="editor_console_logs" ></ul>
    //      </div>
    //    </div>

    //    </div>
    //  </div>
     
    // </div>
    
    <nav className="navbar">
      <div className="navbar_container">
        <a href="#home" id="navbar_logo">COLORS</a>
       <div className="navbar_toggle" id="mobile-menu">
         <span className="bar"></span>
         <span className="bar"></span>
         <span className="bar"></span>
       </div>
       <ul className="navbar_menu">
         <li className="navbar_items">
           <a href="#home" className="navbar_links" id="home_page">HOME</a>
         </li>
         <li className="navbar_items">
           <a href="#about" className="navbar_links" id="about_page">About</a>
         </li>
         <li className="navbar_items">
           <a href="#services" className="navbar_links" id="services_page">Services</a>
         </li>
         <li className="navbar_button">
           <a href="#sign-up" className="button" id="signup">Sign Up</a>
         </li>
       </ul>
         </div>
       </nav>
      
       
    
     
  );
}

export default App;

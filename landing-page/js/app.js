
//* Global Varibale Declration */
            let v=0;     /* A counter to increase the number of sections */
            const theMain = document.querySelector('main'); /* Putting the Main in a variable */
//* End of Declration */
                                                     /*  FUNCTIONS used */



                              /***********************************************************************/
                                       /* Function to create a new Section in THE MAIN */
 function newSection() {
  v++;        /* Increment of the Counter */
  const newSection = `<section id="section${v}" data-nav="Section ${v}"  >  
<div class="landing__container">
    <h2>Section${v}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
  </div>
</section>`;  /* NEW SECTION Content */
theMain.insertAdjacentHTML("beforeend",newSection); /* ADDING The NEW SECTION to the MAIN */
  };


                              /***********************************************************************/
                                          /* Function to adjust the navigation Bar */
   function newBar(){
   const bar = document.getElementById("navbar__list");     /* Putting the navbar list in a constant */
   bar.innerHTML= "";                /* Clearing the BAR every time we call the function to prevent the repeat of the sections */
   for( x=1;x<=v;x++){               /* For loop For looping on the SECTIONS */
    const navSections = `<li><a href="#section${x}" class="menu_link"</a>section${x}</li>`; /* Making a li For every Section in the Bar */
    bar.insertAdjacentHTML("beforeend",navSections);   /*Inserting the li in the BAR */
   }};
                           
                              /***********************************************************************/
                                               /* Function for removing THE LAST Section */
   function removeSec(){
   let r=v;     /* A counter that determine that have the number of the last section */                                           
    const removable=document.getElementById(`section${r}`);  /* PUTTING THE SECTION IN THE MAIN IN A VARIABLE */
    const elements = document.getElementsByClassName('menu_link'); /* PUTTING THE SECTIONS IN THE NAVBAR IN AN ARRAY */
   elements[r-1].remove(); /* REMOVING THE LAST ADDED li IN THE NAVBAR */
   removable.remove(); /* REMOVING THE LAST ADDED SECTION IN THE MAIN */
   r--;   /* DECREASING THE VALUE OF r TO HAVE THE VALUE OF THE LAST SECTION AFTER REMOVING */
   v=r;  /* Giving the global counter the same value of this counter */
       };                       
       
       
                             /***********************************************************************/       
                      /* Function to be put in the window.onscroll to give a class to the active section */
     
   function Active() {
  const activatingS=document.querySelectorAll("section");   /* Putting ALL THE SECTIONS in const */
   for( x=0;x<=v;x++)              /* Doing A LOOP to access every section */ 
   if(activatingS[x]!=undefined){                   
   {{ if (activatingS[x].getBoundingClientRect().top  > -100 && activatingS[x].getBoundingClientRect().top  < 100 ) { /* Condition to ADD the class */
                activatingS[x].className="your-active-class";    /*Adding the class If THE SECTION is active */                  
                 } else {                         
                   activatingS[x].className="";          /* Removing the class when the SECTION is inactive */
                   }}};
                    
                  }};               
 window.onscroll = function() {Active()} ;

                             /***********************************************************************/       
                                        /* Function to make the navigation smooth */
  function smooth (){ let z=-1;
                     while( z<v){    /*A LOOP TO DO THE FUNCTION FOR EVERY SECTION */
                      z++;         
                     let refNav = document.getElementsByClassName('menu_link');  /* PUTTING THE ELEMENT IN THE NAV BAR IN ONE VARIABLE */                              
  function navSmooth(hrefrence) {               /* THE FUNCTION THAT WILL GIVE EVERY SECTION A SMOOTH SCROL */
                                  hrefrence.preventDefault();
                                  const href = this.getAttribute("href");                       
                                  document.querySelector(href).scrollIntoView({ behavior: "smooth" });  /* CHANGING THE BEHAVIOUR USING THE SCROLL INTO VIEW */                                                                                                                                                                                                                                
                                };
   if(refNav[z]!=undefined){
   refNav[z].addEventListener("click", navSmooth) ; };};}; /* GIVING EVERY ONE OF THEM AN EVENT LSITENER */   
   
  
  
                             /***********************************************************************/       


//* The Code */
    newSection();       /* Calling The Function that creates */
    newSection();       /*  the sections THREE TIMES to */
    newSection();            /*   Start the Page */

    newBar();      /* Calling THE Function that adjust the NAVBar */

    

    
    //* respond to the click for creating a new section //
    document.getElementById("button").addEventListener("click", () => {
      newSection();
      newBar(); 
      smooth();
    });
     
// respond to the click to remove the last section
    document.getElementById("btn2").addEventListener("click", () => {
      removeSec();
    });
   
    /* Applying the smooth scrol on the start */

    smooth();


    
    
    
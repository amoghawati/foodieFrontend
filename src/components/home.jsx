import "../styles/home.css"

const Home = () => {
   
   return (
      <div className="Home">

         <div className="blockho d-flex row">
            <div className="image col-6">
               <img src={'/images/pasta.jpg'} alt="" height="700px" width="900px" />
            </div>
            <div className="block1 d-block col-3">
               <div className="block1txt">
                  <div className="txtho w-75 ">
                     <h1><b>Love the Delicious & Tasty Foods</b></h1>
                  </div>
                  <div className="par w-75">
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia incidunt vel quibusdam similique quod voluptate magnam fugiat doloremque eos impedit, aperiam aspernatur nulla ratione beatae in quidem ut reiciendis ullam!</p>

                  </div>
                  <div className="btn1">
                     <a href="http://" className="btn">Add a post</a>
                  </div>
               </div>
               <div className="links2">
                  <a href="http://">Forward</a>
                  <a href="http://">Next➔</a>
               </div>
            </div>
         </div>
         <div className="recentstories mt-5 d-flex">
            <div className="cardlt">

               <div className="cardlt1 d-flex">
                  <div className="card1" style={{ width: "300px" }}>
                     <img src={'/images/phone.jpg'} alt="" height="200px" width="300px" />
                     <p>Dessert -----
                        March 01, 2018</p>
                     <h4>Tasty & Delicious Foods</h4>
                     <a href="http://">Read More ➔</a>
                  </div>
                  <div className="card1" style={{ width: "300px" }}>
                     <img src={'/images/pasta.jpg'} alt="" height="200px" width="300px" />
                     <p>Dessert -----
                        March 01, 2018</p>
                     <h4>Tasty & Delicious Foods from Scotland</h4>
                     <a href="http://">Read More ➔</a>
                  </div>
               </div>
               <div className="cardlt2 d-flex">
                  <div className="card1" style={{ width: "300px" }}>
                     <img src={'/images/nougat.jpg'} alt="" height="200px" width="300px" />
                     <p>Dessert -----
                        March 01, 2018</p>
                     <h4>Tasty & Delicious Foods</h4>
                     <a href="http://">Read More ➔</a>
                  </div>
                  <div className="card1" style={{ width: "300px" }}>
                     <img src={'/images/meat-skewer-1440105.jpg'} alt="" height="200px" width="300px" />
                     <p>Dessert -----
                        March 01, 2018</p>
                     <h4>Tasty & Delicious Foods</h4>
                     <a href="http://">Read More ➔</a>
                  </div>
               </div>

            </div>
            <div className="cardrt">
               <div className="txt1">
                  <p style={{ color: "yellow" }}><b>Food</b></p>
                  <h1 style={{ color: "white" }}>Tasty & Delicious Foods</h1>
               </div>
               <div className="link">
                  <a href="http://">Read More ➔</a>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Home;
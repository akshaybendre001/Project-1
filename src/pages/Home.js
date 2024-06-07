// src/pages/Home.js
import React from 'react';

const Home = () => {
    return (
        <div>
            <marquee><mark>Hii there..Welcome to the Website!</mark> </marquee>
            {/* <h2>Home Page</h2>
            <p>Welcome to the Home page.</p> */}
            <img class="body-img" src="bodyimg.jpg" height="600px" width="850px" align="left" margin="20px"></img>
            <div class= "myclass">
                <h1><center>Steel Authority Of India</center></h1>
                <br></br>
                <center><dl>
                    <dt>Sail</dt>
                    <dd>SAIL, a Central Public Sector Enterprises (CPSE) is India’s largest steel producer with around 17.43 MT of Hot Metal and 16.15 MT of Crude Steel production.</dd>
                </dl></center>
                <br></br>

                <center>
                    <dl>
                        <dt>Operations</dt>
                        <dd>The total requirement of its main raw material, iron ore, is met through its captive mines.</dd>
                    </dl>
                </center>
                <br></br>

                <center>
                    <dl>
                        <dt>Awards and accolades</dt>
                        <dd>"Best of all" Rajiv Gandhi National Quality Award in 1993, 2006, and 2007 for their Bhilai and Bokaro plants.</dd>
                    </dl>
                </center>
            </div>
            
        </div>
    );
};

export default Home;

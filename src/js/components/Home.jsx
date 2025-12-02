import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Card from "./Card";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
			<br></br>
		<div className="container">
			<Jumbotron/>
			<br></br>
		<div className="cards-container">
			<Card title= "carta uno"
			img="https://png.pngtree.com/png-vector/20250111/ourmid/pngtree-golden-retriever-dog-pictures-png-image_15147078.png" 
			text= "este es el texto de la carta numero uno"
			/>
			<Card title= "carta dos"
			img="https://png.pngtree.com/png-vector/20250111/ourmid/pngtree-golden-retriever-dog-pictures-png-image_15147078.png"
			text= "este es el texto de la carta numero dos"
			/>
			<Card title= "carta tres"
			img="https://png.pngtree.com/png-vector/20250111/ourmid/pngtree-golden-retriever-dog-pictures-png-image_15147078.png"
			text= "este es el texto de la carta numero tres"
			/>
			<Card title= "carta cuatro"
			img="https://png.pngtree.com/png-vector/20250111/ourmid/pngtree-golden-retriever-dog-pictures-png-image_15147078.png"
			text= "este es el texto de la carta numero cuatro"
			/>

			
		
		</div>
	
		</div>
		<br></br>
		<br></br>
		<div>
				<Footer/>
			</div>
		</div>
		
	
		
	);
};

export default Home;
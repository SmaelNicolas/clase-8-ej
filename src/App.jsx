import "./App.css";
import { Comments } from "./components/API/Comments/Comments";
import { Posts } from "./components/API/Posts/Posts";
import { Users } from "./components/API/Users/Users";
import { MyDiv } from "./components/HoC/MyDiv";
import { addLink } from "./components/HoC/addLink";
import { Item } from "./components/Item/Item";

const MyDivWithLink = addLink(MyDiv);

const item = {
	id: 1,
	stock: 10,
	title: "Razer Cynosa V2 - US",
	img: "https://i.ibb.co/0DwNRHg/razer-cynosa-v2-500x500.png",
	description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam blanditiis officia dignissimos! Expedita quod voluptatem molestias id maxime explicabo ipsa.",
	price: 59.99,
	category: "teclado",
};

function App() {
	return (
		<div className="appContainer">
			<h1>Clase 8</h1>
			{/* <Item item={item} /> */}
			{/* <Users /> */}
			{/* <Posts /> */}
			{/* <Comments /> */}
			{/* <MyDiv text="Div Simple" /> */}
			{/* <MyDivWithLink link="https://www.ole.com.ar/" /> */}
		</div>
	);
}

export default App;

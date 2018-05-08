let navbar = document.createElement('div');
navbar.innerText = "NAVBAR or footer !!!¡¡¡¡¡¡¡";

export default function Navbar() {

function displayNavbar() {

  // document.body.appendChild(scoreDiv);
  let root = document.getElementById("root");
  root.appendChild(navbar);
}


	return (
      displayNavbar()
			// GameScreen.currentScore
			// <span className="centerScreen score">{GameScreen.currentScore}</span>
	)
}

import React from 'react';
import { Icon } from 'semantic-ui-react';
let navbar = document.createElement('div');
navbar.innerHTML = "<Icon link='https://github.com/cs-j' name='github' />";
// navbar.innerHTML = <p>Hi</p>

export default function Navbar() {

function displayNavbar() {
  document.body.appendChild(navbar);
}

	return (
      displayNavbar()
      // <Button basic >
      //   <Icon name='github' /> GitHub
      // </Button>
	)
}

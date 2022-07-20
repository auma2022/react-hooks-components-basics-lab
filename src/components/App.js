import React from "react";
/*


    import React from 'react';
    import { NavLink as Link } from 'react-router-dom';
    

2.

    <nav>
      <Link to="/">I'm a link!</Link>
    </nav>
    )
    

3.

    // ...
    <Link to="/">I'm a link!</Link>
    
4.

    // ...
    <li>
      <Link to="/">
        Home
      </Link>
    </li>
    
5.

    // ...
    <li>
      <Link to="/about">
        About
      </Link>
    </li>
    
6.

    // ...
    <li>
      <Link to="/contact">
        Contact
      </Link>
    </li>
    
7.

    // ...
    import { useSelector, useDispatch } from 'react-redux'
    import { RootState } from '../store'
    import { selectPage } from '../store/navbar/actions'
    
8.

    // ...

    const dispatch = useDispatch()

    const nav = useSelector(({ navbar }: RootState) => {
      const { page } = navbar;
      return { page };
    })

    const handleNavClick = (page: string) => {
      dispatch(selectPage(page))
    }

  
 */

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;

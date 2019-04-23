import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Explore from './components/Explore/Explore';

const App = () => {

  const [navStyle, setNavStyle] = useState({
    navBar: {
      backgroundColor: "#ffffff"
    },
    navLogo: {
      height: 50
    }
  })

  useEffect(() => {

    function navScroll() {
      if (window.scrollY > 190) {
        setNavStyle({
          ...navStyle,
          navBar: {
            backgroundColor: "#ffffff"
          },
          navLogo: {
            height: 70
          }
        });
      } else {
        setNavStyle({
          ...navStyle,
          navBar: {
            backgroundColor: "#ffffff"
          },
          navLogo: {
            height: 50
          }
        });
      }
    }

    window.addEventListener("scroll", navScroll);

    return () => window.removeEventListener("scroll", navScroll);

  }, [navStyle]);

  return (
    <BrowserRouter>
      <div className="">
        <Navbar navStyle={navStyle} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/explore" component={Explore} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

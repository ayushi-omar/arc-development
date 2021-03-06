import React, {useState} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import Header from "./ui/Header";
import Footer from "./ui/Footer";


import theme from "./ui/Theme";

function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} selectedIndex={selectedIndex} setValue={setValue} setSelectedIndex={setSelectedIndex}/>
        <Switch>
          <Route exact path="/" component={()=><div style={{height: "260px"}}>Home</div>}/>
          <Route exact path="/services" component={()=><div>services</div>}/>
          <Route exact path="/customsoftwares" component={()=><div>customsoftwares</div>}/>
          <Route exact path="/mobileapps" component={()=><div>mobileapps</div>}/>
          <Route exact path="/websites" component={()=><div>websites</div>}/>
          <Route exact path="/revolution" component={()=><div>revolution</div>}/>
          <Route exact path="/about" component={()=><div>about</div>}/>
          <Route exact path="/contact" component={()=><div>contact</div>}/>
          <Route exact path="/estimate" component={()=><div>estimate</div>}/>
        </Switch>
        <Footer value={value} selectedIndex={selectedIndex} setValue={setValue} setSelectedIndex={setSelectedIndex}/>

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

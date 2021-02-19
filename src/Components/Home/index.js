import React from 'react';
import { Button } from "react-bootstrap";
import history from "../../history";
import "./styles.css";

const Home = () => {
    return (
        <>
            <div id="img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCzQZG1X_nrzaGfgZ_joBJd0_Pj4oM7rLPUQ&usqp=CAU"></img>
                <p>Survey Tiger</p>
            </div>
            <div id="btn">
                <form >
                    <Button className="btn-lg" variant="outline-success" onClick={()=>history.push('/create')}>Create Survey</Button><br></br><br></br><br></br>
                    <Button className="btn-lg" variant="outline-danger" onClick={()=>history.push('/take')}>  &nbsp; Take Survey &nbsp;  </Button>
                </form>
            </div>
        </>
    );
};

export default Home;
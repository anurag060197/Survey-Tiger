import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import "./styles.css";

const Multi_Select = () => {
    const [count, setCount] = useState(1);
    const [input1, setInput1] = useState(true);
    const [input2, setInput2] = useState(false);
    const [input3, setInput3] = useState(false);
    const [input4, setInput4] = useState(false);

    const handlePlus = (event)=>{
        switch(event.target.className){
            case "1": setInput2(true);
                      setCount((prev)=>prev+1);
                break;
            case "2": setInput3(true);
                      setCount((prev)=>prev+1);
                break;
            case "3": setInput4(true);
                      setCount((prev)=>prev+1);
                break;
        }   
    }

    const handleMinus = (event)=>{
        switch(event.target.className){
            case "1": setInput1(false);
                      setCount((prev)=>prev+1);
                break;
            case "2": setInput2(false);
                      setCount((prev)=>prev+1);
                break;
            case "3": setInput3(false);
                      setCount((prev)=>prev+1);
                break;
            case "4": setInput4(false);
                      setCount((prev)=>prev+1);
                break;
        }   
    }

    const handleAddQuestion = ()=>{
        setInput1(true);
        setInput2(false);
        setInput3(false);
        setInput4(false);
        setCount(1);
    }

    const handlePublish = ()=>{
        alert("Published");
    }
    return (
        <Container>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon">
                    <b>?</b>
                    </span>
                </div>
                <textarea rows="1"></textarea>
            </div><br></br>
            <h2>Options</h2>
            {input1 === true ? <> <input type="text" placeholder="Option 1" /><button className="1" onClick={handlePlus}>+</button><button className="1" onClick={handleMinus}>-</button><br></br><br></br></> : null}
            {input2 === true ? <> <input type="text" placeholder="Option 2" /><button className="2" onClick={handlePlus}>+</button><button className="2" onClick={handleMinus}>-</button><br></br><br></br></> : null}
            {input3 === true ? <> <input type="text" placeholder="Option 3" /><button className="3" onClick={handlePlus}>+</button><button className="3" onClick={handleMinus}>-</button><br></br><br></br></> : null}
            {input4 === true ? <> <input type="text" placeholder="Option 4" /><button className="4" onClick={handlePlus}>+</button><button className="4" onClick={handleMinus}>-</button><br></br><br></br></> : null}
            <div id="button">
            {count === 4 ? <> <Button className="btn btn-danger" onClick={handleAddQuestion}>Add Question</Button><Button className="btn btn-danger" onClick={handlePublish}>Publish</Button></> : null}
            </div>
        </Container>
    );
};

export default Multi_Select;
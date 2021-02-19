import React, {useState} from 'react';
import { Button, Container } from 'react-bootstrap';

const Single_Select = () => {
    const [count, setCount] = useState(1);
    const [input1, setInput1] = useState(true);
    const [input2, setInput2] = useState(false);
    const handlePlus = (event)=>{
        switch(event.target.className){
            case "1": setInput2(true);
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
        }   
    }

    const handleAddQuestion = ()=>{
        setInput1(true);
        setInput2(false);
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
            <div id="button">
                {count === 2 ? <> <Button className="btn btn-danger" onClick={handleAddQuestion}>Add Question</Button><Button className="btn btn-danger" onClick={handlePublish}>Publish</Button></> : null}
            </div>
        </Container>
    );
};

export default Single_Select;
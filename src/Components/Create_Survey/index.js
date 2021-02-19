import React, {useState} from "react";
import "./styles.css";
import Multi_Select from "../Multi_Select";
import Single_Select from "../Single_Select";

const Create_Survey = () => {
    const [temp, setTemp] = useState("");
    const handleSelectOption = (event)=>{
        setTemp(event.target.value);
    }
    
    return (
        <>
            <div id="img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCzQZG1X_nrzaGfgZ_joBJd0_Pj4oM7rLPUQ&usqp=CAU"></img>
                <p>Survey Tiger</p>
            </div>
            <div id="label">
                <select id="choice"  defaultValue={'DEFAULT'} onChange={handleSelectOption}>
                    <option value="DEFAULT" disabled>
                        Select Question Type
                    </option>
                    <option value="Multi-select" >Multi-select</option>
                    <option value="Single select">Single select</option>
                </select>
            </div><br></br>
            {temp === "Multi-select" ? <Multi_Select /> : null}
            {temp === "Single select" ? <Single_Select /> : null}
        </>
    );
};

export default Create_Survey;

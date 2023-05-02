import { useState } from 'react';


function Form(){
	
const [fname, setFname] = useState();
const [location, setLocation] = useState();
const [gender, setGender] = useState();
const [text, setText] =  useState();
const [dialog, isDialog] = useState(false);

function formHandler(e){
   e.preventDefault();
   console.log(fname, location, gender);
   isDialog(true);
}

function printer(e){
   e.target.hidden = true;
	window.print();
   
}



return (
	<>
	{ dialog ? <div className="dialog">
       <div className="lined">Full Name: <strong>{ fname }</strong></div>
       <div className="lined">Location: <strong>{ location }</strong></div>
       <div className="lined">Gender: <strong>{ gender }</strong></div>
       <div className="lined">Note: <strong>{ text }</strong></div>
       <div><button onClick={ printer }>Print</button></div>

	</div> : "" }
	
     <form method="post" onSubmit={ formHandler}>
        <div className="input-field">
        <input onChange={ e=>setFname(e.target.value) } type="text" placeholder="Fullname"/>
        </div>
        <div className="input-field">
        <input onChange={ e=>setLocation(e.target.value) } type="text" placeholder="Location"/>
        </div>
        <div className="input-field">
        <select onChange={ e=>setGender(e.target.value) }>
           <option>--Gender--</option>
           <option>Male</option>
           <option>Female</option>
           <option>Other</option>
        </select>
        </div>
        <div className="input-field">
         <textarea col="8" resize="none" onChange={ e=>setText(e.target.value) } placeholder="write...">
            
         </textarea>
        </div>
        <div className="input-field">
        <input type="submit" value="Create"/>
        </div>

     </form>
     </>

	);

}



export default Form;
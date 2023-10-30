import { useState } from "react";

const LoginPage = () =>{
    const [inputPswd, setInputPswd] = useState('');
    const [upperLetter, setUpperLetter] = useState('Please add atleast 1 capital letter');
    const [lowerLetter, setLowerLetter] = useState('Please add atleast 1 small letter');
    const [numericValue, setNumericValue] = useState('Please add atleast 1 number');
    const [specialChar, setSpecialChar] = useState('Please add atleast 1 special character');
    const [length, setLength] = useState('Maximum 8 words');

    const [showAlert, setShowAlert] = useState(false);




    const upperCase = /[A-Z]/;
    const lowerCase = /[a-z]/;
    const numeric =  /[0-9]/;
    const specialCharRegex = /[!@#\$%^&*()_+{}\[\]:;<>,.?~\\-]/;
    const maxLength = 8;

    const handlePswd = (e)=>{
        let value = e.target.value;
        setInputPswd(value);
        console.log(value);

        if(upperCase.test(value)){
            console.log('uper')
            setUpperLetter('Upper case added');
        };
        if(lowerCase.test(value)){
            console.log('uper')
            setLowerLetter('Lower case added');
        };
        if(numeric.test(value)){
            console.log('uper')
            setNumericValue('Numbers added');
        };
        if(specialCharRegex.test(value)){
            console.log('uper')
            setSpecialChar('Special character added');
        };
        if(value.length <= maxLength){
            console.log('uper')
            setLength('Max words added');
        }else{
            alert('maximum length reached')
        };
        
    }

    const handleForm = (e)=>{
        e.preventDefault();
    }
    console.log('check');
    return (
        <div className="main container">
            <form onSubmit={handleForm} className="w-50 min-vh-50 m-auto bg-dark text-white p-3 rounded-3">
                <div>
                    <label>User Name</label>
                    <input type="text" name="userName" placeholder="Your Name" required className="name-input d-block w-100 mb-4 rounded-3"></input>
                </div>
                <div>
                    <label>Set Password</label>
                    <input type="password" name="password" id="pswd"  pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#\$%^&*()_+{}\[\]:;<>,.?~\\-]).{1,8}" title="Must contain at least one number and one uppercase and lowercase letter, Special character, and at least 8 or more characters" value={inputPswd} onChange={handlePswd} onFocus={()=> setShowAlert(true)} className="psd-input d-block w-100 mb-4 rounded-3" required ></input>
                </div>

                <button className="btn btn-primary">Submit</button>

                <div className="alertbox">
                
                    <h3>{showAlert ?  upperLetter  : ''}</h3>
                    <h3>{showAlert ?  lowerLetter  : ''}</h3>
                    <h3>{showAlert ?  numericValue  : ''}</h3>
                    <h3>{showAlert ?  specialChar  : ''}</h3>
                    <h3>{showAlert ?  length  : ''}</h3>

                </div>

            </form>

            
        </div>
    );
}

export default LoginPage;
import {useEffect,useRef,useState} from"react";
function App(){
    const[password,setpassword]=useState("");
    const[length,setlength]=useState(8);
    const[numbers,setnumbers]=useState(false);
    const[characters,setcharacters]=useState(false);
    const inputone=useRef(null);
    function passwordgenerators(){
        let pass="";
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(numbers){
            str=str+"0123456789";
        }
        if(characters){
            str=str+"!@#$%^&*-_+=[]{}~`";
        }
        for(let i=0;i<length;i++){
            const char=Math.floor(Math.random()*str.length);
            pass=pass+str[char];
        }
        setpassword(pass);
    }
    useEffect(()=>{
        passwordgenerators();
    },[length,numbers,characters]);
    function handleclick(){
        inputone.current.select();
        navigator.clipboard.writeText(password);
    }
    return(
        <div>
            <input type="text" ref={inputone} value={password} readOnly placeholder="password"/>
            <button onClick={handleclick}>copy</button>
            <br />
            <input type="range" min={6} max={100} value={length} onChange={(e)=>setlength(e.target.value)}/>
            <label htmlFor="">Length:{length}</label>
            
            <input type="checkbox" id="numbers" defaultValue={numbers} onChange={(e)=>setnumbers(!numbers)}/>
            <label htmlFor="numbers">Numbers</label>
            
            <input type="checkbox" id="characters" defaultValue={characters} onChange={(e)=>setcharacters(!characters)}/>
            <label htmlFor="characters">Characters</label>
        </div>
    )
}
export default App;
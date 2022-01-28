import './App.css';
import DatePicker from 'react-date-picker';
import { useState, useEffect } from "react";


function App() {

  const [name,setName] = useState("");
  const [desc,setDesc] = useState("");
  const [game,setGame] = useState("");
  const [budget,setBudget] = useState(0);
  const [crypto,setCrypto] = useState(false);
  const [startDate,setStartDate] = useState(new Date());
  const [endDate,setEndDate] = useState(new Date());
  const [lang,setLang] = useState("");
  const [list,setList] = useState([]);
  const [other,setOther] = useState(false);


  const handleSubmit=(e)=>{

    if(budget<=10000&&budget>=0){

      const data={name,desc,game,startDate,endDate,budget,crypto,lang}
    console.log(name,desc,game,budget,crypto,startDate,endDate,lang);
    setList((ls)=>[...ls,data]);

    setName("");
    setDesc("");
    setGame("");
    setBudget(0);
    setCrypto(false);
    setStartDate(new Date());
    setEndDate(new Date());
    setLang("");
    setOther(false);
    }

    else{
    alert("Campaign Budget Max Is 10,000")
    }

  };

    if(game==="Other"){
      setOther(true);
      setGame("");
    }
  
  return (
    <div className="App">
      <div className="wrapper">
    <div className="title">
      Game Influencer Marketing Campaign
    </div>
    <div className="form">
       <div className="inputfield">
          <label>Campaign Name</label>
          <input type='text' required maxLength='20' value={name}  onChange={(e)=>setName(e.target.value)} className="input"/>
       </div>  
       <div className="inputfield">
          <label>Campaign Description</label>
          <textarea className="textarea" required maxLength="200" value={desc} onChange={(e)=>setDesc(e.target.value)}></textarea>
       </div> 
       <div className="inputfield">
          <label>Campaign Game</label>
          <div className="custom_select">
            <select value={game} onChange={(e)=>setGame(e.target.value)} required>
              <option value="">Select</option>
              <option value="League of Legends">League of Legends</option>
              <option value="Dota 2">Dota 2</option>
              <option value="Minecraft">Minecraft</option>
              <option value="Fortnite">Fortnite</option>
              <option value="Apex Legends">Apex Legends</option>
              <option value="Other">Other</option>

            </select>
          </div>
       </div>
       <div>
         {other===true && <div className="inputfield">
            <label>Enter Game Name</label>
            <input type='text' required maxLength='20' value={game}  onChange={(e)=>setGame(e.target.value)} className="input"/>
       </div>
         }
         <div></div>
       </div>  
       <div className="inputfield">
          <label>Start Date</label>
          <DatePicker value={startDate} onChange={setStartDate} format="dd/MM/yyyy" className="datePick"/>
       </div>
       <div className="inputfield">
          <label>End Date</label>
          <DatePicker value={endDate} onChange={setEndDate} format="dd/MM/yyyy" className="datePick"/>
       </div>    
      <div className="inputfield">
          <label>Campaign Budget</label>
          <input type='number' required value={budget} onChange={(e)=>setBudget(e.target.value)} required max="9999" className="input"/>
       </div> 
       <div className="inputfield">
          <label>Crypto Payment</label>
          <div className="custom_select">
            <select value={crypto} onChange={(e)=>setCrypto(e.target.value)} required>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
       </div> 
       <div className="inputfield">
          <label>Campaign Language</label>
          <div className="custom_select">
            <select value={lang} onChange={(e)=>setLang(e.target.value)} required>
              <option value="">Select</option>
              <option value="en">English</option>
              <option value="de">German</option>
              <option value="es">Spanish</option>
              <option value="jp">Japanese</option>
            </select>
          </div>
       </div> 
      <div className="inputfield">
        <input type="submit" value="Submit" onClick={handleSubmit} className="btn" />
      </div>
      <div>
        {
          list.map((e)=><div>
            <li>{e.name} - {e.game} - {(e.startDate).toLocaleDateString()} - {e.budget} - {e.lang}</li>
            </div>)
        }
      </div>
    </div>
</div>

    </div>
  );
}

export default App;

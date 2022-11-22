const firstSetAudio = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

const secondSetAudio = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
];

const activeStyle = {
  float:"right"
};

const inactiveStyle = {
  float:"left"
};

const soundsName = {
  heaterKit: "Heater Kit",
  smoothPianoKit: "Smooth Piano Kit"
};

const soundsGroup = {
  heaterKit: firstSetAudio,
  smoothPianoKit: secondSetAudio
}

const keyActiveStyle = {
  backgroundColor: 'orange',
};

const keyInactiveStyle = {
  backgroundColor: 'grey',
};

function App(){

  const [activeSet,setActiveSet]=React.useState(inactiveStyle)
  const [activePower,setActive]=React.useState(activeStyle)
  const [power, setPower] = React.useState(true);
  const [volume,setVolume]= React.useState(0.5);
  const [soundName, setSoundName] = React.useState("");
  const [soundType, setSoundType] = React.useState("heaterKit");
  const [sounds, setSounds] = React.useState(soundsGroup[soundType]);
  
  
  //Para cambiar entre los 2 sets de sonidos
  const changeSoundGroup = () => {
    setSoundName("")
    if(soundType === "heaterKit"){
        setSoundType("smoothPianoKit");
        setSounds(soundsGroup.smoothPianoKit);
        setActiveSet(activeStyle)
    } else {
        setSoundType("heaterKit");
        setSounds(soundsGroup.heaterKit);
        setActiveSet(inactiveStyle)
    }
  }
  const stopSound = () => {
    setPower(!power)
    if (!power){
      setVolume(0.5)
      setActive(activeStyle)
    }else{
      setVolume(0)
      setActive(inactiveStyle)
    }
 }


  return(
      <div id="drum-machine" className="container">
          <div className="pad-bank" >
            {sounds.map((clip)=>(
              <DrumPad key={clip.id} clip={clip} volume={volume} setSoundName={setSoundName} />
            ))}
          </div>
          <div className="logo">
              <div className="inner-logo"></div>
          </div>
          <div className="controls-container">
              <p id="display"> {soundName || soundsName[soundType]}</p>
              <div className="control">
                  <div className="btn-secondary ">Power {power ? 'ON' : 'OFF'}</div>
                  <div className="select" > 
                      <div className="inner" onClick={stopSound} style={activePower}></div>
                  </div>
              </div>
              <div className="volume-slider">
                <p>Volume</p>
                <input type="range" step="0.1" value={volume} min="0" max="1" onChange={(event)=>setVolume(event.target.value)} />
              </div>
              <div className="control">
                  <p>Switch Set</p>
                  <div className="select">
                      <div className="inner" onClick={changeSoundGroup} style={activeSet} ></div>
                  </div>
          
              </div>
          </div>
      </div>
    )
}


function DrumPad({clip,volume,setSoundName}){
  //Cambiar el color al apretar
  const [activeStyle,setActiveStyle]=React.useState(keyInactiveStyle)

 
  //Reproducir Sonidos
  const playSound=()=>{
    const wichAudio = document.getElementById(clip.keyTrigger)
    wichAudio.currentTime = 0;
    wichAudio.play()
    
    //Para controlar el color de los botones al apretarlos
    setActiveStyle(keyActiveStyle)
    setTimeout(()=>setActiveStyle(keyInactiveStyle),200)
    setSoundName(clip.id)
    //Controlar Volumen
    wichAudio.volume=volume;
  }

  //Reproducir Sonidos apretando teclas
  //Necesito un eventListener
  React.useEffect(()=>{
    document.addEventListener('keydown',keyPress);
    //CleanUp Function que remueve el event listener
    return ()=>{
      document.removeEventListener('keydown',keyPress);
    }
  })

  //Funcion de Keypress con un parametro de "event"
  const keyPress =(event)=>{
    if( event.keyCode == clip.keyCode ){
      playSound();
    }
  }
  
  return(
    <div className='drum-pad' onClick={playSound} id={clip.id} style={activeStyle}>
      <audio className="clip" id={clip.keyTrigger} src={clip.url} />
      {clip.keyTrigger}
    </div>
  )

}


ReactDOM.render(<App />, document.getElementById("app"));
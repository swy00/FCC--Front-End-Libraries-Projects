function App(){

    const [ displayTime, setDisplayTime ]=React.useState(25*60)
    const [ breakTime, setBreakTime ] = React.useState(5*60)
    const [ sessionTime, setSessionTime ] = React.useState(25*60)
    const [ timerOn, setTimerOn ] = React.useState(false)
    const [ onBreak, setOnBreak] = React.useState(false)
    const [ breakAudio, setBreakAudio] = React.useState()

 

    const formatoTiempo = (tiempo,reconocer) =>{
        let minutos = Math.floor(tiempo/60);
        let segundos= tiempo%60;
        if(reconocer == "editorSession" || reconocer == "editorBreak"){
            return (minutos)
        }else{
            return (
                    (minutos < 10? "0" + minutos : minutos) + ":" + 
                    (segundos < 10 ? "0" + segundos : segundos)
            );
        }
    }


    const cambiarTiempo = (cantidad,type) =>{
        
        if(type == "break"){
            if(breakTime <= 60  && cantidad < 0 || (breakTime >= (60 * 60) && cantidad >=0 ) || timerOn == true){
                return;
            }
            setBreakTime(prev => prev+cantidad);
        }else{
            if(sessionTime <= 60 && cantidad < 0 || (sessionTime >= (60 * 60) && cantidad >=0 ) || timerOn === true){
                return;
            }
            setSessionTime(prev => prev+cantidad)
            if (!timerOn){
                setDisplayTime( sessionTime + cantidad)
            }
        }
    }
    const controlTiempo = () =>{
        let second = 1000; //ms
        let date = new Date().getTime();
        let nextDate = new Date().getTime()+second;
        let onBreakVar = onBreak;

        if (!timerOn){
            let interval = setInterval (() => {
                date = new Date().getTime();
                if(date > nextDate){
                    setDisplayTime((prev)=>{
                        if(prev<=0 && !onBreakVar){
                            playBreakSound();
                            onBreakVar=true;
                            setOnBreak(true)
                            return breakTime;
                        }else if(prev<=0 && onBreakVar){
                            playBreakSound();
                            onBreakVar=false;
                            setOnBreak(false)
                            return sessionTime;
                        }
                        return prev-1;
                    });
                    nextDate+=second
                }
            }, 30);
            localStorage.clear();
            localStorage.setItem('interval-id',interval);
        }

        if(timerOn){
            clearInterval(localStorage.getItem('interval-id'))
        }
        setTimerOn(!timerOn)
    };


    const resetTime = () => {
        setDisplayTime(25*60)
        setBreakTime(5*60)
        setSessionTime(25*60)
        setOnBreak(false)
        const breakAudio = document.getElementById("beep");
        breakAudio.pause()
        breakAudio.currentTime = 0;
        if(timerOn){
          setTimerOn(false)
          controlTiempo()
        }
    }

    const playBreakSound = () => {
        const breakAudio = document.getElementById("beep");
        breakAudio.currentTime = 0;
        breakAudio.play();
    };

    return(
        <div className="text-center">
            <h1>25+5 Clock</h1>
            <div className="container">
                <Length 
                    titulo={"Break Length"} 
                    cambiarTiempo={cambiarTiempo} 
                    type={"break"} 
                    tiempo={breakTime} 
                    formatoTiempo={formatoTiempo} 
                    id="break-label"
                    nameIncrement="break-increment"
                    nameDecrement="break-decrement"
                    typeLength="break-length"
                    reconocer="editorBreak"
                />
                <Length 
                    titulo={"Session Length"} 
                    cambiarTiempo={cambiarTiempo} 
                    type={"session"} 
                    tiempo={sessionTime} 
                    formatoTiempo={formatoTiempo} 
                    id="session-label"
                    nameIncrement="session-increment"
                    nameDecrement="session-decrement"
                    typeLength="session-length"
                    reconocer="editorSession"
                />
            </div>
            <h3 id="timer-label">{onBreak ? "Break":"Session"} </h3>
            <h1 id="time-left">{formatoTiempo(displayTime)} </h1>
            <button type="button" className="btn btn-lg" onClick={controlTiempo} id="start_stop">
                {timerOn ? (
                    <i className="bi bi-pause-circle-fill" style={{fontSize: "2.4rem"}}></i>
                ):(
                    <i className="bi bi-play-circle" style={{fontSize: "2.4rem"}}></i>
                ) }
            </button>
            <button className="btn btn-large" onClick={resetTime} id="reset">
                <i className="bi bi-repeat" style={{fontSize: "2.4rem"}}></i>
            </button>
            <audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"/>
        
        </div>
    )
}

function Length({ titulo , cambiarTiempo , type , tiempo , formatoTiempo,id,nameDecrement,nameIncrement,typeLength,reconocer}){

    return(
        <div>
            <h3 id={id}>{titulo}</h3>
            <div className="time-set">
                <button type="button" className="btn btn-lg justify-content-center" onClick={()=> cambiarTiempo(-60,type)} id={nameDecrement}>
                    <i className="bi bi-arrow-down" style={{fontSize: "2.4rem"}}></i>
                </button>
                <h3 id={typeLength}>{formatoTiempo(tiempo,reconocer)} </h3>
                <button type="button" className="btn btn-lg" onClick={()=> cambiarTiempo(60,type)} id={nameIncrement}>
                    <i className="bi bi-arrow-up" style={{fontSize: "2.4rem"}}></i>
                </button>
            </div>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById("app"))
function App(){

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





    return(
        <div id="drum-machine" className="container">
            <div className="pad-bank">
                <div className="drum-pad">Q</div>
                <div className="drum-pad">W</div>
                <div className="drum-pad">E</div>
                <div className="drum-pad">A</div>
                <div className="drum-pad">S</div>
                <div className="drum-pad">D</div>
                <div className="drum-pad">Z</div>
                <div className="drum-pad">X</div>
                <div className="drum-pad">C</div>
            </div>
            <div className="logo">
                <div className="inner-logo"></div>
            </div>
            <div className="controls-container">
                <p id="display"> Test</p>
                <div className="control">
                    <p>Power</p>
                    <div className="select">
                        <div className="inner"></div>
                    </div>
                </div>
                <div className="volume-slider">

                </div>
                <div className="control">
                    <p>Switch</p>
                    <div className="select">
                        <div className="inner"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("app"));
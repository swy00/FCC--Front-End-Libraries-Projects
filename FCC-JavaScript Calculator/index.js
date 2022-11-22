function App(){

    const [expresion,setExpresion]=React.useState("");
    const [respuesta,setRespuesta]=React.useState(0);

    const display = (simbolo) => {

        //Necesito "limpiar" el input en caso de repeticion de simbolos
        //Creo una variable temporal con el input separando los numeros
        let tempLimpieza=(expresion+simbolo).split(/[+|\-|\*|=|\/]/)
        //console.log(tempLimpieza[tempLimpieza.length - 1]!="0")
        if(tempLimpieza[tempLimpieza.length - 1]!="0"){
            setExpresion((expresion + simbolo)
                          //Para eliminar repeticiones
                          .replace(/([1-9]+)(\.)([1-9]+)(\.)/g,'$1$2$3')
                          .replace(/([\-\-])([\-])/g,'$2')                        
                          .replace(/([\+\-|\*\-|\/\-])([\+|\*|=|\/|\.\.])/g,'$2')
                          .replace(/([\+|\*|=|\/|\.\.])([\+|\*|=|\/|\.\.])/g, '$2'));
        }

        if(tempLimpieza[tempLimpieza.length - 1]==""){
          setRespuesta(simbolo);
        }else{
          setRespuesta(tempLimpieza[tempLimpieza.length - 1]);
        }
        
        
        if(expresion[expresion.length-1]=="="){
            if(/[0-9]/.test(simbolo)){
                setExpresion(simbolo)
            }else{
                setExpresion(respuesta + simbolo)
            }
        }
    };

    const calcular = () =>{
        setRespuesta(eval(expresion))
        setExpresion(prev=>prev + "=")
    };

    const borrar = () =>{
        setExpresion("");
        setRespuesta(0)
    }


    return (
        
        <div className="container">
            <div className="grid">
                <div id="display" onClick={display} className="dis">
                    <div id="display" className="total">{respuesta} </div>
                    <input id="display"  type="text" value={expresion} placeholder="0"/>
                </div>
                <div id="clear" onClick={borrar} className="padButton AC rojo">AC</div>
                <div id="divide" onClick={() => display("/")} className="padButton div">/</div>
                <div id="multiply" onClick={() => display("*")} className="padButton mult">X</div>
                <div id="seven" onClick={() => display("7")} className="padButton siete gris-oscuro">7</div>
                <div id="eight" onClick={() => display("8")} className="padButton ocho gris-oscuro">8</div>
                <div id="nine" onClick={() => display("9")} className="padButton nueve gris-oscuro">9</div>
                <div id="subtract" onClick={() => display("-")} className="padButton menos ">-</div>
                <div id="four" onClick={() => display("4")} className="padButton cuatro gris-oscuro">4</div>
                <div id="five" onClick={() => display("5")} className="padButton cinco gris-oscuro">5</div>
                <div id="six" onClick={() => display("6")} className="padButton seis gris-oscuro">6</div>
                <div id="add" onClick={() => display("+")} className="padButton mas">+</div>
                <div id="one" onClick={() => display("1")} className="padButton uno gris-oscuro">1</div>
                <div id="two" onClick={() => display("2")} className="padButton dos gris-oscuro">2</div>
                <div id="three" onClick={() => display("3")} className="padButton tres gris-oscuro">3</div>
                <div id="equals" onClick={calcular} className="padButton igual azul">=</div>
                <div id="zero" onClick={() => display("0")} className="padButton cero gris-oscuro">0</div>
                <div id="decimal" onClick={() => display(".")} className="padButton punto gris-oscuro">.</div>
            </div>
        </div>
    );
    
}


ReactDOM.render(<App/>,document.getElementById('app'))
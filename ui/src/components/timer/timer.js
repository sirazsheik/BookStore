import React,{ useState} from "react"
// import './App.css';
// import Counter from "../counter/counter";

const Timer=()=>{
    const [counter,setCounter]=useState(0);
    // const [count,setCount] = useState(0);
    const [min,setMin]=useState(0);
    const [countMins,setCountMins]=useState(0);

    const onIncrement = () =>{
        setMin(min+1);
    }
    const onDecrement = () =>{
        setMin(min-1);
    }

    // useEffect(()=>{
    //     if(counter>0){
    //         let a=setInterval(()=>{
    //             setCounter(counter => counter-1);
    //         },1000)
    //        return clearInterval(a);
    //     }
    // },[counter]);

    // const minCount=()=>{
    //     if (counter===0){
    //         setMin(counter+1)
    //     }
    // }

    // useEffect(()=>{
    //     minCount(counter);
    // });
    // const fun =() =>{
    //     if(min){
    //         setCount(min-1)
    //         setCounter(59)
    //         let counta = min *60 -2
    //         let a=setInterval(()=>{
    //             counta = counta-1
    //             if(counta === 0){
    //                 setCounter(counta%60);
    //                 clearInterval(a)
    //             }
    //             else{
    //                 setCounter(counta%60);
    //                 if(counta%60===0){
    //                     setCount(parseInt(counta/60) -1)
    //                 }
    
    //             }
    //         },1000)
    //     }
    // }    


    const fun=()=>{
        setCounter(59);
        if(true){
            for(let i=0;i<=min;i++){
                let biscuit=59;
                let a=setInterval(()=>{
                    biscuit=biscuit-1
                  if(biscuit <=0){
                    setCounter(biscuit)
                }else{
                    setCounter(0)
                    clearInterval(a)
                }
                
            },1000);
            }
            setCountMins(min-1);
            if(true){
                let b=setInterval(()=>{
                    setCountMins(e=>{
                        if(e>0){
                            return e-1;
                        }
                        return 0;
                    })
                },600);
            }

        }
    }

    const fun2=()=>{
        fun()
   
    }


    return(
        <div className='App'>
            <h1>Timer</h1>
            {/* <h1>{minCount}</h1> */}
            <h1>{countMins}:{counter}</h1>
            <div>
              {counter<=1?<button className='minus' onClick={onDecrement} disabled>-</button>
                :<button className='minus' onClick={onDecrement}>-</button>}
              <p className='rad'>{min}</p>
              {counter>=60?<button className='plus' onClick={onIncrement} disabled>+</button>
                :<button className='plus' onClick={onIncrement}>+</button>}
            </div>
            <button className='startBtn' onClick={fun2} >Start</button>
        </div>
    )
}

export default Timer;
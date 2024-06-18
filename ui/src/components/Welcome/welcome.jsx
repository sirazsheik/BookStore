import { Component } from 'react'
import './welcome.css'
class Welcome extends Component {
    state ={
        count : 0,
        valuee : ''
    }
    render() {
        const {count,valuee} = this.state
        const {user,img} = this.props
        const fun = (e) =>{
            if(e.target.value===''){
            console.log(e.target.classList.add('red'))
            }
        }
       
        return (<>
            <h1>Welcome {user} {valuee} </h1>
            
            <h1>{count}</h1>
            {/* <button onClick={()=> this.setState(pre => ({ count : pre.count+1}))}>click me</button>  */}
            <input value={valuee} onBlur={fun} onChange={(e)=>this.setState({valuee : e.target.value})}/>
            </>
            )
    }

}
export default Welcome


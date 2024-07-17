
let Form =()=>{
    const{useState} = React
 const[text,setText]= useState('')
 const[hobby,setHobby]= useState([ {id:1,hobbies:'walking'} ])


    let handleClick=()=>{
        const obj = {
            id: hobby.length + 1,
            hobbies :text
        }
        setHobby([...hobby,obj])
        setText('')
    }   
    console.log(hobby)

    let handleChange= (event)=>{
        let val = event.target.value;
        setText(val)
    }
    console.log(text)

 return( 

    <div>
    <input type='text' placeholder='hobbys' value={text} onChange={handleChange} />
    <button onClick={handleClick}>Add</button>

    
    <div >
        {
            hobby.map((el)=>{
                return <div>
                    <h1>

                    {el.id} . {el.hobbies}
                    </h1>
                    </div>
            })
        }
    </div>

    </div>
 )

}


let App=()=>{
    return (
    <div> 
    <Form/>
    </div>
)}

let root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)
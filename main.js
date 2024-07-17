let HobbyList=({hobby})=>{
    return(
            <>
            <h1>My hobbies are :</h1>
        <div >
    {
        hobby.map((el)=>{
            return(
            <div key={el.id}>
                <h3>
                {el.id} . {el.hobbies}
                </h3>
                <button onClick={()=>handleDelete(el.id)}>Delete </button>
            </div>
            )
        })
    }
    </div>
            </>
    )
}


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


    let handleDelete=()={
        
    }

 return( 

    <div>
    <input type='text' placeholder='hobbys' value={text} onChange={handleChange} />
    <button onClick={handleClick}>Add</button>

    
    <div >
        <HobbyList hobby={hobby} handleDelete={handleDelete}/>
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
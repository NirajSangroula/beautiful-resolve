import {useState} from 'react'
export default function PersonInsert(){
    const [name, setName] = useState("");
    const handleSubmit = (event) => {
        alert(name)
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>Name: 
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </label>
                <input type="submit" value="Create" onSubmit={handleSubmit}/>
            </form>
        </>
    )
}
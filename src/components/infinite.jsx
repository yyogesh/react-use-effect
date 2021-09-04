import { useEffect, useState } from "react"
function App() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("Running useEffect")
        setCount(count + 1) //wrong
    }, [count])

    console.log("Running render")
    return (
        <div className="App">
            <button onClick={() => setCount(count + 1)}>Click Me</button>
        </div>
    )
}
export default App
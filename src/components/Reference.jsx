

const [count, setCount]= useState(0)


refcount = useRef(count)

function referencFunction() {
    refCount.current = count + 1;
}


function referencFunctionDec() {
    refCount.current = refCount.current - 1;
}



return (
    <>
    <button onClick={referencFunction}>Refrencebutton</button>
    <button onClick={setCount(count + 1)}>stateCount</button>

    <buton onClick={referencFunctionDec}>Decrement</buton>
    </>
)
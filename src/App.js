import "./App.css"
function App(){
  return(
    <>
    <h1 className='wrap'>Background color change</h1>
    <input type="color" onChange={
      (event)=>{
        document.body.style.background=event.target.value
      }
        
    }/>
    </>
  )
}
export default App

//Functions
//class
console.log("React script loaded")

const App = () => 
    {
    console.log("App component rendering")

    return (
        <div class="ui segment">
            

        <h3>Welcome To React {probs.name}!</h3>
        <div class="ui raised segment">
  <div class="ui segment">
    <p>Top</p>
  </div>
  <div class="ui segment">
    <p>Middle</p>
  </div>
  
  <div class="ui segment">
    <p>Bottom</p>
  </div>
</div>
        </div>
    )
}

//Functional Component Example
const Comp1=(probs)=>
{

}

//class component

class App1 extends React.Component{
    someMethod(){
        console.log("someMethod Called! ")
    }
    render() {
        return(
            <div>

            </div>
        )

   }
}

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<App />)

/*
Satemangement
*/
//Class Component
class Comp extends React.Component{
    state={}
    render(){
        return(
            <div class="ui form raised placeholder segment"
             style={{
                maxWidth: "1000px", 
                margin: "0 auto", 
            }}
            >
            <div class="field">
              <label>News Title</label>
              <input type="text" />
            </div>
            <div class="field">
              <label>New Description</label>
              <input type="text" />
            </div>
            <div class="field">
              <div class="ui checkbox">
               <textarea rows="5"></textarea>
                
              </div>
            </div>
            <button class="ui primary button" type="submit">Submit</button>
            <br></br>
            <button class="ui button" type="submit">Ok</button>
          </div>
          
        )

        
    }
}
const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<Comp />)

import "./Body.css"
import { data } from "../../Data.js";


export default function Body(props) {

  const {state,disPatch} = props.stateProps
  const HandleAdd = (id) => {
      if (state[`${id}`]) {
        console.log("inc")
        disPatch({ type: 'inc', id })
      } else {
        console.log("create")
        disPatch({ type: 'create', id })
      }
    alert("Add Successfully")
  }
  return (
    <div className='containerBody'>
      {
        data.items.map((element) => {
          return (
          <div className='card' key = {element.id}>
            <div className="image">
                <img src={element.photo} alt="" />
            </div>
                <div className='data'>
                <p>{ element.name}</p>
                <p>{element.price}</p>
                </div>
                <button className='buttonAdd' onClick={() => HandleAdd(element.id)}>ADD TO CARD</button>
          </div>
          )
        })
      }
    </div>
  )
}

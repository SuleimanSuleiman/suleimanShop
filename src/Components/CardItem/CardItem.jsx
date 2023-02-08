import React from 'react'
import "./CardItem.css"
import { data } from '../../Data';


export default function CardItem(props) {

  const { state, disPatch } = props.stateProps;
  let id = Object.keys(state);
  let localState = [];
  data.items.forEach(element => {
    if (id.includes(`${element.id}`)) {
      localState.push(element);
    }
  });

  const increase = (id) => {
    disPatch({ type: "inc", id })
    alert("Update Successfully")
  }

  const decrease = (id, number) => {
    if (number <= 1) {
      disPatch({ type: "delete", id })  
    } else if(number >1){
      disPatch({ type: "dec", id })
    }
    alert("Update Successfully")
  }
  
  const deleteAll = () => {
    const pro = window.confirm("are you sure ?")
    if (pro) {
     disPatch({type: 'deleteAll'}) 
    }
  }

  return (
    <div className='body'>
      <div className="title">
        <p>Cart Item</p>
      </div>
      <div className="button">
          <button onClick={() => deleteAll()} className='clearButton'>Clear Card</button>
      </div>
      <div className="bodyItem">
        {
          localState.map((ele) => {
            return (
                <div className="item" key={ele.id}>
                  <div className="image">
                    <img src={ele.photo} alt="" />
                  </div>
                  <div className="data">
                    <p>{ele.name}</p>
                  </div>
                  <div className="buttonIncAndDec">
                    <button className='increase' onClick={() => increase(ele.id)}>+</button>
                  <button className='decrease' onClick={() => decrease(ele.id,state[`${ele.id}`].number)}>-</button>
                  </div>
                  <div className="price">
                  <p><span className='number'>{state[`${ele.id}`].number}</span>*<span className='priceSpan'>{ele.price}</span></p>
                  </div>
                </div>
              )            
          })
        }
      </div>
    </div>
  )
}

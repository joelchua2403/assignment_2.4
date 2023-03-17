import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Form from "./Form";
import PriceInput from "./PriceInput";

function Counter() {
  const [count, setCount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  const handlePlus = () => {
        setCount((prevCount) => {
      let c = prevCount + 1;
      if (c >= 5) {
        setDiscount(20)
      }
      return c;
    })
    
  };
  const handleMinus = () => {
    setCount((prevCount) => {
        if (prevCount > 0) {
            let c = prevCount - 1;
            if (c < 5) {
              setDiscount(0);
            }
            return c;
        } else {
            alert("You can't have less than 0 items");
            return prevCount;
        }
    }
    )
    }

    const handleChange = (value) => {
        setName(value);
    }

    const handleChangePrice = (value) => {
        if (value < 0) {
            alert("You can't have a negative price");
            return;
        }
        setPrice(value);
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     alert(count + " " + name + " added" )
    // }

  return (
    <>
      <h2>{name}</h2>
        <Button label='-' onClick={handleMinus} />
      <span>{count}</span>
     <Button label='+' onClick={handlePlus} />
     { price > 0 ? <h2>{`$ ${price * count}`} total</h2> : null}
      <h2>{`$ ${price}`} each</h2>
      <h3>{`Discount: ${discount}%`}</h3>
      <Input label='Product' onChange={handleChange}/>
      <PriceInput label='Price' onChange={handleChangePrice}/>
      <Form name={name} count={count} />
    </>
  );
}
export default Counter;

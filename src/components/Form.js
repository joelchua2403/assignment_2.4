import React from 'react'


const Form = ({ name, count }) => {

    const handleSubmit = () => {
        alert(count + " " + name + " added")
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="submit" value="Buy Now" />
    </form>
  )
}

export default Form

import React from 'react'

const Form = () => {
    //using state object
    const [formData, setFormData] = React.useState({
        firstName: "" , 
        email: "", 
        comments: "", 
        isFriendly: true, 
        employment: "",
        favColor: ""
    })

    function handleChange(event){
      //destructure evernt.target
        const {name, value, type, checked} = event.target
        // computed properties feature in ES6 allows surrounding of key with square brackets such that we can turn a dynamic string(something saved in a variable) and use it as the property name for an object
        setFormData(prevFormData => ({
          ...prevFormData,
          [name]: type === "checkbox"? checked : value
        }
          ))
    }

    function handleSubmit(e){
      e.preventDefault()   
      console.log(formData)   
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='First Name' name="firstName" onChange={handleChange} value={formData.firstName} />    
        <input type="email" placeholder="Email" name="email" onChange={handleChange} value={formData.email}/>   
        <textarea name="comments" onChange={handleChange} value={formData.comments} />
        <input type="checkbox" id="isFriendly" name="isFriendly" onChange={handleChange} checked={formData.isFriendly} />
        <label htmlFor="isFriendly">Are you friendly?</label>
        <br /><br />
        <fieldset>
          <legend>Current Employment Status</legend>
          <input type="radio" id="unemployed"  name="employment" value="unemployed" checked={formData.employment === "unemployed"}  onChange={handleChange}  />
          <label htmlFor="unemployed">Unemployed</label>
          <input type="radio" id="part-time"  name="employment" value="part-time" checked={formData.employment === "part-time"} onChange={handleChange}  />
          <label htmlFor="unemployed">Part time</label>
        </fieldset>
        <br /><br />
        <select id="favColor" name="favColor" value={formData.favColor} onChange={handleChange}>
        <option value="">-- Choose --</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
        </select>
        <button>Submit</button>
    </form>
  )
}

export default Form

//cont from 8:35:20
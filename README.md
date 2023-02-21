# Passing Data to In React And Forms
-  This project helps to understand how to manage data in the parent by a child component.

## Passing Data

**NB:**
1. inline styles with dynamic styling

    ```jsx
    const styles={
            backgroundColor: props.on? "#222222": "transparent"
        }
    ```

1. Best way to change state from a child component, while ensuring state is in the parent component only but we are not changing state directly,  ~~supplement with notes~~
    - Pass a function to component that when clicked modifies state that is in parent

    ```js
    <Box key={square.id} id={square.id} on={square.on} toggle={toggle} />
    ```

    - You can also not pass an id down to the component but instead say that the toggle function that is being passed down will be an individualized toggle function and pass the id immeadiately as we are passing the toggle function down as an argument to the funciton. This creates a **closure** where each instance of our compoenent (*i.e., Box*) will have its own toggle and will remember its own id removing the need for an id to be passed down as a separate prop.

    ```js
    //Code in App.jsx
    <Box key={square.id} on={square.on} toggle={() => toggle(square.id)} />

    //Code in Box.jsx
    <div style={styles} className='box' onClick={props.toggle} ></div>
    ```


 ## Forms
 1. How forms are handled in react
    - In the old days a form  would be given an action which linked to a php file that would process the form and method then on submit php would pick everything and process the data

        ```html
        <form action="https://my-php-backend.com" method="POST" id="my-form"></form>
        
        ```
    - In vanilla js we would get the form, add a submit event listener then the function that runs would gather all the values together then submit it to an API. With this data would be gathered immeadiately at the end of the process than submit it after gathering it

        ```js
        document.getElementById("my-form").addEventListener("submit", (event)=>{
            event.preventDefault()
            const formElements = event.target.elements
            const {firstName, lastName} = formElements
            submitViaAPI({
                firstName: firstName.value,
                lastName: lastName.value
            })
        })

        function submitViaAPI(data){
            //submission with fetch
            console.log("submitted")
        }
        ```
    - In React instead of gathering everything at the end, we create state and on every change we update state and when time to submit comes we just submit the state we have been gathering. Read react documentation on forms.

1. Controlled inputs - when we're talking about maintaing state in a component there is a concept called the *single source of truth*. The idea is that the state we are maintaing in a component should be the single source of truth. With forms in react, in the markup inside our inputs each input is holding its own state so we end up with two states; one being held in the react state and another by the form markup. A good practice is to  make the react state be what drives the state that is visible inside our input box and not the other way round, everytime we type the value of the input box will be controlled by react instead of the input. To fix this we add a value field inside our input that is linked to the react state. Read react documentation on controlled components. 
    ```js
    <input
         type="text" 
         placeholder='First Name' 
         name="firstName" 
         onChange={handleChange} 
         value={formData.firstName}
    />    
    ```
    Note that radio buttons can't be controlled the same way so we have to pass a checked property to it.
    
      ```jsx
        //Here the input has its own html state
        <input type="radio" id="unemployed"  name="employment" value="unemployed" onChange={handleChange}  />
        
        //Here react manages state
        <input type="radio" id="unemployed"  name="employment" value="unemployed" checked={formData.employment === "unemployed"}  onChange={handleChange}  />
      ```

1. When we have a label that is tied to an input you can nest the input inside the children of the label or keep them as separate elements but point that label using htmlFor to the id of an input.




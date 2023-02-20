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





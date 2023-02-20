import React from 'react'

const Box = (props) => {
    const styles={
        backgroundColor: props.on? "#222222": "transparent"
    }

    return (
        <div style={styles} className='box' onClick={() => props.toggle(props.id)} ></div>
    )
}

export default Box
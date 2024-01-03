const ColorDisplay = ({newColor}) => {
  return (
     <section 
     className="display"
     style= {{backgroundColor: newColor}}
     >
        <p>{newColor ? newColor : "Empty Value"}</p>
    </section>
      
  )
}

ColorDisplay.defaultProps ={
  newColor: "Empty Color Value"
}

export default ColorDisplay

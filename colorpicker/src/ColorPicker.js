const ColorPicker = ({newColor, setNewColor}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Add Color Name:</label>
      <input 
        autofocus
        type="text"
        placeholder="Add color name"
        required
        value={newColor}
        onChange={(e)=> setNewColor(e.target.value)}
        />
    </form> 
  )
}

export default ColorPicker

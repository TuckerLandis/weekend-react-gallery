function Form (props) {



    return (


        <form onSubmit={props.handleSubmit}>
        <label>
          URL
        </label>

        <input
          type="text"
          placeholder="URL"
          value={props.postObj.url}
          onChange={(evt) => props.setpostObj(evt.target.value)}
        />
   
        <label>
          Desc
        </label>
        <input
          type="text"
          placeholder="Name"
          value={props.newGuestName}
          onChange={(evt) => props.setNewGuestName(evt.target.value)}
        />

        <button type="submit">Add Guest</button>
      </form>
    )
}

export default Form
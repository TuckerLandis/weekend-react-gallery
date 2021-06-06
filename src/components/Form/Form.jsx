function Form (props) {



    return (


        <form onSubmit={props.handleSubmit}>
        <label>
          URL
        </label>

        <input
          type="text"
          placeholder="URL"
          value={props.postUrl}
          onChange={(evt) => props.setPostUrl(evt.target.value)}
        />
   
        <label>
          Desc
        </label>
        <input
          type="text"
          placeholder="Description"
          value={props.postDesc}
          onChange={(evt) => props.setPostDesc(evt.target.value)}
        />

        <button type="submit">Post Photo</button>
      </form>
    )
}

export default Form
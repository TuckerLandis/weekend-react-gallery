import Button from '@material-ui/core/Button';

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

        <Button type="submit" variant="contained" color="primary">Post Photo</Button>
      </form>
    )
}

export default Form
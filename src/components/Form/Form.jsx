import Button from '@material-ui/core/Button';
import '@fontsource/roboto';

import TextField from '@material-ui/core/TextField';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';

import './Form.css'


function Form (props) {

    return (
        <form className="{classes.root} form-spc" noValidate autoComplete="off" onSubmit={props.handleSubmit}>
       
        <TextField
          type="text"
          placeholder="URL"
          value={props.postUrl}
          onChange={(evt) => props.setPostUrl(evt.target.value)}
        />
   
       
        <TextField
          type="text"
          placeholder="Description"
          value={props.postDesc}
          onChange={(evt) => props.setPostDesc(evt.target.value)}
        />

        <Button className="submit-button" type="submit" variant="hidden" color="primary"><AddPhotoAlternateIcon /></Button>
      </form>
    )
}

export default Form
import Button from '@material-ui/core/Button';
import '@fontsource/roboto';

import TextField from '@material-ui/core/TextField';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';

import './Form.css'


function Form (props) {

    return (
        <form className="{classes.root} form-spc d-flex justify-content-around align-items-center" noValidate autoComplete="off" onSubmit={props.handleSubmit}>
       
        <TextField className="text-field"
          type="text"
          placeholder="URL"
          value={props.postUrl}
          onChange={(evt) => props.setPostUrl(evt.target.value)}
        />
   
       
        <TextField className="text-field"
          type="text"
          placeholder="Description"
          value={props.postDesc}
          onChange={(evt) => props.setPostDesc(evt.target.value)}
        />
      <div className="button-border">
        <Button className="submit-button" type="submit" variant="hidden" color="primary"><AddPhotoAlternateIcon /></Button>
      </div>
      </form>
    )
}

export default Form
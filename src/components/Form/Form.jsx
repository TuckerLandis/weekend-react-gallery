import Button from '@material-ui/core/Button';
import '@fontsource/roboto';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    
    },
  },
}));

function Form (props) {

    const classes = useStyles();

    return (


        <form className={classes.root} noValidate autoComplete="off" onSubmit={props.handleSubmit}>
       

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

        <Button type="submit" variant="contained" color="primary">Post Photo</Button>
      </form>
    )
}

export default Form
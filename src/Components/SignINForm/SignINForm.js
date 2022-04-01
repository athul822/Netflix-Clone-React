import {
    Card,
    CardContent,
    Typography,
    Box,
    CardActions,
    Button,
    TextField,
    FormControlLabel,
    Checkbox,
    makeStyles,Theme
} from "@mui/material";

import "./SignInForm.css";




function SignINForm({setEmail,setPassword,handleAction}) {

   
    
    
    const bull = (
        <Box component="span" sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
            •
        </Box>
    );
    return (
        <div className="container bg-light">
            <div>
                <form className="row justify-content-center align-items-center">
                    <Card className="col-10 col-md-4 bg-dark">
                        <CardContent>
                            <Typography className="text-white" gutterBottom variant="h5" component="div">
                                Sign In
                            </Typography>
                            <TextField
                                className="sign-in-text-field col-12 mt-3 text-white"
                                id="filled-search"
                                label="Email or Phone Number"
                                type="search"
                                variant="filled"
                               
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                            <TextField
                                className="sign-in-text-field col-12 mt-3"
                                id="filled-search"
                                label="Password"
                                type="password"
                                variant="filled"
                               
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                            <button type="submit" className="lgn-submit-btn btn col-12 mt-5" onClick={(e)=>{
                                 e.preventDefault();
                                 handleAction()
                            }}>
                                Sign In
                            </button>
                        </CardContent>
                        <div className="row">
                            <FormControlLabel
                                className="col-5 ml-5"
                                control={<Checkbox defaultChecked />}
                                label="Label"
                            />
                            <a href="#" className="col-5">
                                Need Help ?
                            </a>
                        </div>
                        <CardActions></CardActions>
                    </Card>
                </form>
            </div>
        </div>
    );
}

export default SignINForm;

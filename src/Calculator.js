import React,{useState,useEffect} from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Calculator() {
  const classes = useStyles();
  const [operator, setOperator] = useState(1); //useSt
  const [numberInput1, setNumberInput1] = useState(0);
  const [numberInput2, setNumberInput2] = useState(0);
  const [result, setResult] = useState(0);
  const operatorText = [,"บวก", "ลบ", "คูณ", "หาร"];
  useEffect(() => {
    switch (operator) {
      case 1:
        // 1 คือ บวก
        setResult(numberInput1 + numberInput2);
        break;
      case 2:
        //ลบ
        setResult(numberInput1 - numberInput2);
        break;
        case 3:
        setResult(numberInput1 * numberInput2);
        break;
        case 4:
            setResult(numberInput1 / numberInput2);
            break;
      default:
        console.log("เลือก operator ไม่ถูกต้อง");
        break;
    }
    },
[operator, numberInput1, numberInput2]);
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <Box>
          <TextField
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            value={numberInput1.toString()}
            onChange={(event)=>{
                setNumberInput1(+event.target.value); 
              }}
          />
          <FormControl className={classes.formControl}>
            <InputLabel  shrink id="operator-label">operator</InputLabel>
            <Select
              labelId="operator-label"
              value={operator}
              onChange={(event)=>{
                setOperator(+event.target.value); 
              }}
            >
              <MenuItem value={1}>+</MenuItem>
              <MenuItem value={2}>-</MenuItem>
              <MenuItem value={3}>x</MenuItem>
              <MenuItem value={4}>/</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            value={numberInput2.toString()}
            onChange={(event)=>{
                setNumberInput2(+event.target.value); 
              }}
          />
       
        </Box>
        <br></br>
        <Box>
        {numberInput1} {operatorText[operator] }{numberInput2} ={" "}
        {result}
        </Box>
        

      </form>
    );
  };


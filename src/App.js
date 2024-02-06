import logo from './logo.svg';
import './App.css';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Button } from '@mui/material';


function App() {

  const theme = createTheme({
    components: {
      MuiButton: {
        variants: [
          {
            props: (props) =>
              props.variant === 'variant1',
            style: {
              backgroundColor:"red",
              color:"white",
              fontSize:"20px",
              width:"300px"
            },
          },
          {
            props: (props) =>
              props.variant === 'variant2',
            style: {
              backgroundColor:"brown",
              color:"white",
              fontSize:"20px",
              width:"300px"
            },
          },
          {
            props: (props) =>
              props.variant === 'variant3',
            style: {
              backgroundColor:"yellow",
              color:"white",
              fontSize:"20px",
              width:"300px"
            },
          },
        ],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
    <>
      <div style={{display:"flex", flexDirection:"column", marginTop:"5%"}}>
      <Button variant="variant1">Text</Button>
      <Button variant="variant2">Contained</Button>
      <Button variant="variant3">Outlined</Button>
      <Button variant="variant1">Text</Button>
      <Button variant="variant2">Contained</Button>
      <Button variant="variant2">Contained</Button>
      <Button variant="variant2">Contained</Button>
      </div>
    </>
    </ThemeProvider>
  );
}

export default App;

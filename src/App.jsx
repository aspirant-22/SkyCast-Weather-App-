//import './App.css'
import Button from '@mui/material/Button';  //Since we will use button, so import it
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import WeatherApp from './WeatherApp';
// function App() {

//   let handleClick = () => {
//     console.log("Button was clicked");
//   }

//   return (
//     <>
//       <h1>Material UI Demo</h1>
//       <Button variant="contained" onClick={handleClick}>Click Me</Button> &nbsp;
//       <Button variant="contained" onClick={handleClick} disabled>Click Me</Button> &nbsp;
//       <Button variant='contained' color='success' size='large'>Click Me</Button> &nbsp;
//       <Button variant='contained' color='secondary' startIcon={<DeleteIcon />}>Delete</Button>
//       <Alert severity="error">This is an error Alert.</Alert>
//     </>
//   )
// }

function App(){
  return(
    <div style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1496450681664-3df85efbd29f?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VhdGhlciUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D")`, // Or "/bg-image.jpg" for the public folder
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      minheight: '100vh'

    }}>
      <WeatherApp />
    </div>
  )
}

export default App

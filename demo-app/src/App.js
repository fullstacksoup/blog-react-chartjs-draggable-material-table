import { useState, useEffect } from 'react';
import ChartComp from './components/ChartComp'
import MatDataTable from './components/MatDataTable';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './App.css';

const rawData = [
  {label: 'Mon', aValue: 40, bValue: 62},
  {label: 'Tue', aValue: 14, bValue: 68},
  {label: 'Wed', aValue: 22, bValue: 76},
  {label: 'Thu', aValue: 43, bValue: 54},
  {label: 'Fri', aValue: 33, bValue: 58},
];

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function App() {  
  const [ username, setUsername ] = useState('danny123');
  const [ chartData, setChartData ] = useState([])  
  const [ isLoaded, setIsLoaded ] =  useState(false);
  const [ isDataChanged, setIsDataChanged ] =  useState(true);

  useEffect(() => {
      setIsLoaded(false)
      setChartData(rawData)

      setTimeout(() => {
          setIsLoaded(true)    
      }, 100);
    
  }, []);

  const onHandleChange  = (data) => {
      setIsDataChanged(false)
  setChartData(data)

    setTimeout(() => {
      setIsDataChanged(true)    
    }, 100);

  }

  return (
    <div className="App">
      
        <Box sx={{ flexGrow: 1, marginTop: 12 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={1}>
              
            </Grid>
            <Grid item xs={6} md={6}>
              {isLoaded &&
                  <ChartComp data={chartData} onHandleChange={onHandleChange}/>
              }
            </Grid>
            <Grid item xs={6} md={4}>
              
                <MatDataTable data={chartData}/>
              
            </Grid>
          </Grid>
        </Box>
      
      
    </div>
  );
}
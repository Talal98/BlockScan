import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import { Avatar, ListItem, ListItemButton } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import PlayArrow from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { Box } from '@mui/system';
import { FixedSizeList } from 'react-window';


function renderRow(props) {
  const { data, index, style} = props;
  const item = data[index]

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        {/* <ListItemText primary={item} /> */}
        <Typography variant='caption' sx={{ fontSize: 18 }} gutterBottom>
          {item}
        </Typography>
      </ListItemButton>
    </ListItem>
  );
}


export default function BasicCard({ imageLink, status, setStatus, chainName, blockNumber, blockMiner, blockTotalDifficulty, blockTransactions}) {
    const buttonhandle = () =>{
        setStatus(!status);
    }
  return (
    <Card style={{backgroundColor:'#121827',borderRadius:'10px', color:'#fff'}} sx={{ minWidth: 350, maxWidth:500 , minHeight:350 , maxHeight:560}} md={{minWidth:500 ,minHeight:500}}>
        <CardHeader
        avatar={
          <Avatar src={imageLink} aria-label="recipe">R</Avatar>
        }
        action={
          <IconButton aria-label="action" onClick={buttonhandle}>
            {status?<PauseIcon style={{ color: 'white' }} />:<PlayArrow style={{ color: 'white' }} />}
          </IconButton>
        }
        title={chainName}
        
      />
      <hr style={{background: '#FFFFFF'}}/>
      <CardContent>
        <div style={{marginBottom:'20px',}}>
            <Typography variant='h2' sx={{ fontSize: 22 }} >
            Block Number 
            </Typography>
            <Typography style={{ wordWrap: 'break-word' , marginBottom:'20px' }} variant='caption' sx={{ fontSize: 18 }} gutterBottom>
              {blockNumber}
            </Typography>
        </div>
        <div style={{marginBottom:'20px',}}>
            <Typography variant='h2' sx={{ fontSize: 22 }} >
            Block Miner 
            </Typography>
            <Typography style={{ wordWrap: 'break-word' , marginBottom:'20px' }} variant='caption' sx={{ fontSize: 18 }} gutterBottom>
              {blockMiner}
            </Typography>
        </div>
        <div style={{marginBottom:'20px',}}>
            <Typography variant='h2' sx={{ fontSize: 22 }} >
            Block Total Difficulty
            </Typography>
            <Typography style={{ wordWrap: 'break-word' , marginBottom:'20px' }} variant='caption' sx={{ fontSize: 18 }} gutterBottom>
              {blockTotalDifficulty}
            </Typography>
        </div>
        <Box
        sx={{ width: '100%', height: 400, maxWidth: 500, bgcolor: 'background.paper' }}>
            <Typography variant='h6' >
                Block Transactions 
            </Typography>
            <FixedSizeList
                height={200}
                width='100%'
                itemSize={46}
                itemCount={blockTransactions.length}
                overscanCount={5}
                itemData={blockTransactions}
            >
                {renderRow}
            </FixedSizeList>
        </Box>
      </CardContent>
    </Card>
  );
}

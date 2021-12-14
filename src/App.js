import {useState} from 'react'
import { Grid } from '@mui/material'
import {makeStyles} from '@mui/styles';
import BasicCard from './components/BasicCard/BasicCard';

const styles = makeStyles({
  containerStyle:{ minHeight: '100vh',display:'flex',justifyContent:'center',alignItems:'center'},
  cardContainerStyle:{
    display:'flex',justifyContent:'center',alignItems:'center',
  }
})

function App() {
  const classes = styles();

  const [status, setStatus] = useState(false);
  const [statusBSC, setStatusBSC] = useState(false);
  // const [render, setRender] = useState(true);
  const [blockNumber, setBlockNumber] = useState(0)
  const [blockTransactions, setBlockTransactions] = useState([])
  const [blockMiner, setBlockMiner] = useState(0)
  const [blockTotalDifficulty, setBlockTotalDifficulty] = useState(0)

  const [blockNumberBSC, setBlockNumberBSC] = useState(0)
  const [blockTransactionsBSC, setBlockTransactionsBSC] = useState([])
  const [blockMinerBSC, setBlockMinerBSC] = useState(0)
  const [blockTotalDifficultyBSC, setBlockTotalDifficultyBSC] = useState(0)

  const Web3 = require('web3');

  const eth_provider = 'https://eth-mainnet.alchemyapi.io/v2/demo';
  const bsc_provider = 'https://bsc-dataseed1.binance.org:443';

  const eth_web3Provider = new Web3.providers.HttpProvider(eth_provider);
  const bsc_web3Provider = new Web3.providers.HttpProvider(bsc_provider);

  const eth_web3 = new Web3(eth_web3Provider);
  const bsc_web3 = new Web3(bsc_web3Provider);


  const fun = async () => {  

    if(statusBSC === true){
      bsc_web3.eth.getBlock('latest').then((result) => {
        setBlockNumberBSC(result['number'])
        setBlockTransactionsBSC(result['transactions'])
        setBlockMinerBSC(result['miner'])
        setBlockTotalDifficultyBSC(result['totalDifficulty'])
      });
    }

    if(status === true){
      var result = await eth_web3.eth.getBlock('latest');
      setBlockNumber(result['number'])
      setBlockTransactions(result['transactions'])
      setBlockMiner(result['miner'])
      setBlockTotalDifficulty(result['totalDifficulty'])
    }
  }

  // useEffect(()=>{
  //   if(status === true)
  //   {
  //     setTimeout(fun, 3000);
  //     setRender(!render);
  //   }
  // },[render, status])

  setTimeout(fun, 3000);

  return (
    <div>
      <Grid spacing={2} container className={classes.containerStyle}>
        <Grid item sm={6} xs={12} className={classes.cardContainerStyle} >
          <BasicCard imageLink='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png' status={status} setStatus={setStatus} chainName="Etherscan" blockNumber={blockNumber} blockMiner={blockMiner} blockTotalDifficulty={blockTotalDifficulty} blockTransactions={blockTransactions}/>
        </Grid>
        <Grid item sm={6} xs={12} className={classes.cardContainerStyle} >
          <BasicCard imageLink='https://www.logo.wine/a/logo/Binance/Binance-Icon-Logo.wine.svg' status={statusBSC} setStatus={setStatusBSC} chainName="BscScan" blockNumber={blockNumberBSC} blockMiner={blockMinerBSC} blockTotalDifficulty={blockTotalDifficultyBSC} blockTransactions={blockTransactionsBSC}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

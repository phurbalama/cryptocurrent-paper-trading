import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, TablePagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CoinService from '../services/CoinService';
import CoinComponent from './CoinComponent';
import { Paper } from '@mui/material';

function SearchComponent(props) {
    const[coins,setCoins] = useState([]);
    const[page, setPage] = useState(0);
    const[rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) =>{
        setPage(newPage);
    }
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value,10));
        setPage(0);
    }
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, coins.length -page * rowsPerPage);
  
    useEffect(() =>{
        CoinService().then(res =>{
            setCoins(res.data);
        }).catch(error => alert("Error fetching API data"))
    },[coins])
    
    function filteredCoin(e){
        return coins.filter((e)=>e.id.toLowerCase().includes(props.name.toLowerCase()))
    }    

    return (
        
    <div className="coin-app">
        <br/>
        <br/>
        <br/>
        <br/>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Coin</TableCell>
                        <TableCell align="right">Symbol</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Total Volume</TableCell>
                        <TableCell align="right">24h % change</TableCell>
                        <TableCell align="right">Market Cap</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredCoin()
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((coin) =>{
                        return (<CoinComponent
                                    key={coin.id}
                                    name={coin.id}
                                    image={coin.image}
                                    symbol={coin.symbol}
                                    marketcap={coin.market_cap}
                                    price={coin.current_price}
                                    percentChange={coin.price_change_percentage_24h}
                                    volume={coin.total_volume}
                            />)
                    })}
                    {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                    </TableRow>
                    )}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5,10,25]}
                component="div"
                count={filteredCoin().length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}

            />


        </TableContainer>
    </div>);

}

export default SearchComponent;

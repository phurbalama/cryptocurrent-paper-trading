import { Avatar, TableCell, TableRow } from "@mui/material";


function CoinComponent({name,image,symbol,price,volume,marketcap,percentChange}) {
    return <TableRow>
            <TableCell>
                <Avatar src={image}/>
                {name[0].toUpperCase()+name.slice(1)}
            </TableCell>
            <TableCell align="right">{symbol}</TableCell>
            <TableCell align="right">${price}</TableCell>
            <TableCell align="right">${volume.toLocaleString()}</TableCell>
            <TableCell align="right">{percentChange.toFixed(2)}%</TableCell>
            <TableCell align="right">${marketcap.toLocaleString()}</TableCell>
        </TableRow>
    
    
}

export default CoinComponent;

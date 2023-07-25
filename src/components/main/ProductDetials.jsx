import { AddShoppingCartOutlined } from '@mui/icons-material';
import { Box, Button, Stack, Typography } from '@mui/material';


const ProductDetials = () => {
  return (
    <Box sx={{display: "flex", alignItems: "center", gap: 2.5, flexDirection: {xs: "column", sm: "row"}}}>
      <Box sx={{ display: "flex"}}>
        <img width={300} src="src/images/2.JPG" alt="" />
      </Box>
      <Box sx={{textAlign: {sx: "center", sm: "left"}}}>
        <Typography variant="h5">WOMAN'S FASHON</Typography>
        <Typography variant="body1" >$12.99</Typography>
        <Typography variant="body1" >
          Lizards are widespread group of squarte reptiles, with
          specles, ranhing across all continents except Antarctica
        </Typography>

        <Stack sx={{justifyContent: {xs: "center", sm: "left"}}} direction={"row"} gap={1} my={2}>
          {["src/images/1.jpg", "src/images/2.JPG"].map((item) => { 
            return(
              <img style={{borderRadius: 3}} height={100} width={90} key={item} src={item} alt="" />
            )
           })}
        </Stack>

        <Button 
        sx={{mb: {xs: 1, sm: 0} , textTransform: "capitalize", }}

        variant='contained'
        >
          
        <AddShoppingCartOutlined  sx={{mr: 1}} fontSize='small'/>  
          Buy now
          </Button>
      </Box>
    </Box>
  );
}

export default ProductDetials;

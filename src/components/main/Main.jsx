import {
  Box,
  CardContent,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";

import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Close } from "@mui/icons-material";
import ProductDetials from "./ProductDetials";
const Main = () => {
  const [alignment, setAlignment] = useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container sx={{ py: 9 }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={3}
      >
        <Box>
          <Typography variant="h6">Selected Products</Typography>
          <Typography fontWeight={300} variant="body1">
            All Our new arrival in a exclusive brand selection
          </Typography>
        </Box>

        <ToggleButtonGroup
          color="error"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          sx={{
            ".Mui-selected": {
              border: "1px solid rgba(233, 69, 96, 0.5 ) !important",
              color: "#e94560",
              backgroundColor: "initial",
            },
          }}
        >
          <ToggleButton
            sx={{ color: theme.palette.text.primary }}
            className="myButton"
            value="left"
            aria-label="left aligned"
          >
            all products
          </ToggleButton>
          <ToggleButton
            sx={{ mx: "16px !important", color: theme.palette.text.primary }}
            className="myButton"
            value="center"
            aria-label="centered"
          >
            men category
          </ToggleButton>
          <ToggleButton
            className="myButton"
            value="right"
            aria-label="right aligned"
            sx={{ color: theme.palette.text.primary }}
          >
            woman category
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
      >
        {["aaa", "bbb"].map((item) => {
          return (
            <Card
              key={item}
              sx={{
                maxWidth: 333,
                mt: 6,
                "&:hover .MuiCardMedia-root": {
                  scale: "1.1",
                  transition: "0.35s",
                  rotate: "5deg",
                },
              }}
            >
              <CardMedia sx={{ height: 277 }} image="" title="green iguana" />
              <CardContent>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography variant="h6" component="div">
                    T-shirt
                  </Typography>

                  <Typography variant="subtitle1" component="p">
                    $12.99
                  </Typography>
                </Stack>

                <Typography variant="body2" color="text-secondary">
                  Lizards are a widespread group of squawste reptiles, over
                  6,000 species, ranging asross all containents exclusive
                  Anterctice
                </Typography>
              </CardContent>

              <CardActions sx={{ justifyContent: "space-between" }}>
                <Button
                  onClick={handleClickOpen}
                  sx={{ textTransform: "capitalize" }}
                  size="large"
                >
                  <AddShoppingCartOutlinedIcon
                    sx={{ mr: 1 }}
                    fontSize="small"
                  />
                  Add to cart
                </Button>

                <Rating precision={0.1} name="read-only" value={4.3} readOnly />
              </CardActions>
            </Card>
          );
        })}
      </Stack>

      <Dialog
        sx={{
          ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } },
        }}
      
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton
          sx={{
            "&:hover": { color: "red", rotate: "360deg", transition: "0.5s" },
            position: "absolute",
            top: 0,
            right: 10,
          }}
          onClick={handleClose}
        >
          <Close />
        
        </IconButton>
        <ProductDetials />
      </Dialog>
    </Container>
  );
};

export default Main;

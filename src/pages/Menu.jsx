import React from "react";
import Layout from "../components/layouts/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { fastfood } from "../data/Data";

const Menu = () => {
  return (
    <Layout>
      <Box sx={{display:"flex", flexDirection:"column", gap: "1"}}>
        <Box sx={{ mt: 1, alignSelf: "center" }}>
            <Typography>FAST FOODS</Typography> <br />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            mt: 2,
            justifyContent: "center",
          }}
        >
          {fastfood.map((menu) => (
            <Card sx={{ p: 2, m: 2 ,}}>
              <CardActionArea>
                <CardMedia
                  sx={{
                    maxHeight: "400px",
                    minHeight: "400px",
                    minWidth: "300px",
                    maxWidth: "300px",
                  }}
                  component={"img"}
                  src={menu.image}
                  alt={menu.name}
                />
                <CardContent>
                  <Typography variant="h4" gutterBottom component={"div"}>
                    {menu.name}
                  </Typography>
                  <Typography variant="body2">{menu.description}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Box>
    </Layout>
  );
};

export default Menu;

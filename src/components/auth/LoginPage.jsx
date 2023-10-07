import React from "react";
import { CardContent, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <Grid
      container
      display="flex"
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={5}
      marginY={3}
    >
      <Grid item>
        <Typography variant="h5">Are you a...</Typography>
      </Grid>
      <Grid item>
        <Link to={"/owner"} style={{ textDecoration: "none" }}>
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 6,
              minWidth: 280,
              minHeight: 280,
              backgroundColor: "#dae4f5",
              transition: "transform 0.1s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                backgroundColor: "#8fb4f2",
              },
            }}
          >
            <CardContent>
              <Typography>Home Owner</Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid>
      <Grid item>
        <Link to={"/tenant"} style={{ textDecoration: "none" }}>
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 6,
              minWidth: 280,
              minHeight: 280,
              backgroundColor: "#dae4f5",
              transition: "transform 0.1s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                backgroundColor: "#8fb4f2",
              },
            }}
          >
            <CardContent>Tenant</CardContent>
          </Card>
        </Link>
      </Grid>
    </Grid>
  );
}

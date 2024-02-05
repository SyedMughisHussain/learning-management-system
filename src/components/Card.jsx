import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function DemoCard(props) {
  return (
    <Card sx={{ maxWidth: 345, marginTop: "20px", marginLeft: "20px" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.courseName}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Course Detail</Button>
      </CardActions>
    </Card>
  );
}

import React from "react";
import CardComponent from "./CardComponent";
import { Grid } from "@material-ui/core";
import { useStyles } from "./lastDocuments.styles";
const LastDocuments = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid className={classes.mainBlock}>
        <Grid className={classes.lastRow}>
          <CardComponent />
        </Grid>
      </Grid>
    </div>
  );
};

export default LastDocuments;

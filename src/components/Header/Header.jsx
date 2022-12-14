import React from "react";
import { Toolbar, Typography } from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import LiveSearch from "./LiveSearch";
import IconBellNew from "../../assets/headerComponent/icon-bell-new";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import { useStyles } from "./header.styles";

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <Toolbar>
        <Typography className={classes.title}></Typography>
        <Typography className={classes.title}>Listar Tesis</Typography>
        <Typography className={classes.name}></Typography>
        <Stack direction="row" spacing={1}>
          <LiveSearch />
          <MenuItem>
            <Badge badgeContent={10} color="primary">
              <IconBellNew />
            </Badge>
          </MenuItem>
          <MenuItem>
            <Typography className={classes.name}>jones Ferdinand</Typography>
          </MenuItem>
          <Avatar
            alt="Remy Sharp"
            src="https://avatars3.githubusercontent.com/u/21162888?s=460&v=4"
          />
        </Stack>
      </Toolbar>
    </div>
  );
};
export default Header;

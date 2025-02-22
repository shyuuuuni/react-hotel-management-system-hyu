import React, { useState, forwardRef } from "react";
import { List, ListItem, Collapse, Button, Drawer } from "@material-ui/core";
import clsx from "clsx";
import {
  AssignmentInd,
  ExpandLess,
  ExpandMore,
  Person,
  MeetingRoom,
  EventAvailable,
  RoomService,
  Business,
} from "@material-ui/icons";
import menuItems from "./sideBarItems";
import useStyles from "./menuBarStyles";
import { NavLink as RouterLink } from "react-router-dom";

// idx에 따라 아이콘 지정하는 함수
const ParentIcon = (idx) => {
  if (idx === 1) {
    return <AssignmentInd />;
  } else if (idx === 2) {
    return <Person />;
  } else if (idx === 3) {
    return <EventAvailable />;
  } else if (idx === 4) {
    return <MeetingRoom />;
  } else if (idx === 5) {
    return <RoomService />;
  } else if (idx === 6) {
    return <Business />;
  }
};

const MenuBar = (props) => {
  const [menu, setMenu] = useState({});
  const { className, ...rest } = props;
  const classes = useStyles();
  const handleClick = (item) => {
    let newData = { ...menu, [item]: !menu[item] };
    setMenu(newData);
  };
  const CustomRouterLink = forwardRef((props, ref) => (
    <div ref={ref} style={{ flexGrow: 1 }}>
      <RouterLink {...props} />
    </div>
  ));
  const handleMenu = (children, level = 0) => {
    return children.map(({ children, name, url, links, icon }) => {
      if (!children) {
        return (
          <List component="div" disablePadding key={name}>
            <ListItem
              className={classes.item}
              disableGutters
              style={{ padding: "0px" }}
              key={name}
            >
              <Button
                className={clsx({
                  [classes.btnRoot]: true,
                  [classes.button]: true,
                  [classes.subMenu]: level,
                })}
                component={CustomRouterLink}
                to={url}
                // onClick={name=="Add Staff" ? (() => <Addtest/>) : (() => console.log("bb"))}
              >
                {name}
              </Button>
            </ListItem>
          </List>
        );
      }
      return (
        <div key={name}>
          <ListItem
            className={classes.item}
            disableGutters
            key={name}
            onClick={() => handleClick(name)}
          >
            <Button
              className={clsx({
                [classes.btnRoot]: true,
                [classes.button]: true,
                [classes.subMenu]: level,
              })}
            >
              {ParentIcon(icon)}
              {name} {menu[name] ? <ExpandLess /> : <ExpandMore />}
            </Button>
          </ListItem>
          <Collapse in={menu[name] ? true : false} timeout="auto" unmountOnExit>
            {handleMenu(children, 1)}
          </Collapse>
        </div>
      );
    });
  };

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      open={true}
      variant="persistent"
    >
      <List {...rest} className={clsx(classes.root, className)}>
        {handleMenu(menuItems.data)}
      </List>
    </Drawer>
  );
};

export default MenuBar;

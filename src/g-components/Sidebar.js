import React from "react";
import { connect } from "react-redux";
import { setShowSidebar } from "../state/actions";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { GrClose } from "react-icons/gr";

import { SidebarData } from "./SidebarData";

import "./sidebar.css";

function Sidebar(props) {
  const handleClose = () => {
    props.setShowSidebar(false);
  };

  return (
    <div className={props.showSidebar ? "sidebar active" : "sidebar"}>
      <List disablePadding dense>
        <ListItem key={"button"} onClick={handleClose}>
          <GrClose size={"32px"} />
        </ListItem>

        {SidebarData.map(({ title, path, ...rest }, index) => (
          <ListItem key={index} button {...rest}>
            <ListItemText>{title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    showSidebar: state.showSidebar,
  };
};

export default connect(mapStateToProps, { setShowSidebar })(Sidebar);

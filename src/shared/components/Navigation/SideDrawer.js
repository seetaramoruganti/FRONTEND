import React from "react";
import "./SideDrawer.css";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

const SideDrawer = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      classNames="slide-in-left"
      timeout={200}
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;

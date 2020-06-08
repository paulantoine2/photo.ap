import React from "react";
import classnames from "classnames";
import MenuItems from "./MenuItems";

export default class Menu extends React.Component {
  render() {
    const { open } = this.props;
    return (
      <div className={classnames("Menu", { "Menu--open": open })}>
        <div className="Menu__black"></div>
        <div className="Menu__pane">
          <MenuItems />
        </div>
      </div>
    );
  }
}

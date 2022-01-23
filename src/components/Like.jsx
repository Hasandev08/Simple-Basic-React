import React, { Component } from "react";

class Like extends Component {
  state = {};
  render() {
    let classes = "fa fa-heart";
    if (!this.props.liked) classes += "-o";

    return (
      <i
        onClick={this.props.onClick}
        className={classes}
        style={{ cursor: "pointer" }}
        aria-hidden="true"
      />
    );
  }
}

export default Like;

// function Like() {
//   let classes = "fa fa-heart";
//   if (!this.props.liked) classes += "-o";

//   return (
//     <i
//       onClick={this.props.onClick}
//       className={classes}
//       style={{ cursor: "pointer" }}
//       aria-hidden="true"
//     />
//   );
// }

// export default Like;

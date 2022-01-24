import React, { Component, useEffect, useState } from "react";

function Like(props) {
  let [classes, setClasses] = useState("fa fa-heart");

  useEffect(() => {
    if (!props.liked) setClasses((classes += "-o"));
  }, []);

  return (
    <i
      onClick={props.onClick}
      className={classes}
      style={{ cursor: "pointer" }}
      aria-hidden="true"
    />
  );
}

export default Like;

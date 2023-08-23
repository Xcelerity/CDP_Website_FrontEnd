import React from "react";

function TabPanel({ index, value, children }) {
  return index == value ? <div className="w-full">{children}</div> : <></>;
}

export default TabPanel;

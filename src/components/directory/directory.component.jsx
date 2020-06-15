import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import "./directory.styles.scss";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...props }) => (
      <MenuItem key={id} {...props} />
    ))}
  </div>
);

const mapsStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapsStateToProps)(Directory);

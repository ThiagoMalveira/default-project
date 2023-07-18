import React, { createElement } from "react";

import { IProps, IGridHeader, IGridData, IViewProps } from "./types";
import View from "./view";

const DataGridContainer: React.FC<IProps> = ({ header, data }) => {
  const viewProps: IViewProps = { header, data };

  return createElement(View, viewProps);
};

export default DataGridContainer;
export type { IGridHeader, IGridData };

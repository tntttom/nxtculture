import React from "react";

import styles from "./CollectionGroup.module.css";

import { Collection } from "../../../../components";

const CollectionGroup = () => {
  return (
    <div>
      <Collection />
      <Collection />
      <Collection />
    </div>
  );
};

export default CollectionGroup;

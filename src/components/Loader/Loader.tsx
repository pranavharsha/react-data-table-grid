import React from "react";
import { LoaderProps } from "../types";
import styles from "./Loader.module.scss";

const Loader = ({ color }: LoaderProps) => {
  return (
    <div className={styles.loader} style={{ color }}>
      <div className={styles.loaderGrow} />
    </div>
  );
};

export default Loader;

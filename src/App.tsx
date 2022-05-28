import React, { useState, useEffect } from 'react';
import styles from "./App.module.scss";
import { getPhotosData } from "./services";
import { PhotoObject } from "./services/types";
import { Loader } from "./components";

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [photosData, setPhotosData] = useState<Array<PhotoObject>>([]);

  useEffect(() => {
    (async function () {
      const result = await getPhotosData();
      if (result.key === "success") {
        setPhotosData(result.data);
        setIsLoading(false);
      }
    })();
  }, []);

  console.log(photosData);

  return (
    <div className={styles.app}>
      {isLoading && (
        <Loader color='#3498db' />
      )}
    </div>
  );
}

export default App;

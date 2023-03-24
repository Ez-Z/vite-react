import { useParams } from "react-router-dom";
import styles from "./index.module.scss";

function Second(props) {
  const params = useParams(); 

  return (
    <div className={styles.App}>
      Children {params?.id}
    </div>
  );
}

export default Second;

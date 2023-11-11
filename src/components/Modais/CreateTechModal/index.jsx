
import { TechCard } from "../../forms/TechCard";
import styles from "../CreateTechModal/style.module.scss";


export const CreateTechModal = ({ children,setIsOpen  }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBox}>
      <div className={styles.headerModalBox}>
                
                <button className={styles.btn} onClick={() => setIsOpen(false)}>X</button>
            </div>
        
        <TechCard/>
      </div>
    </div>
  );
};

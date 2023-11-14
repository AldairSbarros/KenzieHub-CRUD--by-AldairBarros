import { forwardRef, useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import styles from "./style.module.scss";

export const InputPassword = forwardRef(({ error, label, ...rest }, ref) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className={styles.inputBox}>
      <label className="label">{label}</label>
      <div className={styles.inputGrid}>
        <input type={isHidden ? "password" : "text"} ref={ref} {...rest} />

        <button
          onClick={() => {
            setIsHidden(!isHidden);
          }}
        >
          {isHidden ? <MdVisibility /> : <MdVisibilityOff />}
        </button>
      </div>
      {error ? <p className="paragraph">{error.messsage}</p> : null}
    </div>
  );
});

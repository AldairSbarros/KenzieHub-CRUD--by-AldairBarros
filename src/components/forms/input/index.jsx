import { forwardRef } from "react";
import style from "../../forms/input/style.module.scss";

export default forwardRef(({ error, label, id, ...rest }, ref) => {
  return (
    <div className={style.inputBox}>
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <input ref={ref} {...rest} />
      {error ? <p className="paragraph">{error.message}</p> : null}
    </div>
  );
});

import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";
import { TechContext } from "../../../providers/TechContext";
import style from "../TechList/style.module.scss";
import deleticon from "../../../assets/delete.png";
import penedit from "../../../assets/pen_edit.png";
import { EditTechModal } from "../../Modais/EditTechModal";

export const TechList = ({ techs }) => {
  const { user } = useContext(UserContext);
  const [ isOpenEdit, setIsOpenEdit] = useState(false);
  const { deleteTech, setEditingTech, editingTech } = useContext(TechContext);
  return (
    <>
    {editingTech && <EditTechModal setIsOpenEdit={setIsOpenEdit} />} {/* Renderize o EditTechModal condicionalmente */}
    <ul className={style.listTech}>
      {user.techs.map((tech) => (
        <li className={style.listTechItem} key={tech.id}>
          <div className={style.techTitle}>
            <h2 className="title1">{tech.title}</h2>
          </div>
          <div className={style.techComponent}>
            <p className="paragraph">{tech.status}</p>
            <button
              className={style.icons}
              onClick={() => {setEditingTech(tech.id); ;
                console.log(tech.id);}}
                >
              <img src={penedit}></img>
            </button>
            <button className={style.icons} onClick={() => deleteTech(tech.id)}>
              {" "}
              <img src={deleticon} alt="" />{" "}
            </button>
          </div>
        </li>
      ))}
    </ul>
      </>
  );
};

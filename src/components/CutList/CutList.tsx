import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICutInput } from "../../store/types";
import { RootState } from "../../store";
import { deleteCut, editCut } from "../../store/slices/cutSlice";
import styles from "./CutList.module.scss";

const CutList = () => {
  const { inputCuts } = useSelector((state: RootState) => state.cuts);
  const dispatch = useDispatch();

  const [editedCuts, setEditedCuts] = useState<ICutInput[]>([]);

  const { boards } = useSelector((state: RootState) => state.boards);

  useEffect(() => {
    setEditedCuts(inputCuts);
  }, [inputCuts]);

  const editHandler = (i: number) => {
    dispatch(editCut({ cut: editedCuts[i], index: i }));
  };

  const handleInputChange = (index: number, field: string, value: number) => {
    const updatedCuts = [...editedCuts];

    updatedCuts[index] = {
      ...updatedCuts[index],
      [field]: value,
    };

    setEditedCuts(updatedCuts);
  };

  const deleteHandler = (i: number) => {
    dispatch(deleteCut(i));
  };

  return (
    <div className={styles.CutList}>
      <h2>Boards needed {boards.length}</h2>
      <div className={styles.params}>
        <h3>Width</h3>
        <h3>Height</h3>
        <h3>Quantity</h3>
      </div>
      <div className={styles.cuts}>
        {editedCuts.length
          ? editedCuts.map((cut, i) => (
              <div key={i} className={styles.cut}>
                <input
                  name="width"
                  type="number"
                  value={editedCuts[i].width * 2}
                  onChange={(e) =>
                    handleInputChange(i, "width", parseInt(e.target.value) / 2)
                  }
                  min={1}
                  max={1830}
                />

                <input
                  type="number"
                  value={editedCuts[i].height * 2}
                  onChange={(e) =>
                    handleInputChange(i, "height", parseInt(e.target.value) / 2)
                  }
                  min={1}
                  max={3630}
                />

                <input
                  type="number"
                  value={editedCuts[i].quantity}
                  onChange={(e) =>
                    handleInputChange(i, "quantity", parseInt(e.target.value))
                  }
                  min={1}
                />

                <button onClick={() => editHandler(i)}>Edit</button>
                <button onClick={() => deleteHandler(i)}>Delete</button>
              </div>
            ))
          : "No cuttings yet."}
      </div>
    </div>
  );
};

export default CutList;

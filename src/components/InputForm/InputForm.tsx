import { FC, FormEvent, useState } from "react";
import { ICutInput } from "../../store/types";
import styles from "./InputForm.module.scss";

interface InputFormProps {
  onAddCut: (cut: ICutInput) => void;
}

const InputForm: FC<InputFormProps> = ({ onAddCut }) => {
  const [height, setHeight] = useState<number | "">("");
  const [width, setWidth] = useState<number | "">("");
  const [quantity, setQuantity] = useState<number | "">("");

  const handleAdd = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (height !== "" && width !== "" && quantity !== "") {
      const newCut = {
        height: height / 2,
        width: width / 2,
        quantity: quantity,
      };
      onAddCut(newCut);
    }

    setHeight("");
    setWidth("");
    setQuantity("");
  };
  return (
    <form className={styles.InputForm} onSubmit={handleAdd}>
      <div className={styles.labelAndInput}>
        <label htmlFor="width">Width</label>
        <input
          name="width"
          type="number"
          value={width}
          onChange={(e) => setWidth(parseInt(e.target.value))}
          min={1}
          max={1830}
        />
      </div>
      <div className={styles.labelAndInput}>
        <label htmlFor="height">Height</label>
        <input
          name="height"
          type="number"
          value={height}
          onChange={(e) => setHeight(parseInt(e.target.value))}
          min={1}
          max={3630}
        />
      </div>
      <div className={styles.labelAndInput}>
        <label htmlFor="quantity">Quantity</label>
        <input
          name="quantity"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          min={1}
        />
      </div>

      <input className={styles.addBtn} type="submit" value="Add" />
    </form>
  );
};

export default InputForm;

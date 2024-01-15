import { ICutInput, ICutSizes } from "../store/types";

export const convertingCutsArr = (newInputCuts: ICutInput[]) => {
  const newCuts: ICutSizes[] = [];
  newInputCuts.forEach((cut) => {
    for (let i = 0; i < cut.quantity; i++) {
      newCuts.push({
        width: cut.width,
        height: cut.height,
      });
    }
  });
  return newCuts;
};

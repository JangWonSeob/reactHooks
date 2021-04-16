export const useConfirm = (message = "", onConfirm, conCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if(conCancel && typeof conCancel !== "function"){
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      conCancel();
    }
  };
  return confirmAction;
};

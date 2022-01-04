import { CHANGEMODAL_PROPS } from "../../common/Types";

const ModalButton: React.FC<CHANGEMODAL_PROPS> = ({ children, chngeModal }) => {
  return <button onClick={() => chngeModal()}>{children}</button>;
};

export default ModalButton;

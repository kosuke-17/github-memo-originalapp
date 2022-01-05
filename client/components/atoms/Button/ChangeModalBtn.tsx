import { CHANGEMODAL_PROPS } from "../../../common/Types";

const ChangeModalBtn: React.FC<CHANGEMODAL_PROPS> = ({
  children,
  changeModal,
}) => {
  return <button onClick={() => changeModal()}>{children}</button>;
};

export default ChangeModalBtn;

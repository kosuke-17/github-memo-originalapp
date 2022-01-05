import { OPENMODAL_PROPS } from "../../../common/Types";

const CloseModalBtn: React.FC<OPENMODAL_PROPS> = ({
  children,
  openModal,
  day,
}) => {
  return <button onClick={() => openModal(day)}>{children}</button>;
};

export default CloseModalBtn;

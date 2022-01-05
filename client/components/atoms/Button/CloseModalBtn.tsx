import { Button } from "antd";
import { CLOSEMODAL_PROPS } from "../../../common/Types";

const CloseModalBtn: React.FC<CLOSEMODAL_PROPS> = ({
  children,
  closeModal,
}) => {
  return (
    <Button className="ml-2" type="primary" onClick={() => closeModal()}>
      {children}
    </Button>
  );
};

export default CloseModalBtn;

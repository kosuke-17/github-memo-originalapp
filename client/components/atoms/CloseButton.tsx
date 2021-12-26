import { ReactNode } from "react";

interface PROPS {
  children: ReactNode;
  chngeModal: Function;
}

const CloseButton: React.FC<PROPS> = ({ children, chngeModal }) => {
  return <button onClick={() => chngeModal()}>{children}</button>;
};

export default CloseButton;

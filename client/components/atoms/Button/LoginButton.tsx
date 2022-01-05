import { Button } from "antd";

interface PROPS {
  name: string;
  loginClick: Function;
}

const LoginButton: React.FC<PROPS> = ({ name, loginClick }) => {
  return (
    <div className="py-2">
      <Button onClick={() => loginClick()}>{name}</Button>
    </div>
  );
};

export default LoginButton;

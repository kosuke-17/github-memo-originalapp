import { Button } from "antd";

interface PROPS {
  name: string;
  loginClick: Function;
}

const LoginButton: React.FC<PROPS> = ({ name, loginClick }) => {
  return (
    <div className="py-2">
      <Button type="primary" onClick={() => loginClick()}>
        {name}
      </Button>
    </div>
  );
};

export default LoginButton;

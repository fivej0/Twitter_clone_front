import { Card, Avatar, Button } from "antd";
import { useCallback } from "react";

interface IProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserProfile = ({ setIsLoggedIn }: IProps) => {
  const onLogOut = useCallback(
    (e: any) => {
      setIsLoggedIn(false);
    },
    [setIsLoggedIn]
  );
  return (
    <Card
      actions={[
        <div key={0}>
          짹짹
          <br />0
        </div>,
        <div key={1}>
          팔로잉
          <br />0
        </div>,
        <div key={2}>
          팔로워
          <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>JU</Avatar>} title="ju" />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;

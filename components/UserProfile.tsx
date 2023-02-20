import { Card, Avatar, Button } from "antd";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { logoutAction } from "../reducers/user";

const UserProfile = () => {
  const dispatch = useDispatch();
  const onLogOut = useCallback(
    (e: any) => {
      dispatch(logoutAction({}));
    },
    [dispatch]
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

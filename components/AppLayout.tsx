import Link from "next/link";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { Menu, Input, Row, Col, MenuProps } from "antd";
import { useState } from "react";

import UserProfile from "../components/UserProfile";
import LoginForm from "../components/LoginForm";

const SerchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const items: MenuProps["items"] = [
  {
    label: <Link href={"/"}>홈</Link>,
    key: "home",
    icon: <MailOutlined />,
  },
  {
    label: <Link href={"/profile"}>프로필</Link>,
    key: "profile",
    icon: <AppstoreOutlined />,
  },
  {
    label: <SerchInput enterButton />,
    key: "search",
  },
  {
    label: <Link href={"/signup"}>회원가입</Link>,
    key: "signup",
    icon: <SettingOutlined />,
  },
];

const AppLatout = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Menu mode="horizontal" items={items} />
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          오른쪽 메뉴
        </Col>
      </Row>
    </div>
  );
};

export default AppLatout;

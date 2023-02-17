import { Button, Form, Input } from "antd";
import Link from "next/link";
import { useState, useCallback } from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const LoginForm = () => {
  const [id, setId] = useState("");
  const [passwrod, setPasswrod] = useState("");

  const onChangeId = useCallback((e: any) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e: any) => {
    setId(e.target.value);
  }, []);

  return (
    <Form>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input
          name="user-id"
          type="text"
          value={id}
          onChange={onChangeId}
          required
        />
      </div>
      <div>
        <label htmlFor="user-passwrod">비밀번호</label>
        <br />
        <Input
          name="user-passwrod"
          type="passwrod"
          value={passwrod}
          onChange={onChangePassword}
          required
        />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href={"/signup"}>회원가입</Link>
      </ButtonWrapper>
    </Form>
  );
};

export default LoginForm;

import { Button, Form, Input } from "antd";
import Link from "next/link";
import { useState, useCallback } from "react";
import styled from "styled-components";

interface IProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = ({ setIsLoggedIn }: IProps) => {
  const [id, setId] = useState("");
  const [passwrod, setPasswrod] = useState("");

  const onChangeId = useCallback((e: any) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e: any) => {
    setPasswrod(e.target.value);
  }, []);

  const onSubmitFrom = useCallback(
    (e: any) => {
      console.log(id, passwrod);
      setIsLoggedIn(true);
    },
    [id, passwrod, setIsLoggedIn]
  );

  return (
    <FormWrapper onFinish={onSubmitFrom}>
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
    </FormWrapper>
  );
};

export default LoginForm;

import { Button, Form, Input } from "antd";
import Link from "next/link";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import { loginAction } from "../reducers/user";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const [id, onChangeId] = useInput("");
  const [passwrod, onChangePassword] = useInput("");

  const onSubmitFrom = useCallback(
    (e: any) => {
      dispatch(loginAction({ id, passwrod }));
    },
    [dispatch, id, passwrod]
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

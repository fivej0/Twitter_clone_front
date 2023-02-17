import Head from "next/head";
import { Form, Input } from "antd";
import { useCallback, useState } from "react";

const Signup = () => {
  const [id, setId] = useState("");
  const [passwrod, setPasswrod] = useState("");
  const [nickname, setNickname] = useState("");
  const onChangeId = useCallback((e: any) => {
    setId(e.target.value);
  }, []);
  const onChangeNick = useCallback((e: any) => {
    setNickname(e.target.value);
  }, []);
  const onChangePassword = useCallback((e: any) => {
    setPasswrod(e.target.value);
  }, []);
  const onSubmit = useCallback((e: any) => {}, []);
  return (
    <>
      <Head>
        <title>회원가입 | Twitter</title>
      </Head>
      <Form onFinish={onSubmit}>
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
          <label htmlFor="user-nickname">닉네임</label>
          <br />
          <Input
            name="user-id"
            type="text"
            value={nickname}
            onChange={onChangeNick}
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
      </Form>
    </>
  );
};

export default Signup;

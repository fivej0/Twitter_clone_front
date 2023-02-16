import Link from "next/link";
const AppLatout = ({ children }: any) => {
  return (
    <div>
      <Link href={"/"}>홈</Link>
      <Link href={"/profile"}>프로필</Link>
      <Link href={"/signup"}>회원가입</Link>
      {children}
    </div>
  );
};

export default AppLatout;

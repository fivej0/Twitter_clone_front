import Head from "next/head";
import NicknameEditFrom from "../components/NicknameEditFrom";
import FollowList from "../components/FollowList";

const Profile = () => {
  const followingList = [
    { nickname: "바보" },
    { nickname: "배고파" },
    { nickname: "사과" },
    { nickname: "마리아" },
  ];
  const followerList = [
    { nickname: "바보" },
    { nickname: "배고파" },
    { nickname: "사과" },
    { nickname: "마리아" },
  ];
  return (
    <>
      <Head>
        <title>내 프로필 | Twitter</title>
      </Head>
      <NicknameEditFrom />
      <FollowList header="팔로잉 목록" data={followingList} />
      <FollowList header="팔로워 목록" data={followerList} />
    </>
  );
};

export default Profile;

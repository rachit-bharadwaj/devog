import { Profile } from "@/containers";

const ProfilePage = ({ params }: { params: { profile: string } }) => {
  return (
    <Profile profile={params.profile}>
      <h1>Profile</h1>
    </Profile>
  );
};

export default ProfilePage;

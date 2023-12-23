import { Profile } from "@/containers";
import { Actions, Header, Posts } from "@/components/profile";

const ProfilePage = ({ params }: { params: { profile: string } }) => {
  return (
    <Profile profile={params.profile} className="p-5">
      <Header userName={params.profile} />
      <Actions userName={params.profile} />
      <Posts />
    </Profile>
  );
};

export default ProfilePage;

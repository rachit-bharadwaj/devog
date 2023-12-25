import { EditProfile } from "@/containers";
import { OtherFields, PhotoSection } from "@/components/profile/edit";

const EditPage = ({ params }: { params: { profile: string } }) => {
  return (
    <EditProfile profile={params.profile} className="p-5">
      <h1 className="font-[900] text-4xl text-gray-300">Edit Profile</h1>

      <PhotoSection />

      <OtherFields />
    </EditProfile>
  );
};

export default EditPage;

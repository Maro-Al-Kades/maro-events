import { PageWrapper } from "@/utils/PageWrapper";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <PageWrapper>
      <SignIn />
    </PageWrapper>
  );
}

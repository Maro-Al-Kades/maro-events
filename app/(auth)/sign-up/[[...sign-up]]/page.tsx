import { PageWrapper } from "@/utils/PageWrapper";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <PageWrapper>
      <SignUp />
    </PageWrapper>
  );
}

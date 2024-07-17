import {
  PageLayout,
  PageLayoutContent,
  PageLayoutSeparator as PageLayoutSeparator,
  PageLayoutTitle,
} from "@/layouts/PageLayout";
import { ClassName } from "@/types/overridable";

function MainPage({ className }: ClassName) {
  return (
    <PageLayout className={className}>
      <PageLayoutTitle>Main Page</PageLayoutTitle>
      <PageLayoutContent>Welcome to the main page</PageLayoutContent>
      <PageLayoutSeparator />
    </PageLayout>
  );
}

export default MainPage;

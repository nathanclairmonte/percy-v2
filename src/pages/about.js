import { MainLayout, PageTitle, AboutMeBlurb, TechStack } from "@/components/list";

const about = () => {
    return (
        <MainLayout title="About Me">
            <PageTitle title="about" />
            <AboutMeBlurb />
            <TechStack />
        </MainLayout>
    );
};

export default about;

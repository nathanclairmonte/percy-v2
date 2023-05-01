import { MainLayout, PageTitle, ProjectsList } from "@/components/list";

const projects = () => {
    return (
        <MainLayout title="Projects">
            <PageTitle title="projects" />
            <ProjectsList />
        </MainLayout>
    );
};

export default projects;

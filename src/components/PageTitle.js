const PageTitle = ({ title }) => {
    return (
        <h1 className="text-center text-5xl font-bold text-gray-500 dark:text-zinc-400 md:-mt-6 md:mb-6 md:text-6xl">
            <span className="text-[#f08057]">/</span>
            {title}
        </h1>
    );
};

export default PageTitle;

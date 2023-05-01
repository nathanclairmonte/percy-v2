const BULLET_BOLD_STYLES = "font-bold text-gray-600 dark:text-zinc-300";

export const experienceData = [
    {
        title: "Machine Learning Researcher",
        duration: {
            start: "Aug 2020",
            end: "Apr 2023",
        },
        company: "McGill University",
        location: "Montréal, Quebec/Toronto, Ontario (Remote)",
        bullets: [
            <p>
                Designed vibrational cardiography (VCG) data collection system with respiratory and
                cardiac reference signals, collecting{" "}
                <span className={BULLET_BOLD_STYLES}>over 18,000 minutes</span> of signal data
                across 6 collection channels.
            </p>,
            <p>
                Implemented data pipeline to process, clean and extract{" "}
                <span className={BULLET_BOLD_STYLES}>40,000+ VCG cardiac cycles</span> from raw
                signal data.
            </p>,
            <p>
                Trained state-of-the-art CNN models which{" "}
                <span className={BULLET_BOLD_STYLES}>
                    showed 91.5% average accuracy on respiratory volume and phase classification
                </span>
                .
            </p>,
            <p>
                Researched, in a team of 5, various methods to predict blood pressure (BP)
                information from VCG signals.
            </p>,
            <p>
                Introduced machine learning techniques to the project,{" "}
                <span className={BULLET_BOLD_STYLES}>improving prediction accuracy by 20%</span>.
            </p>,
            <p>
                Implemented transfer learning to emulate real-world application, leading to a{" "}
                <span className={BULLET_BOLD_STYLES}>
                    further 15% improvement in prediction accuracy
                </span>
                .
            </p>,
            <p>
                Resulted in{" "}
                <span className={BULLET_BOLD_STYLES}>multiple published academic studies</span>, a{" "}
                <span className={BULLET_BOLD_STYLES}>thesis</span> and an{" "}
                <span className={BULLET_BOLD_STYLES}>approved BP prediction patent</span> for our
                industry partner.
            </p>,
        ],
    },
    {
        title: "Software Engineer/Chief Technology Officer",
        duration: {
            start: "Dec 2019",
            end: "Aug 2020",
        },
        company: "Stocate (Startup)",
        location: "Montréal, Quebec",
        bullets: [
            <p>
                Early team member at Stocate, a startup platform designed to help users shop locally
                and sustainably. Left to pursue my MSc.
            </p>,
            <p>
                Built Stocate's entire stack from the ground up, including{" "}
                <span className={BULLET_BOLD_STYLES}>
                    React-Native mobile application, React website, .NET API and Postgres database
                </span>
                . App had garnered <span className={BULLET_BOLD_STYLES}>60+ users</span> at the time
                of my leaving.
            </p>,
            <p>
                Migrated entire database from SQL Server to PostgreSQL,{" "}
                <span className={BULLET_BOLD_STYLES}>
                    saving the company $1,928 in yearly database fees
                </span>
                .
            </p>,
            <p>
                Implemented a feedback process for the website and mobile application{" "}
                <span className={BULLET_BOLD_STYLES}>which received 100+ responses</span>.
            </p>,
            <p>
                Managed incoming software interns by leading stand-ups and delegating coding tasks.
            </p>,
        ],
    },
];

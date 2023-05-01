export const projectsData = [
    {
        img: "/projects/pdfchatbot.png",
        title: "PDF ChatBot",
        desc: `A project which uses the power of LLMs and semantic search to allow users to upload and "chat" with any local PDF they want. Simply sign in, get your account approved, and then upload whichever PDF you want to chat with! This project extends on my Arxiv ChatBot project by allowing users to upload their own local PDF files to chat with. This functionality is facilitated using Amazon S3 buckets.
      
        To be able to upload local PDFs, users must first sign in and have their account approved. At a base-level this was just to keep usage at a reasonable level and protect my Amazon credits, but it also allowed me to play around with various authentication methods for Next.js applications. However, I've included functionality to chat with pre-existing sample PDFs for users who just want to test out the functionality of the app without signing in.
        
        This application is powered by Next.js and therefore uses React on the frontend. On the backend, LangChain JS, Next.js API routes and Amazon S3 buckets are used to handle document loading and question answering over a document. To handle user authentication, NextAuth.js is used with a MongoDB database.
        `,
        gitLink: "https://github.com/nathanclairmonte/pdf-chatbot",
        webLink: "https://www.pdfchatbot.app/",
        technologies: [
            "LLMs",
            "Semantic Search",
            "LangChain",
            "HSNWLib",
            "JavaScript",
            "Next.js",
            "React",
            "TailwindCSS",
            "Amazon S3",
            "NextAuth.js",
            "MongoDB",
            "Formik",
            "Yup",
            "Prettier",
            "Vercel",
        ],
    },
    {
        img: "/projects/arxivbot.png",
        title: "ArXiv ChatBot",
        desc: `A project which uses the power of LLMs and semantic search to allow users to "chat" with scientific papers hosted on popular scholarly article archive: arxiv.org. Simply input the ID of the paper you want to chat about, enter your OpenAI API key, and start asking questions!
    
        Frontend of the application was built with Next.js. Document loading, splitting, storage, semantic search and question answering functionality was implemented with LangChain, HSNWLib and the OpenAI API.`,
        gitLink: "https://github.com/nathanclairmonte/arxiv-bot-ui",
        webLink: "https://www.arxivbot.app/",
        technologies: [
            "LLMs",
            "Semantic Search",
            "LangChain",
            "HSNWLib",
            "JavaScript",
            "Next.js",
            "React",
            "TailwindCSS",
            "Prettier",
            "Vercel",
        ],
    },
    {
        img: "/projects/tf.jpg",
        title: "Transcription Factor Binding Site Prediction",
        desc: `A project examining whether DNA structural/physical properties are sufficient for a machine learning model to predict transcription factor binding sites. Dataset was extracted from human genome data using Biopython and ML models were implemented using Keras.`,
        gitLink: "https://github.com/nathanclairmonte/transcription-factor-binding-site-prediction",
        webLink: null,
        technologies: [
            "Python",
            "NumPy",
            "Pandas",
            "Scikit-Learn",
            "TensorFlow",
            "Keras",
            "BioPython",
        ],
    },
    {
        img: "/projects/melody-generation.png",
        title: "Recurrent Neural Networks for Melody Generation",
        desc: `A project using RNNs made of LSTM units to generate melodies. Two melody generation systems were implemented which learn on a set of training melodies to generate novel melodies of their own. Gen-pitch learns solely on note pitch, Gen-duration learns on both note pitch and duration. Melodies are in MIDI format. Models were implemented using Keras.`,
        gitLink: "https://github.com/nathanclairmonte/melody-generation-RNN",
        webLink: null,
        technologies: ["Python", "NumPy", "Scikit-Learn", "TensorFlow", "Keras", "Music21"],
    },
    {
        img: "/projects/pacman.png",
        title: "PacMan Q-Learning Agent (Reinforcement Learning)",
        desc: `A project implementing Q-learning reinforcement learning techniques to create an AI to play PacMan. Implemented using C++, Python and the Arcade Learning Environment (ALE) package. All code for the agent is inside the agent.py file.`,
        gitLink: "https://github.com/nathanclairmonte/pacman-RL",
        webLink: null,
        technologies: ["Python", "C++", "Arcade Learning Environment", "Q-Learning"],
    },
    {
        img: "/projects/suicide-ideation.png",
        title: "Reducing Type II Errors in Suicide Ideation Detection",
        desc: `A project investigating the classification of online text based on the presence of suicide ideation, specifically in the context of reducing the occurrence of more detrimental Type II errors. Models were implemented using Scikit-Learn.`,
        gitLink: "https://github.com/nathanclairmonte/suicide-ideation-detection",
        webLink: null,
        technologies: ["Python", "NumPy", "Pandas", "Scikit-Learn", "TensorFlow", "Keras", "NLTK"],
    },
    {
        img: "/projects/titanic.jpg",
        title: "Titanic Survival Classifier Package",
        desc: `A simple classifier package built to explore ML model packaging with Python. Model was trained on the titanic survival dataset. Package utilises Pydantic for input validation, PyTest for unit testing and Tox for virtual environment management. Trained and packaged classifier was deployed on Railway.app, exposing an endpoint to make predictions. (NB: Deployment was subsequently removed as I ran out of Railway credits.)`,
        gitLink: "https://github.com/nathanclairmonte/titanic-clf-package",
        webLink: null,
        technologies: ["Python", "NumPy", "Pandas", "Scikit-Learn", "Pydantic", "PyTest", "Tox"],
    },
    {
        img: "/projects/natdle.png",
        title: 'Wordle Clone "Natdle"',
        desc: `A wordle clone application built using React-Native and Typescript.`,
        gitLink: "https://github.com/nathanclairmonte/natdle",
        webLink: null,
        technologies: [
            "React-Native",
            "TypeScript",
            "JavaScript",
            "Expo",
            "AWS Amplify",
            "AWS Cognito",
            "AWS Lambda",
            "Prettier",
            "ESLint",
            "Husky",
        ],
    },
    {
        img: "/projects/udp-chat-system.png",
        title: "P2P UDP Chat System",
        desc: `Peer to peer chat system that performs NAT traversal using UDP punchthrough techniques. Implemented using Node.js and React.`,
        gitLink: "https://github.com/nathanclairmonte/P2P-UDP-Chat-System",
        webLink: null,
        technologies: ["Node.js", "React", "Electron"],
    },
    // {
    //     img: commNetworkImg,
    //     title: "Optimal Communication Network Design",
    //     desc: `Python program which designs an optimal communication network connecting
    //     N cities given the costs of connecting the cities and the reliabilities of each
    //     connection.`,
    //     // The program can either meet a given reliability goal, meet a given
    //     // reliability goal subject to a given cost constraint, or maximize reliability
    //     // subject to a given cost constraint.`,
    //     gitLink: "https://github.com/nathanclairmonte/ECSE422-Project",
    //     webLink: null,
    // },
    // {
    //     img: icaImg,
    //     title: "FastICA Blind Source Separation",
    //     desc: `A project analysing the Fast Independent Components Analysis (FastICA)
    //     algorithm and it's application to blind source separation.`,
    //     // The project involved
    //     // the generation of sinusoidal waves, storage of the waves, mixing of the waves,
    //     // and the application of blind source separation to them. In addition, the FastICA
    //     // approach was validated through comparisons with Fourier transforms of the original
    //     // and recovered signals.`,
    //     gitLink: "https://github.com/nathanclairmonte/ECSE444-Final-Project",
    //     webLink: null,
    // },
];

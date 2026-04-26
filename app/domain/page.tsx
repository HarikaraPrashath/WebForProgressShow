"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Search,
  AlertCircle,
  Target,
  Cpu,
  Layers,
  User,
  FileText
} from "lucide-react";

const domainData: Record<string, Record<string, string | React.ReactNode>> = {
  diven: {
    literature: "The growing complexity of modern labor markets has intensified the demand for automated career guidance systems capable of extracting meaningful insights from large volumes of unstructured data. Skill extraction from job postings has emerged as a critical research area, with studies demonstrating diverse methodological approaches. Zhang et al. developed a weakly supervised learning framework using the ESCO taxonomy for skill phrase extraction, reducing manual annotation costs. Khaouja et al. proposed unsupervised skill identification methods employing clustering and semantic similarity techniques directly from job advertisements , while Zhang, Nørgaard Jensen, Sonniks, and Plank introduced SkillSpan, a sequence labeling model capable of distinguishing hard and soft skills . Ontology-based approaches, such as Desai and Kulkarni's domain ontology framework , enhance semantic understanding by organizing job roles and skills into hierarchical structures, enabling inference of related competencies. Machine learning techniques have further advanced skill extraction, with Bhatia et al. combining statistical and ML methods for technical and soft skill classification from project descriptions , and transformer-based architectures such as BERT demonstrating superior performance in contextual skill recognition. Job market trend analysis systems leveraging deep learning and Named Entity Recognition (NER) have revealed emerging skill demand patterns across industries . Curriculum-skill gap analysis studies highlight significant misalignment between academic programs and industry expectations, particularly in AI and data analytics fields . Research reveals that academic institutions update curricula slowly relative to rapidly evolving industry demands. Existing systems predominantly focus on isolated tasks and global markets, lacking real-time localized integration, particularly for developing economies such as Sri Lanka, where image-heavy job formats pose additional processing challenges. These gaps motivate the development of an integrated, localized career intelligence platform.",
    methodology: "The proposed system follows a hybrid methodology combining iterative prototyping with data-driven machine learning processes, structured across the full data science lifecycle. Data collection was conducted through automated web scraping of TopJobs.lk using Selenium and BeautifulSoup, capturing job titles, company names, required qualifications, skill requirements, and job descriptions. Optical Character Recognition (OCR) was applied to image-based advertisements to ensure comprehensive data coverage. All collected data were stored in a PostgreSQL database for efficient querying. Preprocessing involved text normalization, punctuation removal, lowercasing, stopword removal, tokenization, and lemmatization. Named Entity Recognition (NER) standardized extracted entities, canonicalizing variations such as 'ReactJS', 'React JS', and 'React' into uniform representations. Feature engineering employed TF-IDF weighting to highlight domain-specific vocabulary within job descriptions and resumes. Student profiles were additionally vectorized across dimensions including technical skills, soft skills, academic qualifications, certifications, and project experience, enabling vector-based similarity comparison with job requirements. Three machine learning models were implemented for CV-Job Fit Score prediction: LightGBM, XGBoost, and Artificial Neural Networks (ANN). These were selected for their effectiveness in regression and classification tasks involving high-dimensional structured data. Skill gap analysis compared student skill vectors against market requirement vectors to generate personalized skill development recommendations, prioritized by frequency, demand trends, and learning feasibility. A trend analysis module employed rolling window analysis, moving averages, and regression models to monitor evolving job market demands over time.",
    gap: "Although there is a growing demand for data-driven career guidance in Sri Lanka, there are no such systems in the Sri Lankan job market that provide localized, real-time information on the emerging skills and industrial needs. The existing global platforms like LinkedIn or Coursera provide general guidance but their suggestions are mightily based on global datasets and professional networking graphs which make them inappropriate for undergraduates in Sri Lanka who often lack work experience or professional connections. Not to mention, local job portals like TopJobs.lk have a heterogeneous mix of text and image advertisements which the conventional job intelligence systems do not process. Earlier research on skill gap analysis and job-market forecasting has mainly been concerned with developed economies and structured datasets. No one has dealt with the problem of mining data from unstructured, image-heavy local job ads nor has anyone applied student academic backgrounds to create personalized skill gap reports. Moreover, current university career counselling methods are based on static or outdated information, and are not equipped with any mechanisms for continuous updates, real-time trend detection, or predictive analytics that have been tailored to the Sri Lankan context. As a result, there is a definitive research gap in the development of a localized, real-time, student-centred career intelligence system that could analyse different job ad formats and offer actionable and evidence-based recommendations.",
    objective: "The main objective of this research is to develop a real-time, NLP-based analyzer capable of identifying industry trends and skill gaps within the Sri Lankan job market, with the aim of providing personalized, data-driven career recommendations for undergraduate students. To achieve this, several sub-objectives are defined. First, a skill extraction and classification model will be developed to accurately identify and standardize skills from diverse job postings using techniques such as keyword extraction, Named Entity Recognition (NER), and clustering. Second, a skill gap analysis framework will be designed, leveraging vector-based similarity measures and weighting mechanisms to compare students’ existing skills with current market demands. Third, a trend forecasting model will be implemented to analyze historical job data and predict emerging skills, roles, and industry shifts in Sri Lanka. Finally, an interactive dashboard and recommendation engine will be created to deliver personalized career pathways, highlight prioritized skills for development, and provide evidence-based insights to support informed decision-making among undergraduates.",
    problem: "The situation faced by Sri Lankan undergraduates is such that they come out from universities with qualifications that are far from those in demand by the industry, thus resulting in unemployment, underemployment, or slow career development. Also, the lack of localized, real-time tools that monitor the local job market narrows down the students' knowledge of the in-demand skills or the most suitable career routes for them according to their academic qualifications. Global job recommendation systems are not yet adapted to the Sri Lankan context and local career guidance methods continue to be outdated, subjective, and not in touch with the quick market trends. This situation indicates the necessity of developing a system that gathers and analyses real-time job data, interprets text and images, compares the results with students' profiles and gives them the right and practical advice for boosting employability.",
    technology: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-[var(--panel)]/50 border border-[var(--border)] hover:bg-[var(--panel)] transition-colors">
            <h5 className="font-bold text-[var(--accent)] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              Backend & ML
            </h5>
            <p className="text-[var(--ink)] text-sm opacity-90">Python, FastAPI, Uvicorn, Pandas, NumPy, Scikit-learn, XGBoost, Joblib</p>
          </div>
          <div className="p-4 rounded-2xl bg-[var(--panel)]/50 border border-[var(--border)] hover:bg-[var(--panel)] transition-colors">
            <h5 className="font-bold text-[var(--accent)] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              Data Extraction
            </h5>
            <p className="text-[var(--ink)] text-sm opacity-90">PaddleOCR, OpenCV, Selenium, BeautifulSoup4, WebDriver Manager, Requests</p>
          </div>
          <div className="p-4 rounded-2xl bg-[var(--panel)]/50 border border-[var(--border)] hover:bg-[var(--panel)] transition-colors">
            <h5 className="font-bold text-[var(--accent)] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              Frontend & UI
            </h5>
            <p className="text-[var(--ink)] text-sm opacity-90">Next.js (React), Tailwind CSS, Lucide Icons, Ant Design</p>
          </div>
          <div className="p-4 rounded-2xl bg-[var(--panel)]/50 border border-[var(--border)] hover:bg-[var(--panel)] transition-colors">
            <h5 className="font-bold text-[var(--accent)] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              Infrastructure
            </h5>
            <p className="text-[var(--ink)] text-sm opacity-90">PostgreSQL (Supabase), SQLAlchemy 2.0, Alembic</p>
          </div>
        </div>
      </div>
    )
  },
  prasadh: {
    literature: "Selecting an appropriate career path is a crucial decision for university students, particularly within the rapidly evolving Information Technology (IT) sector in Sri Lanka. Although access to higher education has improved, many undergraduates still struggle to align their academic knowledge with industry expectations. This often leads to skill mismatches, reduced employability, and uncertainty about future career directions. Traditional career guidance methods in Sri Lanka generally rely on informal advice, limited aptitude tests, or subjective opinions, which are not sufficient for addressing the complexity of modern career decision-making. Recent research highlights the growing effectiveness of machine learning (ML) in improving career guidance systems. Studies such as Britto et al. and Jha et al. show that combining academic performance with personal interests and personality traits can significantly improve the accuracy of career recommendations. Advanced algorithms such as CatBoost and Support Vector Machines (SVM) have achieved high prediction accuracies, ranging from around 94% to 98% in controlled datasets. Furthermore, research by Bhaskaran et al. emphasizes that integrating both academic and behavioral attributes leads to more reliable and well-rounded career predictions. However, despite these improvements, most existing systems still depend on static datasets and do not incorporate real-time labor market trends. This limitation reduces their practical effectiveness, particularly in the Sri Lankan IT sector, where job requirements change rapidly. Therefore, there is a strong need for more adaptive and locally relevant ML-based career guidance systems that better connect academic recommendations with actual industry demands.",
    methodology: "Data preprocessing was implemented using scikit-learn pipelines to ensure consistency across all stages and to prevent data leakage. The preprocessing workflow included missing value imputation, text normalization, keyword-based feature engineering, One-Hot Encoding for categorical variables, and StandardScaler normalization for numerical features. Feature engineering was a key strength of this component, resulting in 25 informative features. These included academic performance indicators, demographic attributes, five OCEAN personality dimensions, and six RIASEC interest scores. Additional derived features such as the dominant RIASEC type and binary flags (Is_Analytical, Is_Creative, Is_Social) were also incorporated to capture deeper behavioral patterns. The core model is an XGBoost multi-class classifier designed with carefully tuned hyperparameters to achieve a balance between accuracy and generalization while reducing overfitting. Training was performed using an 80:20 stratified train-test split. Evaluation included accuracy, weighted F1-score, classification report, and 5-fold cross-validation, achieving 87% test accuracy and a stable 87.4% cross-validation score.",
    gap: "Although machine learning-based career guidance systems have achieved promising results in controlled environments, several critical limitations still exist, particularly when applied to real-world and region-specific contexts such as Sri Lanka. Most existing systems are developed using static and globally sourced datasets that do not reflect local employment conditions, industry demands, or recruitment practices. This leads to a gap between predicted career outcomes and actual job availability in the Sri Lankan IT sector. Another major limitation is the reliance on self-reported data such as skills, interests, and personality traits. These inputs are often subjective and prone to bias, resulting in inaccurate or incomplete user profiles. While personality models such as OCEAN and behavioral indicators have been used, they are typically not validated using real-time behavioral signals. Furthermore, most systems do not incorporate passive data such as facial expressions or emotional states, which can provide deeper insights into individual preferences and decision-making tendencies. Existing research also lacks integration with real-time job market intelligence. Platforms such as TopJobs.lk contain valuable dynamic data including job descriptions, required skills, and industry trends; however, these are rarely utilized in ML-based career systems. As a result, recommendations often become outdated or misaligned with current market needs.",
    objective: "The primary objective of this research is to design, implement, and evaluate a multimodal AI-powered career guidance and counseling system tailored specifically for IT undergraduates in Sri Lanka. The proposed system aims to improve the accuracy, personalization, and adaptability of career recommendations by integrating multiple data modalities, including academic performance, personality traits, behavioral signals, and real-time labor market data. To achieve this goal, several specific objectives are defined. First, the system will collect and preprocess multimodal datasets comprising academic records, self-reported technical skills, Big Five (OCEAN) personality traits, Holland’s RIASEC vocational interests, and facial emotion data extracted using deep learning techniques. Second, an optimized XGBoost-based classifier will be developed to perform multi-class career prediction with high accuracy. The overall aim is to evaluate the system in terms of accuracy, usability, and real-world applicability, ensuring its effectiveness in improving career decision-making for Sri Lankan IT undergraduates.",
    problem: "Despite the advancements in machine learning-based career guidance systems, there remains a significant challenge in developing an accurate, adaptive, and context-aware solution that effectively supports career decision-making for IT undergraduates in Sri Lanka. Current systems often rely on limited input features such as academic performance or static personality assessments, which fail to capture the full complexity of an individual’s career potential. The primary research problem addressed in this study is the lack of a unified multimodal framework that integrates diverse data sources to provide reliable and personalized career recommendations. Existing approaches do not sufficiently combine academic records, personality traits, self-assessed skills, and real-time behavioral signals such as facial emotion recognition. Furthermore, they rarely incorporate live labor market intelligence, which is essential for aligning career recommendations with current industry demands in the Sri Lankan IT sector. Another key issue is the absence of adaptive learning and feedback mechanisms. Most systems generate static predictions without evolving based on user progress, skill development, or changing market conditions. This limits their long-term usefulness and reduces their ability to support continuous career growth.",
    technology: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-[var(--panel)]/50 border border-[var(--border)] hover:bg-[var(--panel)] transition-colors">
            <h5 className="font-bold text-[var(--accent)] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              Backend & ML
            </h5>
            <p className="text-[var(--ink)] text-sm opacity-90">Python, Pandas, NumPy, Scikit-learn, XGBoost, Joblib</p>
          </div>
          <div className="p-4 rounded-2xl bg-[var(--panel)]/50 border border-[var(--border)] hover:bg-[var(--panel)] transition-colors">
            <h5 className="font-bold text-[var(--accent)] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              Modeling & Evaluation
            </h5>
            <p className="text-[var(--ink)] text-sm opacity-90">Scikit-learn (Pipeline, ColumnTransformer), XGBoost (XGBClassifier), Cross-validation</p>
          </div>
          <div className="p-4 rounded-2xl bg-[var(--panel)]/50 border border-[var(--border)] hover:bg-[var(--panel)] transition-colors">
            <h5 className="font-bold text-[var(--accent)] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              Data Processing
            </h5>
            <p className="text-[var(--ink)] text-sm opacity-90">StandardScaler, OneHotEncoder, LabelEncoder, RIASEC analysis</p>
          </div>
          <div className="p-4 rounded-2xl bg-[var(--panel)]/50 border border-[var(--border)] hover:bg-[var(--panel)] transition-colors">
            <h5 className="font-bold text-[var(--accent)] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              Development
            </h5>
            <p className="text-[var(--ink)] text-sm opacity-90">Jupyter Notebook, VS Code, PyCharm</p>
          </div>
        </div>
      </div>
    )
  },
  shangave: {
    literature: "Personalized learning and career guidance systems have gained significant attention with the advancement of machine learning and educational technologies. Traditional systems rely on static curricula and generalized assessments, which fail to address individual differences in learning styles, skills, and career aspirations. Recent research highlights the importance of adaptive systems that use data-driven approaches to analyze student behavior and provide tailored recommendations. These systems collect data from multiple sources such as academic records, quizzes, and user inputs to build comprehensive learner profiles. Machine learning techniques such as classification, clustering, and recommendation algorithms are widely used in modern guidance systems. Classification models help predict suitable career paths, while clustering groups students based on similar characteristics. Recommendation systems suggest learning resources and tasks based on peer similarities. These approaches improve personalization and learning outcomes compared to traditional methods.Further advancements include the use of reinforcement learning and sentiment analysis to enhance adaptability and engagement. Additionally, modern systems incorporate gamification elements to improve user engagement and learning consistency. Despite these advancements, challenges remain in terms of data quality, scalability, and fairness. Ethical considerations such as data privacy, bias, and transparency are also critical in ensuring responsible system deployment.Overall, existing studies demonstrate the potential of intelligent systems in improving personalized learning and career guidance, while also highlighting areas for further improvement and research.",
    gap: "Although existing personalized learning and career guidance systems provide valuable support, several limitations restrict their effectiveness. Most systems primarily focus on academic performance and technical skills, neglecting other important factors such as personality traits, motivation, and behavioral patterns. This results in incomplete learner profiles and less accurate recommendations. Additionally, many systems offer static or semi-adaptive recommendations that do not fully respond to real-time student progress. While some systems incorporate machine learning, they often lack continuous monitoring and dynamic updating mechanisms, limiting their ability to provide truly personalized learning pathways. Another major gap is the lack of integration between multiple machine learning techniques. Existing systems typically use either classification or recommendation models, but rarely combine classification, clustering, and reinforcement learning in a unified framework. Furthermore, there is limited focus on the integration of expert knowledge in current systems. Input from industry professionals and psychologists is often missing, which reduces the practical relevance and psychological alignment of recommendations.Scalability and interpretability also remain key challenges. Complex models may provide accurate predictions but lack transparency, reducing user trust. Therefore, there is a clear need for a more comprehensive, adaptive, and interpretable system that integrates multiple data sources, machine learning techniques, and expert insights.",
    problem: "Undergraduate IT students often face uncertainty when selecting suitable career paths due to a lack of personalized guidance. Traditional academic systems provide limited support, relying on generalized advice and static curricula that do not consider individual differences in skills, interests, and learning styles. As a result, students may choose inappropriate career paths, leading to low satisfaction and reduced employability. Existing career guidance systems attempt to address this issue but are limited in their ability to provide dynamic and personalized recommendations. Many systems rely heavily on academic data and fail to incorporate real-time performance, behavioral traits, and psychological factors. This leads to recommendations that may not fully reflect a student’s true capabilities and potential.Another key problem is the absence of continuous monitoring and adaptive learning mechanisms. Students’ skills and interests evolve over time, but most systems do not update recommendations accordingly. Additionally, there is a lack of integration between career prediction and actionable learning guidance. While some systems can recommend career paths, they do not provide structured roadmaps or step-by-step plans to help students achieve their goals. This creates a gap between prediction and practical implementation. [2][6] Therefore, the main research problem is how to design an intelligent system that can accurately predict suitable career paths while providing adaptive, personalized, and continuously updated learning roadmaps that align with student capabilities and industry requirements.",
    objective: "The primary objective of this research is to develop a machine learning-based system that provides personalized career guidance and adaptive learning roadmaps for undergraduate IT students. The system aims to analyze student data and generate accurate career predictions aligned with individual skills, interests, and learning styles. A key objective is to integrate multiple data sources, including academic records, quizzes, surveys, and psychological assessments, to create comprehensive student profiles. Another objective is to implement and compare different machine learning models such as Random Forest, XGBoost, and LightGBM to identify the most effective approach for career prediction. The development of a dynamic roadmap generation module is another important objective. This module will provide structured learning plans with tasks, milestones, and resources, which adapt based on student progress and performance.Finally, the research aims to ensure ethical and scalable system deployment by addressing data privacy, fairness, and interpretability. The system should be accessible, user-friendly, and capable of supporting a large number of students effectively.",
    methodology: "The proposed system follows a machine learning-driven methodology to provide personalized career guidance and adaptive learning roadmaps. The process begins with data collection from multiple sources, including academic records, surveys, quizzes, and psychological assessments. The collected data is preprocessed to ensure quality and consistency, including handling missing values, normalizing numerical data, and encoding categorical variables. The system employs multiple machine learning models for prediction and grouping. Classification algorithms such as Random Forest, XGBoost, and LightGBM are used to predict suitable career paths. Clustering techniques group students based on skill levels, enabling personalized learning experiences. A personalized roadmap generator translates predictions into structured learning plans, including tasks, milestones, and skill development activities. A monitoring system tracks student progress and dynamically updates the roadmap using adaptive and reinforcement learning principles. The system is implemented using a web-based architecture with a React frontend and a Python-based backend. Cloud deployment ensures scalability, while secure data handling ensures privacy and ethical compliance.",
    technology: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-[var(--panel)]/50 border border-[var(--border)] hover:bg-[var(--panel)] transition-colors">
            <h5 className="font-bold text-[var(--accent)] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              Backend & ML
            </h5>
            <p className="text-[var(--ink)] text-sm opacity-90">Python, Random Forest, XGBoost, LightGBM, Reinforcement Learning</p>
          </div>
          <div className="p-4 rounded-2xl bg-[var(--panel)]/50 border border-[var(--border)] hover:bg-[var(--panel)] transition-colors">
            <h5 className="font-bold text-[var(--accent)] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              Frontend
            </h5>
            <p className="text-[var(--ink)] text-sm opacity-90">React, Web-based architecture</p>
          </div>
          <div className="p-4 rounded-2xl bg-[var(--panel)]/50 border border-[var(--border)] hover:bg-[var(--panel)] transition-colors">
            <h5 className="font-bold text-[var(--accent)] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              Techniques
            </h5>
            <p className="text-[var(--ink)] text-sm opacity-90">Classification, Clustering, Sentiment Analysis, Gamification</p>
          </div>
          <div className="p-4 rounded-2xl bg-[var(--panel)]/50 border border-[var(--border)] hover:bg-[var(--panel)] transition-colors">
            <h5 className="font-bold text-[var(--accent)] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              Deployment
            </h5>
            <p className="text-[var(--ink)] text-sm opacity-90">Cloud Deployment, Secure Data Handling</p>
          </div>
        </div>
      </div>
    )
  },
  "Thah ATRS": {
    literature: "Facial Emotion Recognition (FER) has evolved from traditional feature extraction methods such as Local Binary Patterns (LBP) and Histogram of Oriented Gradients (HOG) to deep learning-based Convolutional Neural Networks (CNNs). Large-scale datasets such as FER-2013 and AffectNet enabled researchers to train robust emotion recognition models capable of identifying multiple emotional states. Studies have shown that facial expressions provide reliable behavioral indicators that can be used to infer personality traits and emotional responses. Research on personality prediction demonstrates that multimedia signals including facial expressions, speech, and gestures can be used to estimate the Big Five personality traits. Career recommendation systems traditionally rely on questionnaire-based methods such as the MBTI, RIASEC model, and aptitude tests. Recent research introduced Artificial Intelligence (AI) and Machine Learning (ML) approaches to automate career guidance systems using behavioral and psychological data. Multimodal systems integrating video, audio, and text data have been shown to improve prediction accuracy compared to single-modality systems.",
    gap: (
      <ul className="space-y-4">
        <li className="flex gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
          <span className="text-[var(--ink)] opacity-90 text-sm">Existing career guidance systems rely heavily on self-reported questionnaires, which are often biased, inconsistent, and unable to capture real-time behavioral data.</span>
        </li>
        <li className="flex gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
          <span className="text-[var(--ink)] opacity-90 text-sm">Most current systems do not integrate facial emotion recognition, personality analysis, and machine learning into a single unified framework for intelligent career recommendation.</span>
        </li>
        <li className="flex gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
          <span className="text-[var(--ink)] opacity-90 text-sm">There is limited use of real-time emotional and behavioral analysis in IT career guidance, resulting in less accurate and less personalized career recommendations.</span>
        </li>
      </ul>
    ),
    problem: (
      <ul className="space-y-4">
        <li className="flex gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
          <span className="text-[var(--ink)] opacity-90 text-sm">Students and job seekers face difficulty selecting the most suitable IT career path due to lack of objective and personalized career guidance tools.</span>
        </li>
        <li className="flex gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
          <span className="text-[var(--ink)] opacity-90 text-sm">Traditional career counseling methods depend on subjective surveys rather than actual behavioral data, leading to inaccurate career decisions.</span>
        </li>
        <li className="flex gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
          <span className="text-[var(--ink)] opacity-90 text-sm">There is a need for an intelligent system that can analyze real-time emotional responses and personality traits to improve the accuracy and reliability of career recommendations.</span>
        </li>
      </ul>
    ),
    objective: (
      <ul className="space-y-4">
        <li className="flex gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
          <span className="text-[var(--ink)] opacity-90 text-sm">To develop an intelligent AI-based career guidance system that provides data-driven and personalized IT career recommendations.</span>
        </li>
        <li className="flex gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
          <span className="text-[var(--ink)] opacity-90 text-sm">To analyze users' facial emotions and personality traits in real time during a structured interview process.</span>
        </li>
        <li className="flex gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
          <span className="text-[var(--ink)] opacity-90 text-sm">To apply machine learning techniques to accurately classify and recommend suitable IT career paths based on behavioral and emotional data.</span>
        </li>
      </ul>
    ),
    methodology: (
      <div className="space-y-6">
        {[
          { step: "Step 1: Data Collection", details: "Facial images and emotional expressions are captured using a webcam during a structured interview session. The system records user responses while monitoring facial expressions in real time." },
          { step: "Step 2: Emotion Detection", details: "The EfficientNet-B0 deep learning model is used to detect and classify facial emotions. The model is trained using the FER-2013 dataset containing thousands of labeled facial images." },
          { step: "Step 3: Feature Engineering", details: "Extract emotion probability values for each emotion category. Generate additional features such as dominant emotion, emotion variance, and emotion entropy." },
          { step: "Step 4: Personality Prediction", details: "Map emotional data to the Big Five personality traits using predefined heuristic rules." },
          { step: "Step 5: Career Classification", details: "Use the Random Forest machine learning algorithm to classify users into different IT career categories." },
          { step: "Step 6: Evaluation", details: "Evaluate model performance using accuracy, confusion matrix, precision, recall, and F1-score." }
        ].map((item, i) => (
          <div key={i} className="p-4 rounded-2xl bg-[var(--panel)]/50 border border-[var(--border)] hover:bg-[var(--panel)] transition-colors">
            <h5 className="font-bold text-[var(--accent)] mb-2">{item.step}</h5>
            <p className="text-[var(--ink)] text-sm opacity-90">{item.details}</p>
          </div>
        ))}
      </div>
    ),
    technology: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-[var(--panel)]/50 border border-[var(--border)] hover:bg-[var(--panel)] transition-colors">
            <h5 className="font-bold text-[var(--accent)] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              Backend & AI Core
            </h5>
            <p className="text-[var(--ink)] text-sm opacity-90">Python, FastAPI, TensorFlow/PyTorch, EfficientNet-B0, Scikit-learn</p>
          </div>
          <div className="p-4 rounded-2xl bg-[var(--panel)]/50 border border-[var(--border)] hover:bg-[var(--panel)] transition-colors">
            <h5 className="font-bold text-[var(--accent)] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              Computer Vision
            </h5>
            <p className="text-[var(--ink)] text-sm opacity-90">OpenCV, face-api.js, FER-2013 Dataset, NumPy, Pandas</p>
          </div>
          <div className="p-4 rounded-2xl bg-[var(--panel)]/50 border border-[var(--border)] hover:bg-[var(--panel)] transition-colors">
            <h5 className="font-bold text-[var(--accent)] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              Frontend & Real-time
            </h5>
            <p className="text-[var(--ink)] text-sm opacity-90">HTML, CSS, JavaScript, WebSocket</p>
          </div>
          <div className="p-4 rounded-2xl bg-[var(--panel)]/50 border border-[var(--border)] hover:bg-[var(--panel)] transition-colors">
            <h5 className="font-bold text-[var(--accent)] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              Development & Ops
            </h5>
            <p className="text-[var(--ink)] text-sm opacity-90">Google Colab, Git, GitHub</p>
          </div>
        </div>
      </div>
    )
  }
};


const researchers = [
  { id: "prasadh", name: "Prasadh" },
  { id: "diven", name: "Diven" },
  { id: "shangave", name: "Shangave" },
  { id: "Thah ATRS", name: "Thah ATRS" }
];

const sections = [
  { id: "literature", title: "Literature Survey", icon: <BookOpen className="w-5 h-5" /> },
  { id: "gap", title: "Research Gap", icon: <Search className="w-5 h-5" /> },
  { id: "problem", title: "Research Problem", icon: <AlertCircle className="w-5 h-5" /> },
  { id: "objective", title: "Research Objective", icon: <Target className="w-5 h-5" /> },
  { id: "methodology", title: "Methodology", icon: <Layers className="w-5 h-5" /> },
  { id: "technology", title: "Technology", icon: <Cpu className="w-5 h-5" /> }
];

export default function DomainPage() {
  const [activeTab, setActiveTab] = useState(researchers[0].id);
  const [selectedSection, setSelectedSection] = useState<typeof sections[0] | null>(null);

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Research <span className="text-[var(--accent)]">Domains</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[var(--muted)] text-base md:text-lg max-w-2xl mx-auto"
          >
            Detailed research breakdown for each domain expert and their respective focus areas.
          </motion.p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 md:mb-12 p-1.5 md:p-2 bg-[var(--panel)]/50 backdrop-blur-md border border-[var(--border)] rounded-2xl md:rounded-3xl w-full md:w-fit mx-auto shadow-xl">
          {researchers.map((researcher) => (
            <button
              key={researcher.id}
              onClick={() => setActiveTab(researcher.id)}
              className={`relative px-4 md:px-8 py-2 md:py-3 rounded-xl md:rounded-2xl text-xs md:text-sm font-bold transition-all flex items-center gap-2 flex-1 md:flex-none justify-center ${activeTab === researcher.id
                  ? "text-white"
                  : "text-[var(--muted)] hover:text-[var(--ink)]"
                }`}
            >
              <User className="w-4 h-4 hidden sm:block" />
              {researcher.name}
              {activeTab === researcher.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] rounded-xl md:rounded-2xl -z-10 shadow-lg shadow-[var(--accent)]/20"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedSection(section)}
                className="group p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-[var(--panel)] border border-[var(--border)] shadow-lg hover:shadow-2xl hover:shadow-[var(--accent)]/5 md:hover:-translate-y-2 transition-all relative overflow-hidden cursor-pointer"
              >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--accent)]/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-[var(--accent)] mb-6 group-hover:scale-110 group-hover:bg-[var(--accent)] group-hover:text-white transition-all">
                    {section.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-4 group-hover:text-[var(--accent)] transition-colors">
                    {section.title}
                  </h3>

                  <div className="space-y-3">
                    <div className="h-2 w-full bg-[var(--page-bg)] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className="h-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)]"
                      />
                    </div>
                    <p className="text-sm text-[var(--muted)] leading-relaxed italic">
                      Click to view detailed {section.title} for {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}.
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Modal Overlay */}
        <AnimatePresence>
          {selectedSection && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedSection(null)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] cursor-zoom-out"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="fixed inset-4 m-auto w-auto max-w-2xl h-fit max-h-[90vh] bg-[var(--panel)] border border-[var(--border)] rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 shadow-2xl z-[101] overflow-y-auto"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[var(--accent)] text-white flex items-center justify-center shadow-lg shadow-[var(--accent)]/20">
                      {selectedSection.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">{selectedSection.title}</h2>
                      <p className="text-[var(--muted)] font-medium">Domain: {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedSection(null)}
                    className="w-10 h-10 rounded-full bg-[var(--page-bg)] border border-[var(--border)] flex items-center justify-center hover:bg-red-500 hover:text-white transition-all shadow-sm"
                  >
                    ✕
                  </button>
                </div>

                <div className="prose prose-slate max-w-none">
                  <div className="p-8 rounded-3xl bg-[var(--page-bg)] border border-[var(--border)] mb-6">
                    <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <Layers className="w-5 h-5 text-[var(--accent)]" />
                      Detailed Overview
                    </h4>
                    <div className="text-[var(--ink)] leading-relaxed text-lg opacity-90">
                      {domainData[activeTab]?.[selectedSection.id] ? (
                        typeof domainData[activeTab][selectedSection.id] === "string" ? (
                          <p>{domainData[activeTab][selectedSection.id]}</p>
                        ) : (
                          domainData[activeTab][selectedSection.id]
                        )
                      ) : (
                        <p>
                          This is the comprehensive analysis for the <strong>{selectedSection.title}</strong> segment of <strong>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}&apos;s</strong> research project.
                          It covers the core identified trends, experimental results, and strategic implementations derived from the behavioral analytics engine.
                        </p>
                      )}
                    </div>
                  </div>

                  {!domainData[activeTab]?.[selectedSection.id] && (
                    <div className="space-y-6">
                      <h4 className="text-xl font-bold">Key Findings</h4>
                      <ul className="grid gap-4">
                        {[1, 2, 3].map((i) => (
                          <li key={i} className="flex items-start gap-4 p-4 rounded-2xl border border-[var(--border)] bg-[var(--panel)]/50 hover:bg-[var(--panel)] transition-colors">
                            <div className="w-6 h-6 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center text-xs font-bold mt-0.5">
                              {i}
                            </div>
                            <span className="text-[var(--ink)] opacity-90">Significant breakthrough in {selectedSection.title.toLowerCase()} methodology specifically tailored for student behavioral patterns in this domain.</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-10 pt-8 border-t border-[var(--border)] flex justify-end">
                  <button
                    onClick={() => setSelectedSection(null)}
                    className="px-8 py-3 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] text-white rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg shadow-[var(--accent)]/20"
                  >
                    Close Details
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}


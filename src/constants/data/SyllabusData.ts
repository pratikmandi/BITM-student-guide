export type Module = {
    title: string;
    description: string;
};

export type SubjectWithModules = {
    name: string;
    syllabus: Module[];
};

export type SyllabusSection = {
    title: string;
    data: SubjectWithModules[];
};

export type Semester = {
    [semester: string]: SyllabusSection[];
};

export type BranchSyllabus = {
    [branch: string]: Semester;
};

export const branchSyllabusData: BranchSyllabus = {
    'Computer Science and Engineering': {
        'SEM 1': [
            {
                title: 'Theory',
                data: [
                    {
                        name: 'MA24101: Mathematics - I',
                        syllabus: [
                            {
                                title: "MODULE – I: Sequences and Series",
                                description: "Sequences, Convergence of Sequence. Series, Convergence of Series, Tests for Convergence: Comparison tests, Cauchy's Integral test, Ratio test, Cauchy’s root test, Raabe’s test, Gauss test, Alternating series, Leibnitz test, Absolute and Conditional Convergence."
                            },
                            {
                                title: "MODULE – II: Matrices",
                                description: "Rank of a Matrix, elementary transformations. Vectors, Linear Independence and Dependence of Vectors. Consistency of system of linear equations. Eigenvalues, Eigenvectors, Cayley - Hamilton theorem."
                            },
                            {
                                title: "MODULE – III: Advance Differential Calculus",
                                description: "Function of several variables, Partial derivatives, Euler’s theorem for homogeneous functions, Total derivatives, Chain rules, Jacobians and its properties, Taylor series for function of two variables, Maxima – Minima."
                            },
                            {
                                title: "MODULE – IV: Advance Integral Calculus",
                                description: "Double integrals, double integrals in polar coordinates, Change of order of integration, Triple Integrals, cylindrical and spherical coordinate systems, transformation of coordinates, Applications of double and triple integrals in areas and volumes."
                            },
                            {
                                title: "MODULE – V: Vector Calculus",
                                description: "Scalar and vector point functions, gradient, directional derivative, divergence, curl. Line Integral, Work done, Conservative field, Green’s theorem in a plane, Surface and volume integrals, Gauss – divergence theorem, Stoke ’s theorem."
                            }
                        ]
                    },
                    {
                        name: 'EC24101: Basic Electronics and Communication Engineering',
                        syllabus: [
                            {
                                title: "MODULE – I: Diodes and Applications: ",
                                description: "Introduction to PN junction diodes; Characteristics of semiconductor diodes: V - I characteristics, diode- resistance, temperature - dependence, diode - capacitance; DC & AC load lines; Breakdown Mechanisms; Zener Diode – Operation and Applications; Diode as a Rectifier: Half Wave and Full Wave Rectifiers with and without C- Filters."
                            },
                            {
                                title: "MODULE – II: BJT & FET: ",
                                description: "Bipolar Junction Transistors (BJT): PNP and NPN Transistors, Basic Transistor Action, Input and Output Characteristics of CB, CE and CC Configurations, dc and ac load line analysis, operating point, Transistor biasing: Fixed bias, emitter bias/ self - bias, Low - frequency response of CE amplifier. \n\nField Effect Transistors: JFET, Idea of Channel Formation, Pinch - Off and saturation Voltage, Current - Voltage Output Characteristics; MOSFET: Basic structure, operation and characteristics."
                            },
                            {
                                title: "MODULE – III: Oscillators & Amplifiers:",
                                description: "Sinusoidal Oscillators: Concept of positive and negative feedback, Barkhausen criterion for sustained oscillations, Determination of Frequency and Condition of oscillation, Hartley and Colpitt’s oscillator.\n\nOperational Amplifiers: Characteristics of an Ideal and Practical Operational Amplifier(IC 741), Inverting and non- inverting amplifiers, Offset error voltages and currents; Power supply rejection ratio, Slew Rate and concept of Virtual Ground, Summing and Difference Amplifiers, Differentiator and Integrator, RC phase shift oscillator."
                            },
                            {
                                title: "MODULE – IV: Logic Gates and Boolean algebra:",
                                description: "Logic Gates and Boolean algebra: Introduction to Boolean Algebra and Boolean operators, Symbolic representation, Boolean algebraic function and Truth table of different Digital logic Gates(AND, OR, NOT, NAND, NOR, EX- OR, EX - NOR); Realization of Basic logic gate  using universal gates, Adder, Subtractor, adder/ subtractor."
                            },
                            {
                                title: "MODULE – V: Electronic communication:",
                                description: "ntroduction to electronic communication system, Electromagnetic Communication spectrum band and applications, Elements of Electronic Communication System; Merits and demerits of analog and digital communication, Modes of communication; Signal radiation and propagation; Need for modulation; Introduction to Amplitude modulation and Angle modulation."
                            },
                        ]
                    }
                ],
            },
            {
                title: 'Lab',
                data: [
                    { name: 'Physics Lab', syllabus: [] },
                ],
            },
        ],
    },
    'Artificial Intelligence and Machine Learning': {
        'SEM 1': [
            {
                title: 'Theory',
                data: [
                    { name: 'Introduction to AI', syllabus: [] },
                ],
            },
        ],
    },
    'Electronics and Communication Engineering': {
        'SEM 1': [
            {
                title: 'Theory',
                data: [
                    { name: 'Signals and Systems', syllabus: [] },
                ],
            },
        ],
    },
    'Electrical and Electronics Engineering': { 'SEM 1': [] },
    'Production and Industrial Engineering': { 'SEM 1': [] },
    'Mechanical Engineering': { 'SEM 1': [] },
    'Chemical Engineering': { 'SEM 1': [] },
    'Bioengineering and Biotechnology': { 'SEM 1': [] },
    'Civil and Environmental Engineering': { 'SEM 1': [] },
    'Centre for Food Engineering & Technology': { 'SEM 1': [] },
    'Mathematics and Computing': { 'SEM 1': [] },
    'Centre for Quantitative Economics & Data Science': { 'SEM 1': [] },
    'Physics': { 'SEM 1': [] },
    'Chemistry': { 'SEM 1': [] },
    'Master of Business Administration': {
        'SEM 1': [
            {
                title: 'Theory',
                data: [
                    { name: 'Principles of Management', syllabus: [] },
                ],
            },
        ],
    },
    'Integrated MBA': { 'SEM 1': [] },
    'Bachelor of Hotel Management and Catering Technology': { 'SEM 1': [] },
    'Architecture and Planning': { 'SEM 1': [] },
    'Bachelor of Pharmacy': { 'SEM 1': [] },
    'Space Engineering and Rocketry': { 'SEM 1': [] },
    'B.MLT': { 'SEM 1': [] },
    'Master of Computer Applications': { 'SEM 1': [] },
    'M.Tech. Remote Sensing': { 'SEM 1': [] },
    'M.Sc. Geoinformatics': { 'SEM 1': [] },
};
export const branches = Object.keys(branchSyllabusData);
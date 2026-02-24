export interface Lecture {
  id: number;
  title: string;
  subtitle: string;
  duration: string;
  topics: string[];
  content: LectureContent;
  keyConcepts: string[];
  summary: string;
}

export interface LectureContent {
  introduction: string;
  sections: Section[];
}

export interface Section {
  title: string;
  content: string[];
  examples?: string[];
}

export const lectures: Lecture[] = [
  {
    id: 1,
    title: "Welcome to Sociology",
    subtitle: "Introduction to the Sociological Imagination",
    duration: "90 minutes",
    topics: [
      "What is sociology?",
      "The sociological imagination",
      "Sociology vs. common sense",
      "Micro vs. macro perspectives"
    ],
    content: {
      introduction: "Sociology is basically seeing connections. It studies how society shapes our lives. We look at life at two levels: Micro—individuals and everyday interactions, and Macro—institutions, culture, inequality, and social change.",
      sections: [
        {
          title: "What is Sociology?",
          content: [
            "Sociology studies how society shapes our lives.",
            "We examine life at two levels: Micro (individuals, everyday interactions) and Macro (institutions, culture, inequality, social change).",
            "Sociology connects the two: micro ↔ macro.",
            "We don't only ask 'what did a person do?'—we also ask 'what shaped that situation?'"
          ]
        },
        {
          title: "The Sociological Imagination",
          content: [
            "The sociological imagination means connecting personal experiences to social patterns.",
            "Personal troubles can connect to public issues.",
            "Example: Stress about career choices feels personal—but it connects to the education system, job market, and family expectations."
          ]
        },
        {
          title: "Micro vs. Macro",
          content: [
            "Micro: Face-to-face interactions, individual choices, daily routines",
            "Macro: Institutions, policies, economic systems, cultural norms",
            "The key insight: Macro forces shape micro interactions"
          ],
          examples: [
            "Micro: Bargaining with a rickshaw driver",
            "Macro: Inflation, fuel prices, traffic policies affecting that interaction"
          ]
        },
        {
          title: "Our Classroom Agreement",
          content: [
            "Respect—we can disagree, but we critique ideas, not people.",
            "Participation—it's not only talking. Listening, group work, and thoughtful answers all count.",
            "Integrity—do your own work and cite sources.",
            "Communication—please communicate early if you're struggling."
          ]
        }
      ]
    },
    keyConcepts: ["Sociological Imagination", "Micro Level", "Macro Level", "Social Patterns", "Personal Troubles", "Public Issues"],
    summary: "You connected ME (micro) to GROUPS—norms and roles—and to INSTITUTIONS (macro). These words—norms, roles, institutions, social structure, inequality, social change—are tools we'll use all semester."
  },
  {
    id: 2,
    title: "The Sociological Toolkit",
    subtitle: "Imagination & Evidence",
    duration: "70-80 minutes",
    topics: [
      "Sociology vs. common sense",
      "The sociological imagination (Mills)",
      "Micro vs. macro analysis",
      "What counts as evidence"
    ],
    content: {
      introduction: "Society is the water we swim in—it shapes us even when we don't notice it. Today we build your sociological toolkit: imagination and evidence.",
      sections: [
        {
          title: "The 'Common Sense' Test",
          content: [
            "Common sense can feel obvious, but it can also be biased, incomplete, or contradictory.",
            "If common sense explains the world, why do we need science?",
            "Common sense often says 'It is what it is.' It relies on anecdotes.",
            "Sociology asks 'Why is it this way?' and checks patterns using evidence."
          ],
          examples: [
            "Statement: 'Opposites attract.' - Is this always true?",
            "Statement: 'If you work hard enough, you will succeed.' - What about hurdles like education quality, family wealth, discrimination?"
          ]
        },
        {
          title: "Meritocracy: Hard Work vs. Hurdles",
          content: [
            "Common sense story: success = hard work, failure = laziness",
            "Sociology adds: opportunity structure—the hurdles people face",
            "Quality of education, family wealth, social networks, discrimination all affect outcomes",
            "Dhaka check: Does a rickshaw puller work less hard than a CEO? Or is the structure of rewards different?"
          ]
        },
        {
          title: "Sociological Imagination (C. Wright Mills)",
          content: [
            "The ability to connect biography and history",
            "Personal troubles ↔ public issues",
            "Formula: Biography (your story) + History (time/society) = your reality",
            "Example: Job anxiety connects to job market, education system, economy, family expectations"
          ]
        },
        {
          title: "Micro vs. Macro",
          content: [
            "Micro: Face-to-face interactions—like bargaining with a rickshaw driver",
            "Macro: Institutions and systems—like inflation, fuel prices, traffic policies",
            "Macro forces shape micro interactions"
          ]
        },
        {
          title: "What Counts as Evidence?",
          content: [
            "Evidence means information we can verify—observe, measure, check.",
            "Quantitative: Numbers—surveys, census, rates",
            "Qualitative: Meanings—interviews, observation",
            "Rule of thumb: If we can't back it up with evidence, it's an opinion."
          ],
          examples: [
            "Claim: 'Traffic increases student stress'",
            "Quant evidence: % students spending 2+ hours in traffic",
            "Qual evidence: Interviews about lost study time, fatigue, missed classes"
          ]
        }
      ]
    },
    keyConcepts: ["Common Sense", "Meritocracy", "Opportunity Structure", "Sociological Imagination", "Biography", "History", "Quantitative Evidence", "Qualitative Evidence"],
    summary: "Sociology ≠ common sense. Sociological imagination = biography + history. Micro ↔ Macro. Evidence supports claims. One-line takeaway: Personal life ↔ social patterns."
  },
  {
    id: 3,
    title: "The Architects of Sociology",
    subtitle: "Why Sociology Began, and What the Founders Built",
    duration: "70 minutes",
    topics: [
      "Origins of sociology",
      "Comte, Durkheim, Marx, Weber",
      "Key sociological questions"
    ],
    content: {
      introduction: "These thinkers helped design the way we study society. They built tools: ways of asking questions, ways of explaining patterns, and ways of using evidence.",
      sections: [
        {
          title: "Why Sociology Began",
          content: [
            "Sociology did not begin because someone wanted a new subject.",
            "It began because society was changing so fast that people felt confused—and sometimes frightened.",
            "Europe in the 1800s: Factories grew, people moved to cities, work changed, family life changed.",
            "Big questions: Why is society changing so fast? How do we keep social life from falling apart?",
            "Sociology begins when society becomes a problem to solve."
          ]
        },
        {
          title: "Auguste Comte: Positivism and Order",
          content: [
            "Comte helped give sociology its name and direction.",
            "Keyword: Positivism—society can be studied using scientific methods",
            "Main goal: Social order—understanding what creates stability",
            "One-sentence summary: Comte believed society can be studied scientifically to create order and stability."
          ]
        },
        {
          title: "Émile Durkheim: Social Facts and Anomie",
          content: [
            "Durkheim wanted to prove society is not just a collection of individuals.",
            "Social facts: Things that exist outside you but shape your behavior (laws, rules, norms, traditions)",
            "Anomie: Feeling of normlessness—when rules are unclear or society changes too fast",
            "Suicide study: Even personal decisions show social patterns based on social integration and regulation"
          ]
        },
        {
          title: "Karl Marx: Class, Power, and Conflict",
          content: [
            "Marx's big worry: 'Stable for whom? And at what cost?'",
            "Society is shaped by economic systems and power",
            "History is driven by conflict between groups over resources, labor, and wealth",
            "Key question: Who benefits, and who pays?",
            "One-sentence summary: Marx focused on inequality and conflict produced by the economic system."
          ]
        },
        {
          title: "Max Weber: Meaning and Verstehen",
          content: [
            "Weber agreed economics matters, but people are also driven by meanings, values, culture, status",
            "Keyword: Verstehen—understanding social action from the person's point of view",
            "Protestant Ethic: Ideas can shape economic life—culture is not decoration",
            "Rationalization and Bureaucracy: Modern society becomes more focused on efficiency, calculation, and rules"
          ]
        },
        {
          title: "Missing Voices: Martineau and Du Bois",
          content: [
            "Early sociology was dominated by white European men",
            "Harriet Martineau: Translated Comte's work, wrote about family, morality, and women's lives",
            "W.E.B. Du Bois: Studied racial inequality, introduced 'double consciousness'",
            "Knowledge is shaped by power—what we study depends on who gets to speak"
          ]
        }
      ]
    },
    keyConcepts: ["Positivism", "Social Facts", "Anomie", "Class Conflict", "Verstehen", "Rationalization", "Double Consciousness"],
    summary: "Comte pushed studying society scientifically. Durkheim focused on social facts and cohesion. Marx focused on class and conflict. Weber focused on meaning and rationalization. Each lens reveals different truths."
  },
  {
    id: 4,
    title: "The Blueprints of Sociology",
    subtitle: "Major Theoretical Perspectives",
    duration: "80 minutes",
    topics: [
      "Functionalism",
      "Conflict theory",
      "Symbolic interactionism",
      "Feminist and postcolonial lenses"
    ],
    content: {
      introduction: "A perspective is a way of seeing the social world. It helps us notice some things clearly—and it also makes us ignore other things. Think of perspectives like Instagram filters.",
      sections: [
        {
          title: "Functionalism: The View from Above",
          content: [
            "Functionalists see society as a complex system of parts working together to keep the whole stable.",
            "Main question: 'What purpose does this serve for society?'",
            "Manifest functions: Intended purpose—the official goal",
            "Latent functions: Unintended consequences—something that happens even if nobody planned it",
            "Dysfunction: Something that reduces stability or disrupts the social system"
          ],
          examples: [
            "University manifest function: Learning, skills, degree",
            "University latent functions: Networks, meeting partners, delaying job market entry"
          ]
        },
        {
          title: "Conflict Perspective: Who Benefits?",
          content: [
            "Conflict theory asks you to stop looking for harmony and start looking for power.",
            "Society is a struggle for resources between groups.",
            "Main question: 'Who benefits, who suffers, and who dominates?'",
            "Modern conflict theory includes gender, race, ethnicity, religion, language, sexuality"
          ],
          examples: [
            "Functionalist view of university: Engine for learning",
            "Conflict view of university: Gatekeeper—who gets access? Who can afford it? Who gets left behind?"
          ]
        },
        {
          title: "Symbolic Interactionism: The Micro View",
          content: [
            "Society is created through day-to-day interaction—language, gestures, symbols, shared meanings.",
            "Main question: 'What does this mean to people, and how do meanings shape behavior?'",
            "Symbols: Anything that carries shared meaning (flag, wedding ring, brand logo, language)",
            "Digital example: WhatsApp 'seen' message creates anxiety, defines relationships, creates power dynamics"
          ]
        },
        {
          title: "Feminist Perspective",
          content: [
            "The founders were mostly men writing in male-dominated societies.",
            "Feminist sociology asks: what did they overlook?",
            "Gender is not only personal—gender is a social structure that shapes opportunity, safety, work, and power.",
            "Example: The 'double burden'—paid work plus larger share of unpaid work at home"
          ]
        },
        {
          title: "Postcolonial Perspective",
          content: [
            "Especially important in Bangladesh—sociology began in Europe, but our reality is not Europe.",
            "Questions: How did colonial history shape our institutions? Whose knowledge is treated as 'standard'?",
            "Example: Sometimes 'modern' is used as if it means 'Western'—who decides that?"
          ]
        }
      ]
    },
    keyConcepts: ["Functionalism", "Manifest Function", "Latent Function", "Dysfunction", "Conflict Theory", "Symbolic Interactionism", "Symbols", "Feminist Perspective", "Postcolonial Perspective"],
    summary: "Order, Power, Meaning. Three perspectives. Three ways of seeing. Functionalism asks what works. Conflict asks who benefits. Interactionism asks what things mean."
  },
  {
    id: 5,
    title: "Research Methods & Ethics",
    subtitle: "From Theory to Evidence",
    duration: "80 minutes",
    topics: [
      "Scientific method in sociology",
      "Quantitative vs. qualitative research",
      "Sampling methods",
      "Research ethics"
    ],
    content: {
      introduction: "Theory without evidence is just an opinion. Evidence without theory is just a pile of facts. Today we learn how to combine the two.",
      sections: [
        {
          title: "The Scientific Method",
          content: [
            "A systematic series of steps that ensures maximum objectivity.",
            "1. Define the Problem: Know what you're looking for",
            "2. Review the Literature: Read what others have written",
            "3. Formulate a Hypothesis: Your prediction—statement you can test",
            "4. Collect and Analyze Data: The fieldwork",
            "5. Develop the Conclusion: Was I right?"
          ]
        },
        {
          title: "Variables & Causality",
          content: [
            "Independent Variable: The 'cause'—changes independently",
            "Dependent Variable: The 'effect'—depends on the first one",
            "Correlation vs. Causation: Just because two things happen together doesn't mean one causes the other",
            "Classic example: Ice cream sales and murder rates both go up in summer—but heat causes both, not ice cream causing murder"
          ]
        },
        {
          title: "Quantitative vs. Qualitative Research",
          content: [
            "Quantitative: About quantity—numbers. Answers 'What?' and 'How many?'",
            "Goal: Generalize—find patterns that apply to large populations",
            "Qualitative: About quality—depth. Answers 'Why?' and 'How?'",
            "Goal: Understand meanings, feelings, narratives"
          ],
          examples: [
            "Quantitative: '60% of NSU students feel stressed'",
            "Qualitative: 'Students describe exam stress as drowning and fear of disappointing parents'"
          ]
        },
        {
          title: "Major Methods",
          content: [
            "Survey: Asking same questions to many people (questionnaires or interviews)",
            "Observation/Ethnography: Watching people in their natural setting",
            "Detached observation: Fly on the wall",
            "Participant observation: Join the group, become part of their world"
          ]
        },
        {
          title: "Sampling",
          content: [
            "Sample: A small slice of population that represents the whole",
            "Random sample: Every person has equal chance of being picked",
            "Bias: If sample is bad, results are garbage",
            "Validity: Are you measuring what you think you're measuring?",
            "Reliability: Is your measurement consistent?"
          ]
        },
        {
          title: "Research Ethics",
          content: [
            "Golden rule: Do No Harm",
            "Informed Consent: People must know they're being studied and agree to it",
            "Professional Competence: Know what you're doing",
            "Integrity: Be honest—cannot fake data",
            "Respect for Rights and Dignity: Privacy and confidentiality are sacred",
            "Social Responsibility: Work should try to make world better"
          ],
          examples: [
            "Scenario: Studying illegal street vendors who pay bribes",
            "Ethical dilemma: Publish truth vs. protect participants from harm",
            "Solution: Anonymity—publish patterns but hide names and locations"
          ]
        }
      ]
    },
    keyConcepts: ["Scientific Method", "Hypothesis", "Independent Variable", "Dependent Variable", "Correlation", "Causation", "Quantitative Research", "Qualitative Research", "Random Sample", "Informed Consent", "Validity", "Reliability"],
    summary: "We learned the Scientific Method—the loop of question, data, and conclusion. Quantitative (numbers) vs. Qualitative (narratives). Ethics is not optional—protecting subjects is the most important part."
  },
  {
    id: 6,
    title: "Methods in Action",
    subtitle: "Using Sociological Research Tools",
    duration: "60 minutes",
    topics: [
      "Designing surveys",
      "Fieldwork and observation",
      "Conducting interviews",
      "Applied ethics"
    ],
    content: {
      introduction: "Today is the 'doing' part. We learn how to actually use the tools of sociology: how to write a survey question that isn't biased, how to interview someone without making them awkward, and how to observe a crowd like a scientist.",
      sections: [
        {
          title: "Designing a Survey",
          content: [
            "Open-Ended Questions: Blank space for rich detail—hard to summarize",
            "Closed-Ended Questions: Force choice—perfect for statistics, lose detail",
            "Golden rule: The wording must be neutral"
          ],
          examples: [
            "Biased: 'Don't you agree that traffic in Dhaka is terrible?'",
            "Neutral: 'How would you describe the traffic conditions in Dhaka?'",
            "Double-barreled (bad): 'Do you enjoy studying sociology and waking up early?'",
            "Better: Two separate questions"
          ]
        },
        {
          title: "Field Research – Observation/Ethnography",
          content: [
            "Detached Observation: Fly on the wall—just watch",
            "Participant Observation: Join the group, become part of their world",
            "Hawthorne Effect: People change behavior when they know they're being watched",
            "Solution: Blend in, build trust so people forget you're there"
          ]
        },
        {
          title: "Field Notes",
          content: [
            "Need Thick Description—not just 'The street was noisy'",
            "Use five senses: 'Sound of honking buses, smell of exhaust and frying oil, rickshaw pullers shouting'",
            "Put the reader IN the scene"
          ]
        },
        {
          title: "The Interview",
          content: [
            "Not just a chat—conversation with a goal: to understand meaning",
            "Structured: Strict list of questions (spoken survey)",
            "Semi-Structured: Have a topic, let conversation flow",
            "Key skill: Listening. Participant should talk 80%, you talk 20%"
          ]
        },
        {
          title: "Building Rapport",
          content: [
            "Rapport = feeling of trust and comfort",
            "Start with easy questions",
            "Nod, look interested",
            "Be non-judgmental—if you judge, they stop talking"
          ]
        },
        {
          title: "The 'Probing' Technique",
          content: [
            "Never accept one-word answers",
            "Ask: 'Can you tell me more about that?' or simply 'Why?'",
            "Ask for examples: 'Can you give me an example of a good day and a bad day?'"
          ]
        }
      ]
    },
    keyConcepts: ["Open-Ended Questions", "Closed-Ended Questions", "Biased Questions", "Hawthorne Effect", "Thick Description", "Rapport", "Probing", "Participant Observation"],
    summary: "Surveys need careful wording to avoid bias. Observation requires noticing details while managing the Hawthorne Effect. Interviews require rapport and probing to get the real story."
  },
  {
    id: 7,
    title: "Culture & Society (Part 1)",
    subtitle: "The Building Blocks of Culture",
    duration: "50 minutes",
    topics: [
      "What is culture?",
      "Material vs. non-material culture",
      "Symbols, language, values, norms",
      "Cultural universals"
    ],
    content: {
      introduction: "Culture is our shared blueprint for living. It includes absolutely everything from traditional poetry to the latest TikTok trends, the way we eat street food, and even our chaotic traffic rules.",
      sections: [
        {
          title: "What is Culture?",
          content: [
            "Culture is the totality of learned, socially transmitted customs, knowledge, material objects, and behavior.",
            "Key word: LEARNED. You are not born knowing how to speak Bengali or use a smartphone.",
            "In sociology, culture does not just mean fine art or classical music—it includes everything.",
            "It is the shared way of life for a group of people; the blueprint for how a group lives."
          ]
        },
        {
          title: "Material vs. Non-Material Culture",
          content: [
            "Material Culture: Physical/technological aspects—food, houses, factories, smartphones (stuff you can touch)",
            "Non-Material Culture: Ways of using material objects, customs, beliefs, philosophies, governments, patterns of communication (ideas behind objects)",
            "Cultural Lag: Material culture evolves faster than non-material culture"
          ],
          examples: [
            "We have advanced internet technology, but our privacy laws and digital etiquette are still catching up"
          ]
        },
        {
          title: "Cultural Universals",
          content: [
            "Common practices and beliefs shared by all known societies",
            "Examples: Athletic sports, cooking, funeral ceremonies, medicine, marriage",
            "The universal exists everywhere, but the expression is completely different"
          ],
          examples: [
            "Everyone eats, but what's considered delicious in Dhaka might be unusual in Tokyo"
          ]
        },
        {
          title: "Elements of Culture – Symbols",
          content: [
            "Anything that carries a particular meaning recognized by people who share a culture",
            "We navigate our entire day through symbols"
          ],
          examples: [
            "Red traffic light = stop",
            "Thumbs-up = positive (in some cultures, offensive in others)",
            "Shaheed Minar = language movement and sacrifice",
            "Laughing crying emoji meaning shift between generations"
          ]
        },
        {
          title: "Elements of Culture – Language",
          content: [
            "Abstract system of word meanings and symbols for all aspects of culture",
            "Primary vehicle for transmitting culture to next generation",
            "Sapir-Whorf Hypothesis: Language shapes our perception of reality"
          ],
          examples: [
            "Languages with many words for 'family' highlight that kinship is culturally central",
            "Addressing someone as 'older paternal uncle' reminds you of social relationship and respect owed"
          ]
        },
        {
          title: "Elements of Culture – Values",
          content: [
            "Collective conceptions of what is considered good, desirable, and proper—or bad, undesirable, and improper",
            "Big, abstract ideas that a society holds dear",
            "Serve as broad guidelines for social living"
          ],
          examples: [
            "Bangladesh values: Deep respect for elders, hospitality to guests, community solidarity",
            "If someone doesn't offer food when you visit, you feel offended—a core value was violated"
          ]
        },
        {
          title: "Elements of Culture – Norms",
          content: [
            "Established standards of behavior maintained by society—how values are put into action",
            "Formal norms: Written down with strict punishments (laws, university code)",
            "Informal norms: Generally understood but not precisely recorded (dress for wedding, giving seat to elder)"
          ]
        },
        {
          title: "Mores and Folkways",
          content: [
            "Mores (mor-ays): Norms deemed highly necessary to welfare of society—embody most cherished principles",
            "Breaking a 'more' is a massive deal (murder, child abuse)",
            "Folkways: Norms governing everyday behavior—violation makes you seem weird or rude",
            "Eating with left hand, talking loudly in elevator—strange looks but not exile"
          ]
        },
        {
          title: "Sanctions",
          content: [
            "Penalties and rewards for conduct concerning a social norm",
            "Positive sanctions: Pay raise, medal, warm smile, compliment",
            "Negative sanctions: Fines, imprisonment, stares of contempt, being ignored"
          ]
        },
        {
          title: "Ethnocentrism vs. Cultural Relativism",
          content: [
            "Ethnocentrism: Tendency to assume one's own culture represents the norm or is superior",
            "Cultural Relativism: Viewing people's behavior from perspective of their own culture",
            "You don't have to agree, but as a researcher you must try to understand from the inside out"
          ]
        }
      ]
    },
    keyConcepts: ["Culture", "Material Culture", "Non-Material Culture", "Cultural Lag", "Symbols", "Language", "Sapir-Whorf Hypothesis", "Values", "Norms", "Mores", "Folkways", "Sanctions", "Ethnocentrism", "Cultural Relativism"],
    summary: "Culture is our shared blueprint for living. Material things + Non-material ideas. Building blocks: Symbols, Language, Values, Norms. To study society, we must strive for Cultural Relativism."
  },
  {
    id: 8,
    title: "Culture & Society (Part 2)",
    subtitle: "Dynamics of Culture",
    duration: "50 minutes",
    topics: [
      "Subcultures and countercultures",
      "Cultural change",
      "Popular culture & social media",
      "Cultural debates in Bangladesh"
    ],
    content: {
      introduction: "Culture is not a museum piece trapped behind glass. It lives, breathes, fragments into subcultures, and constantly changes over time.",
      sections: [
        {
          title: "Subcultures",
          content: [
            "Segment of society that shares distinctive pattern of customs, rules, and traditions that differs from larger society",
            "Key: Exist safely within larger dominant culture—don't necessarily oppose it",
            "Have their own specific niche"
          ],
          examples: [
            "NSU student clubs, esports community, corporate workers in Gulshan, BTS Army",
            "Each has internal rules but operates within broader society"
          ]
        },
        {
          title: "Argot: Subculture Language",
          content: [
            "Specialized language or vocabulary understood only by members of specific subculture",
            "Creates boundaries—tells insiders they belong, tells outsiders they're not part of group"
          ],
          examples: [
            "PC Gaming subculture: 'Ping,' 'GG,' 'Buff,' 'DPS,' 'Aggro'",
            "To outsiders it sounds like nonsense—to insiders it's communication"
          ]
        },
        {
          title: "Countercultures",
          content: [
            "Subculture that conspicuously and deliberately opposes certain aspects of larger culture",
            "Key characteristic: Active rebellion",
            "Often created by young people pushing back against establishment"
          ],
          examples: [
            "Hippie movement of 1960s—opposed war and capitalism",
            "Extreme anti-consumerism or strict minimalist movements today"
          ]
        },
        {
          title: "Culture Shock",
          content: [
            "Feeling of surprise, disorientation, uncertainty, or fear when encountering unknown cultural practices",
            "Happens on macro level (moving countries) and micro level (conservative family to liberal campus)"
          ]
        },
        {
          title: "Cultural Change",
          content: [
            "Innovation: Introducing brand-new idea or object to culture (smartphone, AI)",
            "Diffusion: Cultural item spreads from one group/society to another"
          ],
          examples: [
            "Sushi becoming popular in Dhaka restaurants",
            "K-Pop dominating global music charts"
          ]
        },
        {
          title: "High Culture vs. Popular Culture",
          content: [
            "High Culture: Cultural patterns that distinguish society's elite—classical music, fine arts, exclusive galas",
            "Popular Culture: Cultural patterns widespread among population—blockbuster movies, street food, viral trends",
            "Today, driven by internet, popular culture is the dominant force"
          ]
        },
        {
          title: "Social Media & Digital Culture",
          content: [
            "Social media is no longer just communication tool—it's an entire cultural environment",
            "Creating brand new folkways: rules about reply time, tagging etiquette, 'cancel culture'",
            "Cultural diffusion on fast-forward—trends circle globe in 24 hours via TikTok"
          ]
        },
        {
          title: "Cultural Debates in Bangladesh",
          content: [
            "Bangladesh at fascinating crossroad: rapid economic growth, urbanization, digital integration",
            "Result: Intense cultural friction between traditional values and modern global influences",
            "Sociologist's job: Not ask 'which side is right?' but 'why is this tension happening?' and 'who benefits?'"
          ]
        },
        {
          title: "Debate 1: Westernization vs. Deshi Identity",
          content: [
            "Tension from rapid diffusion of Western/Pan-Asian culture into Bangladeshi youth culture",
            "Functionalist lens: Does global integration help Bangladesh function better globally?",
            "Conflict lens: Does 'modernization' mean erasing local heritage for multinational profit?"
          ]
        },
        {
          title: "Debate 2: Digital Life vs. Traditional Norms",
          content: [
            "Tension between traditional values (family privacy, gender roles, respect for elders) and open nature of social media",
            "Generational divide over what's 'appropriate' to post online",
            "Cultural Lag: Smartphone technology leaped forward, but family norms still adjusting to borderless digital world"
          ]
        }
      ]
    },
    keyConcepts: ["Subculture", "Argot", "Counterculture", "Culture Shock", "Innovation", "Diffusion", "High Culture", "Popular Culture", "Cultural Lag", "Westernization", "Digital Culture"],
    summary: "Society is not uniform—it contains subcultures and countercultures. Culture evolves through innovation and diffusion. Popular culture and social media rapidly shift norms. Bangladesh navigates intense cultural debates from cultural lag and global diffusion."
  },
  {
    id: 9,
    title: "Socialization & Identity (Part 1)",
    subtitle: "Who Are You?",
    duration: "50 minutes",
    topics: [
      "Nature vs. nurture debate",
      "The creation of the self",
      "Cooley, Mead, and Goffman"
    ],
    content: {
      introduction: "How much of 'you' is actually you, and how much of you was put there by the society you live in? We're transitioning from looking at society out there, to looking at the self in here.",
      sections: [
        {
          title: "What is Socialization?",
          content: [
            "Lifelong process in which people learn the attitudes, values, and behaviors appropriate for members of a particular culture",
            "Key word: LIFELONG—not just for toddlers",
            "You were socialized starting school, stepping onto NSU campus, will be socialized at first job, as parent, as grandparent",
            "Provides transmission of culture to new generation, shapes self-image and personality"
          ]
        },
        {
          title: "Nature vs. Nurture Debate",
          content: [
            "Core question: Are we shaped more by biology/genetics (Nature) or social environment/upbringing (Nurture)?",
            "Modern sociology: Both play a role, but we focus heavily on 'nurture'—how social environment shapes human potential"
          ]
        },
        {
          title: "The 'Nature' Argument",
          content: [
            "Biological Determinism: Genetics and biology are primary causes of human behavior",
            "Danger: Historically used to justify inequality—claiming certain races, classes, genders are 'naturally' inferior",
            "Sociologists are highly critical of explanations relying solely on nature"
          ]
        },
        {
          title: "The 'Nurture' Argument",
          content: [
            "Social Determinism/Behaviorism: Humans born as 'blank slate' (Tabula Rasa)",
            "Society writes entire personality onto us",
            "Example: You might have genetic potential to be brilliant pianist, but without piano, teacher, and time to practice, potential is never realized"
          ]
        },
        {
          title: "Evidence for Nurture: Isolation Studies",
          content: [
            "Cases like Isabelle (1930s) and Genie (1970s)—children kept with almost zero human contact",
            "When rescued: Could not speak, had no social skills, could not walk properly or chew solid food",
            "Massive takeaway: Without social interaction, human development is severely, physically stunted",
            "We don't just learn manners from society; we literally need society to become human"
          ]
        },
        {
          title: "The Creation of the 'Self'",
          content: [
            "Self: Distinct identity that sets us apart from others—the voice in your head that says 'I am this type of person'",
            "Sociological view: Self is not static, solid thing you're born with",
            "It is fluid, moving entity constantly being created, negotiated, modified through interactions with others"
          ]
        },
        {
          title: "Charles Horton Cooley: The Looking-Glass Self",
          content: [
            "We learn who we are by interacting with others",
            "Other people act as a mirror—a looking-glass",
            "Three phases:",
            "1. Imagine how we present ourselves to others",
            "2. Imagine how others evaluate us",
            "3. Develop feeling about ourselves based on imagined evaluations"
          ],
          examples: [
            "You feel pride or shame based on what you THINK the room thinks of you"
          ]
        },
        {
          title: "Looking-Glass Self in Digital Age",
          content: [
            "Social media acts as ultimate 'looking-glass'",
            "Gives immediate, quantifiable evaluations: likes, comments, shares, views",
            "Risk: If digital mirror is toxic or promotes unrealistic standards, self-worth is damaged",
            "We hand over control of identity to an algorithm"
          ]
        },
        {
          title: "George Herbert Mead: Stages of the Self",
          content: [
            "Self emerges through process of taking on roles of others",
            "Three stages:",
            "1. Preparatory Stage: Toddlers blindly imitate without understanding why",
            "2. Play Stage: Children pretend to be other people—learning role-taking",
            "3. Game Stage: Grasp own social position AND positions of everyone else simultaneously"
          ],
          examples: [
            "Play Stage: Playing 'doctor,' 'superhero,' 'teacher'",
            "Game Stage: Playing cricket—you must know what bowler, fielder, batter are all doing"
          ]
        },
        {
          title: "Mead: The Generalized Other",
          content: [
            "Through Game Stage, child develops understanding of 'Generalized Other'",
            "Attitudes, viewpoints, and expectations of society as a whole",
            "Stop acting to please specific parents, start acting based on what 'society' expects of good citizen",
            "When you internalize the Generalized Other, your socialization is deeply rooted"
          ]
        },
        {
          title: "Erving Goffman: Presentation of Self",
          content: [
            "Dramaturgical Approach: Daily social life is like theatrical performance",
            "We are all actors on stage, putting on show for audience (rest of society)",
            "Front Stage: Behavior in public when being watched (right now—performing 'good student')",
            "Back Stage: Behavior when guard is down (at home, comfortable clothes, stop pretending)"
          ]
        },
        {
          title: "Goffman: Impression Management & Face-Work",
          content: [
            "Impression Management: Constantly altering presentation to create specific appearance for particular audience",
            "Face-Work: Efforts to maintain proper image and avoid public embarrassment",
            "When performance fails, we try to save face"
          ],
          examples: [
            "How you speak, dress, sit during job interview vs. at tea stall with friends",
            "Tripping in NSU plaza: Laugh it off, pretend you meant to jog, look angrily at ground"
          ]
        }
      ]
    },
    keyConcepts: ["Socialization", "Nature vs. Nurture", "Biological Determinism", "Tabula Rasa", "Self", "Looking-Glass Self", "Role-Taking", "Generalized Other", "Dramaturgical Approach", "Front Stage", "Back Stage", "Impression Management", "Face-Work"],
    summary: "We learn culture through lifelong Socialization. Nature matters, but society is essential—we need it to become human. Self is built by mirroring others (Cooley), role-playing (Mead), and acting on social stage (Goffman)."
  },
  {
    id: 10,
    title: "Socialization & Identity (Part 2)",
    subtitle: "Who Teaches Us the Rules?",
    duration: "50 minutes",
    topics: [
      "Agents of socialization",
      "Family, school, peers, media",
      "Life course socialization",
      "Resocialization"
    ],
    content: {
      introduction: "If our identity is built by society, we need to know exactly who is doing the building. We're looking at the specific groups, institutions, and forces that mold us from birth to old age.",
      sections: [
        {
          title: "What are 'Agents of Socialization'?",
          content: [
            "Individuals, groups, and institutions that teach us what we need to know to participate effectively in society",
            "Transmission mechanisms of culture—workers that take macro-level cultural blueprint and hammer it into micro-level individual",
            "The Big Four: Family, School, Peer Groups, Mass Media and Technology"
          ]
        },
        {
          title: "Agent 1: The Family",
          content: [
            "Universally considered primary and most important agent—gets to you first",
            "Family places you into society, gives you initial social location",
            "Social class, religion, neighborhood—all dictated by family, influence future opportunities",
            "First place we experience gender role socialization: colors of clothes, types of toys, household chore expectations"
          ]
        },
        {
          title: "Agent 2: The School",
          content: [
            "Massive shift: from personal, loving world of family to impersonal, bureaucratic institution",
            "Manifest function: Teach formal knowledge (math, reading, science)",
            "Latent function (Hidden Curriculum): Teach unwritten rules for modern workforce",
            "Punctuality, obedience to authority, sitting quietly for hours, organizing life by bell"
          ]
        },
        {
          title: "Agent 3: Peer Groups",
          content: [
            "Compete with family and school as children grow into adolescence",
            "First real escape from adult authority—exercise independence, create distinct identities",
            "Peers become 'significant others' whose opinions matter most (Mead)",
            "Introduce subcultures: specialized slang/argot, alternative trends, music, norms"
          ]
        },
        {
          title: "Agent 4: Mass Media & Technology",
          content: [
            "Most ubiquitous agent—does not require face-to-face interaction",
            "Normalizes behavior: shows what lifestyles are 'desirable,' careers are 'successful,' bodies are 'beautiful'",
            "Social media acts as digital looking-glass: immediate quantified feedback (likes, followers)",
            "Heavily shapes modern self-esteem and impression management"
          ]
        },
        {
          title: "Socialization Across the Life Course",
          content: [
            "Socialization is lifelong journey—we constantly enter new statuses requiring new learning",
            "High school student → University student → Employee → Spouse → Parent → Retiree",
            "Rites of Passage: Cultural rituals marking symbolic transition from one social position to another",
            "Graduation ceremonies, weddings—society's way of announcing status change"
          ]
        },
        {
          title: "Anticipatory Socialization",
          content: [
            "Process of socialization where person 'rehearses' for future positions, occupations, social relationships",
            "Practicing for role you don't hold yet"
          ],
          examples: [
            "High school student attending university open days",
            "Unpaid intern buying briefcase and dressing like senior managers",
            "Expectant parents reading childcare books, decorating nursery"
          ]
        },
        {
          title: "Resocialization & Total Institutions",
          content: [
            "Resocialization: Discarding former behavior patterns and accepting completely new ones as part of major life transition",
            "Highly stressful and difficult",
            "Most intense inside Total Institutions: Places regulating all aspects of life under single authority"
          ],
          examples: [
            "Total Institutions: Prisons, military boot camps, closed mental health facilities",
            "Degradation Ceremony: Humiliating ritual stripping away old identity so institution can build new compliant one",
            "New soldiers: Hair shaved off, personal clothes replaced with identical uniforms"
          ]
        }
      ]
    },
    keyConcepts: ["Agents of Socialization", "Family", "School", "Hidden Curriculum", "Peer Groups", "Mass Media", "Life Course", "Rites of Passage", "Anticipatory Socialization", "Resocialization", "Total Institutions", "Degradation Ceremony"],
    summary: "The Big Four agents—Family, School, Peers, Media—transmit culture into our minds. Socialization happens across entire Life Course. We use anticipatory socialization for future roles, sometimes undergo intense resocialization in total institutions."
  }
];

export const quiz2Questions = [
  {
    id: 1,
    question: "What is the sociological definition of culture?",
    options: [
      "Only fine arts, classical music, and literature",
      "The totality of learned, socially transmitted customs, knowledge, material objects, and behavior",
      "Biological traits inherited from parents",
      "Government laws and regulations only"
    ],
    correctAnswer: 1,
    explanation: "Culture is the totality of learned, socially transmitted customs, knowledge, material objects, and behavior. The key word is 'learned'—you are not born knowing how to speak Bengali or use a smartphone. It includes everything from traditional poetry to TikTok trends."
  },
  {
    id: 2,
    question: "What is the difference between material and non-material culture?",
    options: [
      "Material culture is expensive, non-material is free",
      "Material culture is physical objects you can touch; non-material culture is ideas, beliefs, and customs",
      "Material culture is modern, non-material is traditional",
      "There is no difference between them"
    ],
    correctAnswer: 1,
    explanation: "Material culture refers to physical objects like food, houses, and smartphones. Non-material culture refers to ideas behind the objects—customs, beliefs, philosophies, and patterns of communication."
  },
  {
    id: 3,
    question: "What is 'cultural lag'?",
    options: [
      "When people are late to cultural events",
      "When material culture evolves faster than non-material culture",
      "When older people reject new technology",
      "When cultures don't interact with each other"
    ],
    correctAnswer: 1,
    explanation: "Cultural lag is when material culture (technology) evolves faster than non-material culture (laws, etiquette, norms). Example: We have advanced smartphones, but our privacy laws and digital etiquette are still catching up."
  },
  {
    id: 4,
    question: "According to the Sapir-Whorf Hypothesis, what does language do?",
    options: [
      "Only describes reality",
      "Shapes our perception of reality",
      "Is separate from culture",
      "Is only used for communication"
    ],
    correctAnswer: 1,
    explanation: "The Sapir-Whorf Hypothesis argues that language doesn't just describe reality—it actually shapes our perception of reality. For example, languages with many words for family relationships highlight that kinship is culturally central."
  },
  {
    id: 5,
    question: "What is the difference between 'mores' and 'folkways'?",
    options: [
      "Mores are modern, folkways are traditional",
      "Mores are highly necessary norms with severe consequences; folkways are everyday etiquette with minor consequences",
      "Mores are only found in cities, folkways in villages",
      "There is no difference"
    ],
    correctAnswer: 1,
    explanation: "Mores (pronounced 'mor-ays') are norms deemed highly necessary to society's welfare—breaking them is a massive deal (like murder). Folkways govern everyday behavior—violating them makes you seem weird or rude, but you're not considered dangerous to society."
  },
  {
    id: 6,
    question: "What is a subculture?",
    options: [
      "A culture from a different country",
      "A segment of society with distinctive customs that exists within the larger dominant culture",
      "A culture that is inferior to the main culture",
      "A culture that only exists online"
    ],
    correctAnswer: 1,
    explanation: "A subculture is a segment of society that shares a distinctive pattern of customs, rules, and traditions that differs from the larger society. Examples include NSU student clubs, esports communities, and music fandoms. They exist safely within the dominant culture."
  },
  {
    id: 7,
    question: "What is 'argot'?",
    options: [
      "A type of food",
      "Specialized language understood only by members of a specific subculture",
      "A formal greeting",
      "A type of music"
    ],
    correctAnswer: 1,
    explanation: "Argot is specialized language or vocabulary understood only by members of a specific subculture. It creates boundaries—telling insiders they belong and outsiders they're not part of the group. Example: Gaming terms like 'GG,' 'Buff,' and 'DPS.'"
  },
  {
    id: 8,
    question: "What is the key difference between a subculture and a counterculture?",
    options: [
      "Countercultures are larger than subcultures",
      "Countercultures deliberately oppose aspects of the larger culture; subcultures coexist within it",
      "Countercultures only exist in Western countries",
      "There is no difference"
    ],
    correctAnswer: 1,
    explanation: "A counterculture is a subculture that conspicuously and deliberately opposes certain aspects of the larger culture. The key characteristic is active rebellion, like the hippie movement of the 1960s opposing war and capitalism."
  },
  {
    id: 9,
    question: "What are the two main processes of cultural change?",
    options: [
      "Acceptance and rejection",
      "Innovation and diffusion",
      "Tradition and modernity",
      "Local and global"
    ],
    correctAnswer: 1,
    explanation: "Innovation is introducing a brand-new idea or object to a culture (like smartphones). Diffusion is when a cultural item spreads from one group to another (like sushi becoming popular in Dhaka or K-Pop dominating global charts)."
  },
  {
    id: 10,
    question: "What is 'cultural lag' in the context of digital life in Bangladesh?",
    options: [
      "Slow internet speed",
      "Smartphone technology has advanced faster than traditional family norms can adjust",
      "Older people don't use smartphones",
      "Digital devices are too expensive"
    ],
    correctAnswer: 1,
    explanation: "In Bangladesh, cultural lag manifests as smartphone technology and internet access leaping forward, while traditional family norms and cultural expectations struggle to adjust to a borderless digital world. This creates tension between traditional values and digital behavior."
  },
  {
    id: 11,
    question: "What is socialization?",
    options: [
      "Making friends at parties",
      "The lifelong process of learning attitudes, values, and behaviors appropriate for a culture",
      "Only happens during childhood",
      "Learning academic subjects in school"
    ],
    correctAnswer: 1,
    explanation: "Socialization is the lifelong process in which people learn the attitudes, values, and behaviors appropriate for members of a particular culture. It never stops—you're socialized at university, at your first job, as a parent, and as a grandparent."
  },
  {
    id: 12,
    question: "In the Nature vs. Nurture debate, what do sociologists emphasize?",
    options: [
      "Only nature (biology) matters",
      "Only nurture (environment) matters",
      "Both play a role, but sociologists focus heavily on how social environment shapes human potential",
      "Neither nature nor nurture matters"
    ],
    correctAnswer: 2,
    explanation: "Modern sociology recognizes both nature and nurture play a role. However, sociologists focus heavily on the 'nurture' side—specifically how our social environment shapes, unleashes, or limits our human potential."
  },
  {
    id: 13,
    question: "What evidence do we have that nurture is essential for human development?",
    options: [
      "Studies of children raised in isolation",
      "Comparing siblings",
      "Looking at animal behavior",
      "There is no evidence"
    ],
    correctAnswer: 0,
    explanation: "Isolation studies of children like Isabelle and Genie, who were kept with almost zero human contact, showed that without social interaction, human development is severely stunted. They couldn't speak, walk properly, or chew solid food when rescued."
  },
  {
    id: 14,
    question: "According to Charles Horton Cooley's 'Looking-Glass Self,' how do we develop our self-concept?",
    options: [
      "By looking in actual mirrors",
      "By imagining how others perceive and evaluate us",
      "By reading books about ourselves",
      "Through genetic inheritance"
    ],
    correctAnswer: 1,
    explanation: "Cooley's Looking-Glass Self theory states we learn who we are by imagining how we present ourselves to others, imagining how others evaluate us, and then developing feelings about ourselves based on those imagined evaluations."
  },
  {
    id: 15,
    question: "How does social media act as a 'looking-glass' in the digital age?",
    options: [
      "It shows our physical reflection",
      "It provides immediate, quantifiable evaluations through likes, comments, and followers",
      "It only shows positive feedback",
      "It has no effect on self-concept"
    ],
    correctAnswer: 1,
    explanation: "Social media acts as the ultimate looking-glass by giving immediate, quantifiable evaluations through likes, comments, shares, and views. The risk is that if this digital mirror promotes toxic or unrealistic standards, our self-worth becomes damaged."
  },
  {
    id: 16,
    question: "According to George Herbert Mead, what are the three stages of self-development?",
    options: [
      "Baby, child, adult",
      "Preparatory, Play, and Game stages",
      "Learning, practicing, mastering",
      "Individual, social, cultural"
    ],
    correctAnswer: 1,
    explanation: "Mead identified three stages: 1) Preparatory Stage—toddlers blindly imitate; 2) Play Stage—children pretend to be others (role-taking); 3) Game Stage—understanding multiple roles simultaneously and developing the 'Generalized Other.'"
  },
  {
    id: 17,
    question: "What is the 'Generalized Other' according to Mead?",
    options: [
      "A specific person we admire",
      "The attitudes, viewpoints, and expectations of society as a whole",
      "A psychological disorder",
      "Our biological instincts"
    ],
    correctAnswer: 1,
    explanation: "The Generalized Other is the attitudes, viewpoints, and expectations of society as a whole. When internalized, we stop acting just to please specific parents and start acting based on what 'society' expects of a good citizen."
  },
  {
    id: 18,
    question: "According to Erving Goffman's dramaturgical approach, what is the difference between 'front stage' and 'back stage'?",
    options: [
      "Front stage is for actors, back stage is for audience",
      "Front stage is public behavior when being watched; back stage is private behavior when guard is down",
      "Front stage is for work, back stage is for home",
      "There is no difference"
    ],
    correctAnswer: 1,
    explanation: "Goffman compared social life to theater. Front Stage is how we behave in public when being watched (performing 'good student'). Back Stage is how we behave when we let our guard down (at home in comfortable clothes, stop pretending)."
  },
  {
    id: 19,
    question: "Which of the following is NOT one of the 'Big Four' agents of socialization?",
    options: [
      "Family",
      "School",
      "Religion",
      "Peer Groups"
    ],
    correctAnswer: 2,
    explanation: "The 'Big Four' agents of socialization are: Family, School, Peer Groups, and Mass Media/Technology. While religion can be an agent of socialization, it's not considered one of the primary four in standard sociological framework."
  },
  {
    id: 20,
    question: "What is the 'Hidden Curriculum' in schools?",
    options: [
      "Secret classes after school",
      "The unintended lessons about obedience, punctuality, and conformity to authority",
      "Only teaching math and science",
      "Hidden textbooks"
    ],
    correctAnswer: 1,
    explanation: "The Hidden Curriculum refers to the latent (unintended) function of schools—teaching unwritten rules for the modern workforce like punctuality, obedience to authority, sitting quietly for hours, and organizing life by the bell."
  },
  {
    id: 21,
    question: "Why are peer groups significant during adolescence?",
    options: [
      "They replace family completely",
      "They allow first escape from adult authority and help create distinct identities",
      "They only influence clothing choices",
      "They have no real influence"
    ],
    correctAnswer: 1,
    explanation: "Peer groups represent a young person's first real escape from adult authority. They allow individuals to exercise independence and start creating their own distinct identities. Peers become 'significant others' whose opinions matter most."
  },
  {
    id: 22,
    question: "How does mass media function as an agent of socialization?",
    options: [
      "It only provides entertainment",
      "It normalizes behavior and shows what lifestyles are 'desirable' without requiring face-to-face interaction",
      "It has no effect on identity",
      "It only affects adults"
    ],
    correctAnswer: 1,
    explanation: "Mass media is unique because it doesn't require face-to-face interaction. It normalizes behavior, shows what lifestyles are 'desirable,' what careers are 'successful,' and what bodies are 'beautiful.' Social media acts as a digital looking-glass with quantified feedback."
  },
  {
    id: 23,
    question: "What is anticipatory socialization?",
    options: [
      "Socialization that happens before birth",
      "Rehearsing for future positions, occupations, and social relationships",
      "Going back to childhood behaviors",
      "Avoiding social situations"
    ],
    correctAnswer: 1,
    explanation: "Anticipatory socialization is the process where a person 'rehearses' for future positions. Examples include high school students attending university open days, interns dressing like managers they hope to become, or expectant parents reading childcare books."
  },
  {
    id: 24,
    question: "What is a 'total institution' according to Goffman?",
    options: [
      "A large university",
      "A place that regulates all aspects of a person's life under single authority",
      "A shopping mall",
      "A public park"
    ],
    correctAnswer: 1,
    explanation: "A total institution is a place that regulates absolutely all aspects of a person's life under a single, centralized authority. Examples include prisons, military boot camps, and closed mental health facilities. They often use 'degradation ceremonies' to strip old identity."
  },
  {
    id: 25,
    question: "What is resocialization?",
    options: [
      "Going back to school",
      "Discarding former behavior patterns and accepting completely new ones as part of a major life transition",
      "Making new friends",
      "Learning a new language"
    ],
    correctAnswer: 1,
    explanation: "Resocialization is the process of discarding former behavior patterns and accepting completely new ones as part of a major life transition. It's usually highly stressful and most intense inside total institutions like prisons or military boot camps."
  }
];

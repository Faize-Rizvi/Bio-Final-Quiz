const questionElement = document.getElementById('question');
 const optionsElement = document.getElementById('options');
const submitBtn = document.getElementById('submitBtn');
const scoreElement = document.getElementById('score');

const questions = [
    {
        question: "Which scientists observed cells for the first time, leading to the conclusion that all living things are made of cells?",
        options: ["Newton and Galileo", "Hooke and van Leeuwenhoek", "Darwin and Mendel", "Einstein and Tesla"],
        correctAnswer: "Hooke and van Leeuwenhoek"
      },
      {
        question: "1. Which of the following statements is part of the cell theory?",
        options: [
          "Cells are not the basic units of life.",
          "All cells come from non-living matter.",
          "All living things are made of cells.",
          "Cells can arise from pre-existing cells."
        ],
        correctAnswer: "All living things are made of cells."
      },
      {
        question: "2. What is the concept that living organisms can arise from non-living matter called?",
        options: ["Biogenesis", "Pinocytosis", "Abiogenesis", "Endosymbiosis"],
        correctAnswer: "Abiogenesis"
      },
      {
        question: "3. What part of the microscope is responsible for magnifying the specimen?",
        options: ["Eyepiece", "Stage", "Objective lenses", "Light source"],
        correctAnswer: "Objective lenses"
      },
      {
        question: "4. How do you calculate the magnification of an object under a microscope?",
        options: [
          "Magnification = magnification of the eyepiece lens - magnification of the objective lens.",
          "Magnification = magnification of the eyepiece lens ÷ magnification of the objective lens.",
          "Magnification = magnification of the eyepiece lens × magnification of the objective lens.",
          "Magnification = magnification of the eyepiece lens + magnification of the objective lens."
        ],
        correctAnswer: "Magnification = magnification of the eyepiece lens × magnification of the objective lens."
      },
      {
        question: "5. What organelle is responsible for making energy in the cell?",
        options: ["Nucleus", "Mitochondria", "Chloroplasts", "Golgi apparatus"],
        correctAnswer: "Mitochondria"
      },
      {
        question: "6. What is the main function of chloroplasts?",
        options: [
          "Synthesizing proteins",
          "Making energy",
          "Storing genetic information",
          "Conducting photosynthesis"
        ],
        correctAnswer: "Conducting photosynthesis"
      },
      {
        question: "Which of the following is NOT found in plant cells?",
        options: ["Cell wall", "Mitochondria", "Chloroplasts", "Centrioles"],
        correctAnswer: "Centrioles"
      },
      {
        question: "What is the function of the cell membrane?",
        options: [
          "To provide structural support to the cell",
          "To control what enters and exits the cell",
          "To produce energy for the cell",
          "To store genetic information"
        ],
        correctAnswer: "To control what enters and exits the cell"
      },
      {
        question: "What process allows substances to move across a semi-permeable membrane without requiring energy?",
        options: ["Active transport", "Passive Transport", "Endocytosis", "Exocytosis"],
        correctAnswer: "Passive Transport"
      },
      {
        question: "What is the role of the cell wall in plant cells?",
        options: ["To control what enters and exits the cell", "To provide structural support", "To produce energy", "To store genetic information"],
        correctAnswer: "To provide structural support"
      },
      {
        question: "What is the function of the vacuole in plant cells?",
        options: ["Synthesizing proteins", "Storing water and nutrients", "Breaking down waste", "Producing energy"],
        correctAnswer: "Storing water and nutrients"
      },
      {
        question: "Which of the following is NOT a function of the cytoskeleton?",
        options: ["Maintaining cell shape", "Facilitating cell movement", "Transporting materials within the cell", "Storing genetic information"],
        correctAnswer: "Storing genetic information"
      },
      {
        question: "What is the process by which cells engulf large particles or fluids?",
        options: ["Diffusion", "Osmosis", "Endocytosis", "Exocytosis"],
        correctAnswer: "Endocytosis"
      },
      {
        question: "Which of the following is a function of the mitochondria?",
        options: ["Photosynthesis", "Respiration", "Digestion", "Synthesizing proteins"],
        correctAnswer: "Respiration"
      },
      {
        question: "Describe the differences between plant and animal cells.",
        options: [
          "Plant cells have cell walls, while animal cells do not.",
          "Animal cells have cell walls, while plant cells do not.",
          "Plant cells have Lysosomes, while animal cells do not.",
          "Animal cells have chloroplasts, while plant cells do not."
        ],
        correctAnswer: "Plant cells have cell walls, while animal cells do not.", 
      },
      {
        question: "Describe the structure of a cell membrane and identify its components.",
        options: [
          "The cell membrane is made of phospholipid bilayers and proteins.",
          "The cell membrane is made of DNA and RNA.",
          "The cell membrane is made of carbohydrates and lipids.",
          "The cell membrane is made of amino acids and sugars."
        ],
        correctAnswer: "The cell membrane is made of phospholipid bilayers and proteins."
      },
      {
        question: "Explain the Fluid-Mosaic Model.",
        options: [
          "The Fluid-Mosaic Model describes the cell membrane as a rigid structure.",
          "The Fluid-Mosaic Model describes the cell membrane as a fluid structure with proteins floating in the lipid bilayer.",
          "The Fluid-Mosaic Model describes the cell membrane as a mosaic of carbohydrates.",
          "The Fluid-Mosaic Model describes the cell membrane as a solid structure."
        ],
        correctAnswer: "The Fluid-Mosaic Model describes the cell membrane as a fluid structure with proteins floating in the lipid bilayer."
      },
      {
        question: "Describe how a semi-permeable membrane works.",
        options: [
          "A semi-permeable membrane allows all substances to pass through.",
          "A semi-permeable membrane allows only certain substances to pass through.",
          "A semi-permeable membrane prevents all substances from passing through.",
          "A semi-permeable membrane allows only large substances to pass through."
        ],
        correctAnswer: "A semi-permeable membrane allows only certain substances to pass through."
      },
      {
        question: "Describe the roles of membrane proteins.",
        options: [
          "Membrane proteins provide structural support to the cell membrane.",
          "Membrane proteins transport substances across the cell membrane.",
          "Membrane proteins store genetic information.",
          "Membrane proteins produce energy for the cell."
        ],
        correctAnswer: "Membrane proteins transport substances across the cell membrane."
      },
      {
        question: "Explain the processes of passive transport such as osmosis and diffusion and predict how substances will move in a given situation.",
        options: [
          "Passive transport requires energy.",
          "Osmosis is the movement of water from a high concentration to a low concentration.",
          "Diffusion is the movement of substances from a low concentration to a high concentration.",
          "Substances always move against the concentration gradient in passive transport."
        ],
        correctAnswer: "Osmosis is the movement of water from a high concentration to a low concentration."
      },
      {
        question: "Explain the process of active transport and how materials are moved against the concentration gradient.",
        options: [
          "Active transport does not require energy.",
          "Materials move down the concentration gradient in active transport.",
          "Active transport uses energy to move materials against the concentration gradient.",
          "Active transport only occurs in plant cells."
        ],
        correctAnswer: "Active transport uses energy to move materials against the concentration gradient."
      },
      {
        question: "Describe the processes of endocytosis and exocytosis.",
        options: [
          "Endocytosis is the process of exporting materials out of the cell.",
          "Exocytosis is the process of importing materials into the cell.",
          "Endocytosis is the process of engulfing materials into the cell.",
          "Exocytosis is the process of breaking down materials in the cell."
        ],
        correctAnswer: "Endocytosis is the process of engulfing materials into the cell."
      },
      {
        question: "Explain how cell shape affects surface-area to volume ratio and be able to calculate surface-area to volume ratio based on provided dimensions.",
        options: [
          "Cells with a smaller surface-area to volume ratio are more efficient in exchanging materials with the environment.",
          "Cell shape does not affect surface-area to volume ratio.",
          "Cells with a larger surface-area to volume ratio are less efficient in exchanging materials with the environment.",
          "Surface-area to volume ratio is only important in plant cells."
        ],
        correctAnswer: "Cells with a smaller surface-area to volume ratio are more efficient in exchanging materials with the environment."
      },
      {
        question: "Explain the advantages and disadvantages of multicellularity vs. single-cells.",
        options: [
          "Multicellular organisms have lower specialization compared to single-celled organisms.",
          "Single-celled organisms have limited ability to adapt to changing environments.",
          "Multicellular organisms have higher reproductive rates compared to single-celled organisms.",
          "Single-celled organisms have lower metabolic efficiency compared to multicellular organisms."
        ],
        correctAnswer: "Single-celled organisms have limited ability to adapt to changing environments."
      },
      {
        question: "Identify the specialized cells and tissues in a leaf.",
        options: [
          "Xylem and phloem",
          "Epidermal cells and guard cells",
          "Stomata and mesophyll cells",
          "Pollen grains and ovules"
        ],
        correctAnswer: "Stomata and mesophyll cells"
      },
      {
        question: "Define tissue, organ, and system.",
        options: [
          "Tissue is a group of organs working together, while an organ is a group of tissues working together, and a system is a group of cells working together.",
          "Tissue is a group of cells working together, while an organ is a group of tissues working together, and a system is a group of organs working together.",
          "Tissue is a group of cells working together, while an organ is a group of organs working together, and a system is a group of tissues working together.",
          "Tissue is a group of organs working together, while an organ is a group of cells working together, and a system is a group of tissues working together."
        ],
        correctAnswer: "Tissue is a group of cells working together, while an organ is a group of tissues working together, and a system is a group of organs working together."
      },
      {
        question: "Define and explain the process of transpiration in plants.",
        options: [
          "Transpiration is the process of water moving from the soil into the roots of plants.",
          "Transpiration is the process of water moving from the roots to the leaves of plants.",
          "Transpiration is the process of water vapor escaping from the leaves of plants.",
          "Transpiration is the process of sugar transport in plants."
        ],
        correctAnswer: "Transpiration is the process of water vapor escaping from the leaves of plants."
      },
      {
        question: "Explain why plants always lose some water during transpiration.",
        options: [
          "Plants lose water during transpiration because they absorb too much water from the soil.",
          "Plants lose water during transpiration because they release excess water through their stomata to maintain turgor pressure.",
          "Plants lose water during transpiration because they do not have mechanisms to prevent water loss.",
          "Plants lose water during transpiration because they convert water into sugars during photosynthesis."
        ],
        correctAnswer: "Plants lose water during transpiration because they release excess water through their stomata to maintain turgor pressure."
      },
      {
        question: "Explain how guard cells, plant structure, and water transport work to control turgor pressure in plants.",
        options: [
          "Guard cells regulate water uptake in plants by opening and closing stomata.",
          "Plant structure, such as the cell wall, provides support for maintaining turgor pressure.",
          "Water transport from the roots to the leaves helps maintain turgor pressure.",
          "All of the above"
        ],
        correctAnswer: "All of the above"
      },
      {
        question: "Explain how water moves from the soil into the roots of plants.",
        options: [
          "Water moves into the roots of plants through active transport.",
          "Water moves into the roots of plants through osmosis.",
          "Water moves into the roots of plants through capillary action.",
          "Water moves into the roots of plants through transpiration."
        ],
        correctAnswer: "Water moves into the roots of plants through osmosis."
      },
      {
        question: "Describe the structure and function of xylem and phloem.",
        options: [
          "Xylem transports water and minerals from the roots to the leaves, while phloem transports sugars from the leaves to other parts of the plant.",
          "Xylem transports sugars from the leaves to other parts of the plant, while phloem transports water and minerals from the roots to the leaves.",
          "Xylem and phloem both transport water and minerals from the roots to the leaves.",
          "Xylem and phloem both transport sugars from the leaves to other parts of the plant."
        ],
        correctAnswer: "Xylem transports water and minerals from the roots to the leaves, while phloem transports sugars from the leaves to other parts of the plant."
      },
      {
        question: "Explain how water moves up to the leaves of a plant.",
        options: [
          "Water moves up to the leaves of a plant through active transport.",
          "Water moves up to the leaves of a plant through osmosis.",
          "Water moves up to the leaves of a plant through capillary action.",
          "Water moves up to the leaves of a plant through transpiration."
        ],
        correctAnswer: "Water moves up to the leaves of a plant through capillary action."
      },
      {
        question: "Explain how the properties of water allow for water transport up plants (cohesion and adhesion).",
        options: [
          "Water transport in plants is facilitated by the cohesive and adhesive properties of water molecules.",
          "Water transport in plants relies solely on the cohesive properties of water molecules.",
          "Water transport in plants relies solely on the adhesive properties of water molecules.",
          "Water transport in plants is not influenced by the properties of water."
        ],
        correctAnswer: "Water transport in plants is facilitated by the cohesive and adhesive properties of water molecules."
      },
      {
        question: "Explain how sugar transport works in plants.",
        options: [
          "Sugar transport in plants occurs through passive diffusion.",
          "Sugar transport in plants occurs through active transport.",
          "Sugar transport in plants occurs through osmosis.",
          "Sugar transport in plants occurs through transpiration."
        ],
        correctAnswer: "Sugar transport in plants occurs through active transport."
      },
      {
        question: "Explain how plant tropisms work to ensure the plants grow in the proper directions and that they are able to respond to environmental cues.",
        options: [
          "Plant tropisms are controlled by genetic factors and do not respond to environmental cues.",
          "Plant tropisms are growth responses that enable plants to adjust their growth in response to environmental stimuli.",
          "Plant tropisms only occur in response to light stimuli.",
          "Plant tropisms are random growth patterns and do not serve any purpose."
        ],
        correctAnswer: "Plant tropisms are growth responses that enable plants to adjust their growth in response to environmental stimuli."
      },
      {
        question: "Explain the experiments used to prove that plant tropisms and auxins are involved in plant growth.",
        options: [
          "Experiments involving the removal of plant hormones such as auxins showed no effect on plant growth.",
          "Experiments involving the removal of plant hormones such as auxins resulted in abnormal plant growth.",
          "Experiments involving the removal of plant hormones such as auxins resulted in enhanced plant growth.",
          "Experiments involving the removal of plant hormones such as auxins resulted in no plant growth."
        ],
        correctAnswer: "Experiments involving the removal of plant hormones such as auxins resulted in abnormal plant growth."
      },
      {
        question: "Identify the organelle responsible for controlling what enters and exits the cell.",
        options: ["Nucleus", "Mitochondria", "Cell membrane", "Golgi apparatus"],
        correctAnswer: "Cell membrane"
      },
      {
        question: "What organelle is responsible for protein synthesis in the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic reticulum"],
        correctAnswer: "Ribosome"
      },
      {
        question: "Which organelle is the site of photosynthesis in plant cells?",
        options: ["Nucleus", "Mitochondria", "Chloroplast", "Vacuole"],
        correctAnswer: "Chloroplast"
      },
      {
        question: "What is the function of the nucleus in the cell?",
        options: ["Stores genetic information", "Produces energy", "Synthesizes proteins", "Breaks down waste"],
        correctAnswer: "Stores genetic information"
      },
      {
        question: "Which organelle is known as the 'powerhouse' of the cell?",
        options: ["Nucleus", "Mitochondria", "Chloroplast", "Endoplasmic reticulum"],
        correctAnswer: "Mitochondria"
      },
      {
        question: "What is the function of the Golgi apparatus?",
        options: ["Breaks down waste", "Produces energy", "Modifies and packages proteins", "Stores genetic information"],
        correctAnswer: "Modifies and packages proteins"
      },
      {
        question: "Which organelle contains digestive enzymes for breaking down waste materials?",
        options: ["Nucleus", "Mitochondria", "Chloroplast", "Lysosome"],
        correctAnswer: "Lysosome"
      },
      {
        question: "What is the function of the endoplasmic reticulum?",
        options: ["Breaks down waste", "Produces energy", "Synthesizes lipids and proteins", "Stores genetic information"],
        correctAnswer: "Synthesizes lipids and proteins"
      },
      {
        question: "Which organelle is responsible for detoxifying harmful substances in the cell?",
        options: ["Nucleus", "Mitochondria", "Chloroplast", "Smooth endoplasmic reticulum"],
        correctAnswer: "Smooth endoplasmic reticulum"
      },
      {
        question: "What is the function of the cell wall in plant cells?",
        options: ["Provides structural support", "Stores genetic information", "Synthesizes proteins", "Produces energy"],
        correctAnswer: "Provides structural support"
      },
      {
        question: "Which organelle is responsible for regulating water balance in plant cells?",
        options: ["Nucleus", "Mitochondria", "Chloroplast", "Vacuole"],
        correctAnswer: "Vacuole"
      },
      {
        question: "What is the function of the cytoskeleton in the cell?",
        options: ["Maintains cell shape", "Synthesizes proteins", "Stores genetic information", "Produces energy"],
        correctAnswer: "Maintains cell shape"
      },
      {
        question: "Identify the plasma membrane component that acts as a barrier to hydrophilic molecules.",
        options: ["Phospholipid bilayer", "Cholesterol", "Integral membrane proteins", "Peripheral membrane proteins"],
        correctAnswer: "Phospholipid bilayer"
      },
      {
        question: "What is the function of cholesterol in the plasma membrane?",
        options: ["Provides structural support", "Facilitates cell-cell recognition", "Facilitates transport of substances", "Regulates fluidity of the membrane"],
        correctAnswer: "Regulates fluidity of the membrane"
      },
      {
        question: "Which type of membrane protein spans the entire lipid bilayer and facilitates the transport of substances across the membrane?",
        options: ["Integral membrane proteins", "Peripheral membrane proteins", "Glycoproteins", "Glycolipids"],
        correctAnswer: "Integral membrane proteins"
      },
      {
        question: "What is the function of glycoproteins in the plasma membrane?",
        options: ["Cell-cell recognition", "Facilitates transport of substances", "Provides structural support", "Regulates fluidity of the membrane"],
        correctAnswer: "Cell-cell recognition"
      },
      {
        question: "Identify the plasma membrane component that helps anchor membrane proteins to the cytoskeleton.",
        options: ["Integral membrane proteins", "Peripheral membrane proteins", "Glycoproteins", "Glycolipids"],
        correctAnswer: "Peripheral membrane proteins"
      },
      {
        question: "Which plasma membrane component plays a role in cell signaling and communication?",
        options: ["Phospholipid bilayer", "Cholesterol", "Integral membrane proteins", "Peripheral membrane proteins"],
        correctAnswer: "Integral membrane proteins"
      },
      {
        question: "What is the function of glycolipids in the plasma membrane?",
        options: ["Facilitates transport of substances", "Provides structural support", "Cell-cell recognition", "Regulates fluidity of the membrane"],
        correctAnswer: "Cell-cell recognition"
      },
      {
        question: "Identify the plasma membrane component that helps stabilize the membrane structure.",
        options: ["Phospholipid bilayer", "Cholesterol", "Integral membrane proteins", "Peripheral membrane proteins"],
        correctAnswer: "Cholesterol"
      },
      {
        question: "Which organelle is responsible for sorting and modifying proteins in the cell?",
        options: ["Nucleus", "Mitochondria", "Chloroplast", "Golgi apparatus"],
        correctAnswer: "Golgi apparatus"
      },
      {
        question: "What is the function of peroxisomes in the cell?",
        options: ["Produces energy", "Detoxifies harmful substances", "Synthesizes lipids and proteins", "Stores genetic information"],
        correctAnswer: "Detoxifies harmful substances"
      },
      {
        question: "Which organelle contains the cell's genetic material and controls cellular activities?",
        options: ["Nucleus", "Mitochondria", "Chloroplast", "Endoplasmic reticulum"],
        correctAnswer: "Nucleus"
      },
      {
        question: "What is the function of the nucleolus?",
        options: ["Stores genetic information", "Produces energy", "Synthesizes proteins", "Produces ribosomes"],
        correctAnswer: "Produces ribosomes"
      },
      {
        question: "Which organelle is responsible for breaking down worn-out organelles and cellular debris?",
        options: ["Nucleus", "Mitochondria", "Lysosome", "Endoplasmic reticulum"],
        correctAnswer: "Lysosome"
      },
      {
        question: "How do plants transport water from the roots to the leaves?",
        options: ["Through xylem vessels", "Through phloem vessels", "Through stomata", "Through cell walls"],
        correctAnswer: "Through xylem vessels"
      },
      {
        question: "What is the process by which water vapor exits plant leaves into the atmosphere?",
        options: ["Photosynthesis", "Respiration", "Transpiration", "Evaporation"],
        correctAnswer: "Transpiration"
      },
      {
        question: "Which structure in plant leaves is responsible for gas exchange?",
        options: ["Xylem", "Phloem", "Stomata", "Guard cells"],
        correctAnswer: "Stomata"
      },
      {
        question: "What is the primary gas exchanged through stomata during photosynthesis?",
        options: ["Carbon dioxide (CO2)", "Oxygen (O2)", "Nitrogen (N2)", "Methane (CH4)"],
        correctAnswer: "Carbon dioxide (CO2)"
      },
      {
        question: "What is the main sugar produced during photosynthesis and transported through the phloem?",
        options: ["Fructose", "Glucose", "Sucrose", "Lactose"],
        correctAnswer: "Sucrose"
      },
      {
        question: "Which cells control the opening and closing of stomata?",
        options: ["Xylem cells", "Phloem cells", "Guard cells", "Parenchyma cells"],
        correctAnswer: "Guard cells"
      },
      // More questions...
    ];
        
      
      
     
      
  
  
  let currentQuestion = 0;
  let score = 0;
  
  function displayEndingScreen() {
    const totalQuestions = questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    document.getElementById('question').style.display = 'none';
    document.getElementById('options').style.display = 'none';
    document.getElementById('submitBtn').style.display = 'none';
    document.getElementById('score').style.display = 'none';
    document.getElementById('ending-screen').style.display = 'block';
    document.getElementById('total-score').textContent = score;
    document.getElementById('total-questions').textContent = totalQuestions;
    document.getElementById('percentage').textContent = percentage;
  }
  function displayQuestion() {
    const currentQuestionData = questions[currentQuestion];
    questionElement.textContent = currentQuestionData.question;
    
    optionsElement.innerHTML = '';
    currentQuestionData.options.forEach(option => {
      const optionElement = document.createElement('div');
      optionElement.textContent = option;
      optionElement.classList.add('option');
      optionElement.addEventListener('click', () => selectOption(option));
      optionsElement.appendChild(optionElement);
    });
  }
  
  function selectOption(selectedOption) {
    const currentQuestionData = questions[currentQuestion];
    if (selectedOption === currentQuestionData.correctAnswer) {
      score++;
    } else {
      score--;
    }
    scoreElement.textContent = `Score: ${score}`;
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      alert(`Quiz finished! Your final score is: ${score}`);
    }
  }
  
  submitBtn.addEventListener('click', nextQuestion);
  
  // Display the first question when the page loads
  displayQuestion();

function displayQuestion() {
  const currentQuestionData = questions[currentQuestion];
  questionElement.textContent = currentQuestionData.question;
  
  optionsElement.innerHTML = '';
  currentQuestionData.options.forEach(option => {
    const optionButton = document.createElement('button');
    optionButton.textContent = option;
    optionButton.classList.add('option');
    optionButton.addEventListener('click', () => selectOption(option));
    optionsElement.appendChild(optionButton);
  });
}

function selectOption(selectedOption) {
  const currentQuestionData = questions[currentQuestion];
  if (selectedOption === currentQuestionData.correctAnswer) {
    score++;
  } else {
    score--;
  }
  scoreElement.textContent = `Score: ${score}`;
}

// Continue with the rest of the code...
function selectOption(selectedOption) {
    const currentQuestionData = questions[currentQuestion];
    if (selectedOption === currentQuestionData.correctAnswer) {
      score++;
    } else {
      score--;
      // Move to the next question
      nextQuestion();
      return; // Exit the function early to prevent further execution
    }
    scoreElement.textContent = `Score: ${score}`;
  }
  function selectOption(selectedOption) {
    const currentQuestionData = questions[currentQuestion];
    if (selectedOption === currentQuestionData.correctAnswer) {
      score++;
    } else {
      score--;
    }
    scoreElement.textContent = `Score: ${score}`;
    
    // Move to the next question
    nextQuestion();
  }
    // Add this event listener to your existing code
const optionsContainer = document.getElementById('options');
optionsContainer.addEventListener('click', () => {
  const currentQuestionData = questions[currentQuestion];
  const correctAnswer = currentQuestionData.correctAnswer;

  const selectedOption = event.target.textContent;

  if (selectedOption === correctAnswer) {
    // If the selected option is correct, continue to the next question
    score++;
    currentQuestion++;
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      showEndingScreen();
    }
  } else {
    // If the selected option is incorrect, display the correct answer
    const options = optionsContainer.querySelectorAll('.option');
    options.forEach(option => {
      option.classList.remove('correct-answer'); // Remove the 'correct-answer' class from all options
      if (option.textContent === correctAnswer) {
        option.classList.add('correct-answer'); // Add the 'correct-answer' class to the correct option
      }
    });
  }
});
function showEndingScreen() {
    const finalScoreElement = document.getElementById('final-score');
    const percentageElement = document.getElementById('percentage');
    
    // Calculate percentage score
    const percentage = Math.round((score / questions.length) * 100);
    
    // Display final score and percentage
    finalScoreElement.textContent = score + '/' + questions.length;
    percentageElement.textContent = percentage;
  
    // Show ending screen
    const endingScreen = document.getElementById('ending-screen');
    endingScreen.style.display = 'block';
  }
  

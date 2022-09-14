const generateReadMe = (answers) => {
    return `
        <h1>#${answers.title}<h1>

        # Table of Contents
        - Description
        - Installation
        - Usage
        - Contribution
        - Testing
        - GitHub


        # Description: ${answers.description}


        # Installation Instructions: ${answers.install}


        # Usage: ${answers.usage}

        
        # Contributions: ${answers.contributors}


        # Testing: ${answers.tests}

        # Github: https://github.com/${answers.github}
        `;

        
};

module.exports = generateReadMe;
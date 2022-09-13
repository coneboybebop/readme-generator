const generateReadMe = (answers) => {
    return `
        <h1>#${answers.title}<h1>

        # Table of Contents
        - Description
        - Installation
        - Usage
        - Contribution
        - Testing


        # Description: ${answers.description}


        # Installation Instructions: ${answers.installation}


        # Usage: ${answers.usage}

        
        # Contributions: ${answers.contributors}


        # Testing: ${answers.tests}
        `;

        
}

module.exports = generateReadMe;
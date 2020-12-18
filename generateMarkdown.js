// function to generate markdown for README. This will call the data (see line 3) and then in script.js I will call generateMarkdown. Will also do writetofile in here
function generateMarkdown(data) {
  return `# ${data.proj_name}
          # ${data.proj_description}
          # ${data.proj_install}
          # ${data.proj_information}
          # ${data.proj_contribution}
          # ${data.proj_test_instructions}
          # ${data.proj_licensing}
          # ${data.proj_confirm} 
  `;

}

module.exports = generateMarkdown;

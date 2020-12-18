// function to generate markdown for README. This will call the data (see line 3) and then in script.js I will call generateMarkdown. Will also do writetofile in here
function generateMarkdown(data) {
  return `# ${data.proj_name}


     \n ## Table of Contents 
\n-[Description](#Description)
\n-[Installation](##Installation)
\n-[Information](##Information)
\n-[Contribute](##Contribute)
\n-[Testing](##Testing)
\n-[Contribute](##Contribute)
\n-[Licensing](###Licensing)
         
    \n ## Description:
    \n${data.proj_description}

    \n ## Installation      
    \n ${data.proj_install}

    \n ## Information
    \n ${data.proj_information}
          
    \n ## Contribute
    \n ${data.proj_contribution}
    
   \n ## Testing
    \n ${data.proj_test_instructions}
    
   \n ## Licensing
    \n ${data.proj_licensing}
    
   \n ## Confirmation
    \n ${data.proj_confirm} 
  `;

}

module.exports = generateMarkdown;

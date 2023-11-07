const generatePassword = () => {
    const length = prompt("Enter the password length (8-128 characters):");
  
    if (length === null) {
        return; // User canceled the prompt
    }
//   lines 8/13 are what limits the length of the password from 8 to 128 i believe 
    const passwordLength = parseInt(length, 10);
  
    if (!Number.isInteger(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert("Please enter a valid password length between 8 and 128 characters.");
        return;
    }
//   these are the questions asked 
    const useLowerCase = confirm("Include lowercase characters?");
    const useUpperCase = confirm("Include uppercase characters?");
    const useNumeric = confirm("Include numeric characters?");
    const useSpecial = confirm("Include special characters?");
  
    if (!useLowerCase && !useUpperCase && !useNumeric && !useSpecial) {
        alert("At least one character type must be selected.");
        return;
    }
//   the charecter pool that the random gen will pick from 
    const characterPool = (
        (useLowerCase ? "abcdefghijklmnopqrstuvwxyz" : "") +
        (useUpperCase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "") +
        (useNumeric ? "0123456789" : "") +
        (useSpecial ? "!@#$%^&*()_+-=[]{}|;:,.<>?" : "")
    );
//   this was one of the hard parts for me I had to look it up many times 
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool.charAt(randomIndex);
    }
//   This code will be the final message with the randomized password 
    alert("Your generated password: " + password);
  };
  
  const generatePasswordButton = document.getElementById("generate");
  generatePasswordButton.addEventListener("click", generatePassword);
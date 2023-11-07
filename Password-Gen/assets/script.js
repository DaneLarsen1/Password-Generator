const generatePassword = () => {
    const length = prompt("Enter the password length (8-128 characters):");
  
    if (length === null) {
        return; // User canceled the prompt
    }
  
    const passwordLength = parseInt(length, 10);
  
    if (!Number.isInteger(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert("Please enter a valid password length between 8 and 128 characters.");
        return;
    }
  
    const useLowerCase = confirm("Include lowercase characters?");
    const useUpperCase = confirm("Include uppercase characters?");
    const useNumeric = confirm("Include numeric characters?");
    const useSpecial = confirm("Include special characters?");
  
    if (!useLowerCase && !useUpperCase && !useNumeric && !useSpecial) {
        alert("At least one character type must be selected.");
        return;
    }
  
    const characterPool = (
        (useLowerCase ? "abcdefghijklmnopqrstuvwxyz" : "") +
        (useUpperCase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "") +
        (useNumeric ? "0123456789" : "") +
        (useSpecial ? "!@#$%^&*()_+-=[]{}|;:,.<>?" : "")
    );
  
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool.charAt(randomIndex);
    }
  
    alert("Your generated password: " + password);
  };
  
  const generatePasswordButton = document.getElementById("generate");
  generatePasswordButton.addEventListener("click", generatePassword);
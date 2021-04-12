let userName = "   Carlos   ";
let email = "email@gmail.com";
let phoneNum = "123-456-7891";
let age = "23";

// could accomplish with a loop and an array
let userProfile = userName.trim().padStart(userName.trim().length + 1, ' ') + 
  email.trim().padStart(email.trim().length + 1, ' ') + 
  phoneNum.replace(/-/g, '').trim().padStart(phoneNum.trim().length + 1, ' ') + 
  age.trim().padStart(age.trim().length + 1, ' ')

// console.log(userProfile);


userProfile = [
  "   Ca  rlos   ",
  "   email@gmail.com   ",
  "   123-  456-  7891   ",
  "   2   3    "
]; 
let userProfileClean = [];

for (let i = 0; i < userProfile.length; i++) {
  if(userProfile[i].trim()) {
    if (userProfile[i].includes('@')) {
      userProfileClean.push(
        userProfile[i].trim()
      );
    } else if (userProfile[i].includes('-')) {
      userProfileClean.push(
        userProfile[i].replace(/-| /g, '').trim()
      )
    } else {
      userProfileClean.push(
        userProfile[i].trim().replace(/ /g, '')
      )
    }
  } else {
    console.log("Looks like you left a field empty! Check the form!")
    break;
  }

  if (i == userProfile.length -1){
    console.log(userProfileClean)
  }
}






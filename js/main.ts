
const userSubmit = document.getElementById("user-submit") as HTMLButtonElement;
userSubmit?.addEventListener("click", userForm);

const submitCalculation = document.getElementById("submit-calculation") as HTMLButtonElement;
submitCalculation?.addEventListener("click", calculate);

function userForm(e:Event) {
  e.preventDefault();
  const firstname = document.getElementById("first-name") as HTMLInputElement;
  const lastname = document.getElementById("last-name") as HTMLInputElement;
  const email = document.getElementById("email") as HTMLInputElement;
  const address = document.getElementById("address") as HTMLInputElement;
  const city = document.getElementById("city") as HTMLInputElement;
  const province = document.getElementById("province") as HTMLInputElement;
  const membership = document.getElementsByName(
    "membership"
  ) as NodeListOf<HTMLInputElement>;

  const output = document.getElementById("output") as HTMLDivElement;
  // get the checked membership
  let checkedMembership = "";
  for (let i = 0; i < membership.length; i++) {
    if (membership[i].checked) {
      checkedMembership = membership[i].value;
    }
  }
  
  
  const result = `
    <span class="result-category">Full Name:</span> <span id="name-result">${firstname.value} ${lastname.value}</span><br/>
    <span class="result-category">Email:</span> <span id="email-result">${email.value}</span><br/>
    <span class="result-category">Address:</span> <span id="address-result">${address.value} ${city.value}, ${province.value}</span><br/>
    <span class="result-category">Membership:</span> <span id="membership-result">${checkedMembership}</span><br/>
  `;  
  output.innerHTML = result;
}

function calculate(e:Event) {
  // we won't return false to avoid the refresh, the better way is to use e.preventDefault()
  e.preventDefault();
    
  const numbers = document.getElementById("numbers") as HTMLInputElement;
  // we will not do as says in the assignment, we don't want to have a lot of code in an els method, we will just return if the input is empty
  if (numbers.value === "") {
    alert("Please enter some numbers");
    return;
  }
  // Now as we can see, it's much easier to read and understand

  let numbs = numbers.value.split(" ").map((num) => parseInt(num)).filter((e) => !isNaN(e));
  let action = document.getElementsByName("operation") as NodeListOf<HTMLInputElement>;
  let checkedAction = "";
  for (let i = 0; i < action.length; i++) {
    if (action[i].checked) {
      checkedAction = action[i].value;
    }
  }

  let result = 0;
  switch (checkedAction) {
    case "sum":
      result = numbs.reduce((a, b) => a + b, 0);
      break;
    case "average":
      result = numbs.reduce((a, b) => a + b, 0) / numbs.length;
      break;
    case "max":
      result = Math.max(...numbs);
      break;
    case "min":
      result = Math.min(...numbs);
      break;
    default:
      break;
  }
  
  const resultElement = document.getElementById("result") as HTMLSpanElement;

  resultElement.innerText = result.toString();
}

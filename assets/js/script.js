/**
 * Creates one number between 1 and 10
 */
 function numberRange() {
  return Math.round(Math.random() * 10);

}

/**
* Pick one random number
*/
function pickRandom(quantity) {

  let secret = [];
  let number = 1;

  while (number <= quantity) {

    let randomNumber = numberRange();
    if (randomNumber !== 0) {
      let found = false;

      for (var position = 0; position < secret.length; position++) {

        if (secret[position] == randomNumber) {

          found = true;
          break;
        }
      }

      if (found == false) {
        secret.push(randomNumber);
        number++;
      }

    }

  }
  return secret;
}

let secret = pickRandom(3);

let input = document.querySelector(".form-control");

input.focus();

/**
 * Checks the input against the random number generated
 */

 function check() {

  let found = false;
  for (var position = 0; position < secret.length; position++) {

    if (input.value == secret[position]) {

      alert(secret[position]);
      alert("You Win! Congratulations !!");
      found = true;
      break;

    }

  }
  if (found == false) {
    alert(position);
    alert("Wrong Number! Try again !!");
  }

  input.value = "";
  input.focus();
}
let button = document.querySelector("#button");
button.onclick = check;

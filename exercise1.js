document.addEventListener("DOMContentLoaded", () =>{
  let input1 = document.querySelector("#password");
  let input2 = document.querySelector("#password2");

  document.querySelector("#validate").addEventListener("click", (e) =>{
    if (input1.value.length < 8)
    {
      document.querySelector("#response").innerText = "password must be at least 8 characters long";
    }
    else if (input1.value != input2.value)
    {
      document.querySelector("#response").innerText = "passwords do not match";
    }
    else
    {
      document.querySelector("#response").innerText = "password creation successful";
    }
  });
});

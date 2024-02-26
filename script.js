//Variable Declaration
let toastBox = document.getElementById("toastbox");
let successMsg =
  ' <i class="fa-solid fa-circle-check"></i> Successfully Submitted';
let errorMsg = ' <i class="fa-solid fa-circle-xmark"></i>Please fix the error';
let invalidMsg =
  ' <i class="fa-solid fa-circle-exclamation"></i>Invalid Input, Check Again';

//Method
function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes("error")) {
    toast.classList.add("error");
  }
  if (msg.includes("Invalid")) {
    toast.classList.add("Invalid");
  }
  if (msg.includes("Successfully")) {
    toast.classList.add("Successfully");
  }

  setTimeout(() => {
    toast.remove();
  }, 6000);
}

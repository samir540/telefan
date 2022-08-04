var submitBtn = document.querySelector("#submit");
var modalShow = document.querySelector("#modal");
var closeModal = document.querySelector("#cancel");

submitBtn && submitBtn.addEventListener("click", openModalHandler);

closeModal && closeModal.addEventListener("click", closeModalHandler);
/*******Modal photo and video update******/
var updateVideoBtn = document.querySelector("#update-video-btn");
var updatePhotoBtn = document.querySelector("#update-photo-btn");
var modalVideoUpdate = document.querySelector("#modal-video");
var modalCancelBtn = document.querySelector("#cancel");

updateVideoBtn &&
  updateVideoBtn.addEventListener("click", openModalVideoUpdate);
updatePhotoBtn &&
  updatePhotoBtn.addEventListener("click", openModalPhotoUpdate);
modalCancelBtn && modalCancelBtn.addEventListener("click", closeModalUpdate);
/*******Modal login******/

function openModalHandler() {
  console.log("first");
  if (modalShow) {
    modalShow.style.display = "flex";
  }
}

function closeModalHandler() {
  if (modalShow) modalShow.style.display = "none";
}

/*******Modal photo and video update******/

function openModalVideoUpdate() {
  if (modalVideoUpdate) modalVideoUpdate.style.display = "flex";
}
function openModalPhotoUpdate() {
  if (modalVideoUpdate) modalVideoUpdate.style.display = "flex";
}

function closeModalUpdate() {
  if (modalVideoUpdate) modalVideoUpdate.style.display = "none";
}

/*******password eye, make visible and invisible******/

var eye = document.querySelector("#eye");
var eyeSlash = document.querySelector("#eye-slash");
var eyeRepeat = document.querySelector("#eye-repeat");
var eyeSlashRepeat = document.querySelector("#eye-slash-repeat");
var passwordInput = document.querySelector("#password");
var passwordRepeatInput = document.querySelector("#password-repeat");

if (eyeSlash) {
  eyeSlash.addEventListener("click", function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeSlash.style.visibility = "hidden";
      eye.style.visibility = "visible";
    }
  });
}

if (eye) {
  eye.addEventListener("click", function () {
    if (passwordInput.type === "text") {
      passwordInput.type = "password";
      eye.style.visibility = "hidden";
      eyeSlash.style.visibility = "visible";
    }
  });
}

if (eyeSlashRepeat) {
  eyeSlashRepeat.addEventListener("click", function () {
    console.log("rep")
    if (passwordRepeatInput.type === "password") {
      passwordRepeatInput.type = "text";
      eyeSlashRepeat.style.visibility = "hidden";
      eyeRepeat.style.visibility = "visible";
    }
  });
}

if (eyeRepeat) {
  eyeRepeat.addEventListener("click", function () {
    if (passwordRepeatInput.type === "text") {
      passwordRepeatInput.type = "password";
      eyeSlashRepeat.style.visibility = "visible";
      eyeRepeat.style.visibility = "hidden";
    }
  });
}

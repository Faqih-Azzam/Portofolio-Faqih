AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

function contact() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  if (name == "") {
    return alert("Nama wajib di isi");
  } else if (email == "") {
    return alert("email wajib di isi");
  } else if (subject == "") {
    return alert("subject wajib di isi");
  } else if (message == "") {
    return alert("Message wajib di isi");
  }

  console.log(name);
  console.log(email);
  console.log(subject);
  console.log(message);

  let namaEmail = "jfaqihazzam@gmail.com";

  let mail = document.createElement("a");
  mail.href = `mailto:${namaEmail}?subject=${subject}&body=${name}, ${message}`;
  mail.click();
}

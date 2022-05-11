const handleUpdate = () => {
  console.log("click");
};

const inputs = document.querySelectorAll(".controls input");

inputs.forEach(input => input.addEventListener("change", handleUpdate));

// for (let input of inputs) {
//   input.addEventListener("input", handleUpdate);
// };
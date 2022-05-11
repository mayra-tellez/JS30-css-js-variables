const inputs = document.querySelectorAll(".controls input");

const handleUpdate = (e) => {
  const suffix = e.target.dataset.sizing || "";
  // console.log("Document Element:", document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value, suffix));
  document.documentElement.style.setProperty(`--${e.target.name}`, `${e.target.value}${suffix}`);
};

inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
inputs.forEach(input => input.addEventListener("input", handleUpdate));
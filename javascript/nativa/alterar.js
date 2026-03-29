const tecnologias = [
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "Angular"
];

tecnologias.splice(1, 2); // Remove "HTML" e "CSS"

console.log("Array após o splice:", tecnologias);

// Para iterar e mostrar cada item, o correto seria usar forEach:
tecnologias.forEach((tecnologias) => {
    console.log(tecnologias)
});
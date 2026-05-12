// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

// Mock matchmedia
window.matchMedia = window.matchMedia || function() {
function mostrarInformacoes() {
  let nome: string = "João";
  let sobrenome: string = "Silva";
  let idade: number = 30;
  console.log(`Nome: ${nome} ${sobrenome}`);
  console.log(`Idade: ${idade}`);
}
mostrarInformacoes();
  
  return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
  };
};

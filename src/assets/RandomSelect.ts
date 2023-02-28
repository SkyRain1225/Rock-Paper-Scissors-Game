export const RandomSelect = () => {
  const types = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * types.length);
  return types[randomIndex];
};

const adjectives = ['strong', 'bold', 'brave', 'courageous', 'adventurous', 'generous', 'thoughtful', 'cheerful', 'considerate', 'charming', 'energetic', 'ambitious', 'fearless', 'beautiful', 'dependable', 'elegant', 'fantastic', 'joyful', 'loving', 'charming', 'gentle', 'romantic', 'sentimental', 'adoring', 'kindhearted', 'faithful', 'sweet', 'beloved', 'lovely', 'thoughtful', 'tender', 'affectionate', 'devoted', 'warm'];
const nounPlace = ['America', 'Thailand', 'Tesco', 'Costco', 'the butchers', 'the post office', 'college', 'university', 'school', 'Australia', 'New Zealand', 'Africa', 'Jamaica', 'Japan', 'Vietman', 'the woods', 'the jungle', 'the rainforests', 'Scotland', 'Ireland', 'Wales', 'Germany', 'France', 'Austria', 'Norway', 'Iceland'];
const nounPerson = ['dog', 'cat', 'husband', 'wife', 'boss', 'postman', 'dentist', 'doctor', 'masseuse', 'asian', 'dwarf', 'scotsman', 'surfer', 'olympian'];

function removeItemOnce(array, value) {
  var index = array.indexOf(value);
  if (index > -1) {
    array.splice(index, 1);
  }
  return value;
}

const random = array =>
  array[Math.floor(Math.random() * array.length)];

//-------RUN PROGRAM-------//
console.log(`You are ${removeItemOnce(adjectives, random(adjectives))} and ${removeItemOnce(adjectives, random(adjectives))}, you will travel to ${removeItemOnce(nounPlace, random(nounPlace))} in the future. This is where you will find a ${removeItemOnce(adjectives, random(adjectives))} ${random(nounPerson)} to explore ${removeItemOnce(nounPlace, random(nounPlace))} with.`);

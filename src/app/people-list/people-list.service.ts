export class PeopleListService {

people = [
  {
    "person": "Ben Lesh",
    "message": "Ohai Ben! How are those observables coming along?"
  },
  {
    "person": "Beard of Brian Holt",
    "message": "Snap me your secrets, oh wise beard. Snap them to me all."
  },
  {
    "person": "Jay Phelps",
    "message": "Hai JAE. aka JAE-QUERY. aka JAE-SON."
  },
  {
    "person": "James Kyle's Beard",
    "message": "Bro, I left some mac 'n cheese in your beard the other day"
  },
  {
    "person": "Jeff Cross's Beard",
    "message": "How did you feel that one time Jeff shaved you off? Do beards cry? Only when doves cry."
  },
  {
    "person": "Sam Saccone",
    "message": "Hai Sam! What intelligent things have you done today?"
  }

];

getPeople () {
  return this.people
}
}

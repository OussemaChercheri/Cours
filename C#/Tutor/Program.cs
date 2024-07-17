//Create Read Update Delete
//CRUD
/*
using System.Text;

string petFish = "puffer fish";

//Concatenation
petFish = "porcupine " + petFish;

//Template LItral
Console.WriteLine($"I AM BYING {petFish}. YOU CANNOT STOP ME!!!");

Console.WriteLine(petFish);

//READ
//Console.Writeline()

//UPDATE
//petFish[0] = "P";
string newPetFish = petFish.Replace("porcupine", "blue dot");
Console.WriteLine(newPetFish);

//DELETE
//String Builder
StringBuilder newCrustacen = new StringBuilder();
newCrustacen.Append("filder crap");
Console.WriteLine(newCrustacen);
newCrustacen.Remove(0, 8);
Console.WriteLine(newCrustacen);

*/

//Array CRUD

//create
string[] rats = ["fancy rat", "brown rat", "radioactive rat", "wolf rat"];

//Read
//Console.WriteLine(rats);
//foreach(var rat in rats){
//    Console.WriteLine(rat);
//}

//Update
//rats[0] = "Fancy Rat";
// LINQ - "update array linq"

var newRats = rats.Where((e) => e.StartsWith("b"));

foreach(var rat in newRats){
    Console.WriteLine(rat);
}

//Delete
//gimme
using Tutor;


//CRUD

Rat wolfRat = new Rat();
Rat fancyRat = new Rat();

wolfRat.Name = "Wolf Rat";
wolfRat.Number = 1000;
wolfRat.IsRadioActive = false;

fancyRat.Name = "Fancy Rat";
fancyRat.Number = 500;
fancyRat.IsRadioActive = true;

Console.WriteLine(wolfRat.Name);
Console.WriteLine(fancyRat.Name);


//UPDATE

wolfRat.Name = "WOLF RAT";
fancyRat.Name = "FANCY RAT";
Console.WriteLine(wolfRat.Name);
Console.WriteLine(fancyRat.Name);

//DELETE
wolfRat.Name = "";
fancyRat.Name = "";
Console.WriteLine(wolfRat.Name);
Console.WriteLine(fancyRat.Name);





























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
*/
/*
//Counter
for(var i = 1; i <= 10; i++){
    Console.WriteLine(i);
}

string[] bands = ["The Beatles", "The Rolling Stones", "The Who", "The Kinks", "The Animals"];

for(var i =0; i< bands.Length; i++){
    Console.WriteLine(bands[i]);
}

foreach(var band in bands){
    Console.WriteLine(band);
}

bands.ToList().ForEach((i) => {
    Console.WriteLine("ForEach: " + i);
});

Array.ForEach(bands, e => Console.WriteLine("Array.ForEach: " + e));
*/
/*
var a = "The Beatles";

if(a == "The Beatles"){
    Console.WriteLine("It's the Beatles");
}
else if(a == "The Rolling Stones"){
    Console.WriteLine("It's the Rolling Stones");
}
else{
    Console.WriteLine("It's not the Beatles or the Rolling Stones");
}

*/
/*
Console.WriteLine((int)Warning.codeRed);

var status = Warning.CodeYellow;

if(status == Warning.CodeYellow){
    Console.WriteLine("Warning: Code Yellow");

}
enum Warning{
    codeRed,
    codeBlue,
    CodeYellow
}
*/

/*

var fish = "Yellow fish";

switch(fish){
    case "puffer fish":
        Console.WriteLine("It's a puffer fish");
        break;
    case "gold fish":
        Console.WriteLine("It's a gold fish");
        break;
    case "Yellow fish":
        Console.WriteLine("It's a yellow fish");
        break;
    default:
        Console.WriteLine("It's not a puffer fish or a gold fish");
        break;
}

var result = fish switch {
    "puffer fish" => "It's a puffer fish",
    "gold fish" => "It's a gold fish",
    "Yellow fish" => "It's a yellow fish",
    _ => "It's not a puffer fish or a gold fish"
};
Console.WriteLine(result);
*/

//Pinger
/*
using System.Net.NetworkInformation;

Ping p1 = new Ping();
PingReply PR = p1.Send("8.8.8.8");

while(PR.Status.ToString() == "Success"){
    Console.WriteLine(PR.Status.ToString() + "!");
    PR = p1.Send("8.8.8.8");
    Console.WriteLine("Waiting ten seconds for next request!");
    Thread.Sleep(10000);
}*/

//Classes


let tab_nbr  = new Array(4,5,6,9,2);
let text = "bonjour toî !";

// retourne le nombre maximum
function my_max(tab){
    console.log("Maximum de tableau : " + Math.max(...tab));
}
console.log("Les nombres : " + tab_nbr);
my_max(tab_nbr);
console.log("******************************");
 
// retourne le nombre de voyelles
function vowel_count(mots){
    let voyelle = new Array("a","à","â","e","ï","î","i","o","u","ù","û","é","ë","ê","y");
    let compteur=0;
    let caractere;
    mots = mots.toLowerCase();
    for(let i=0; i<mots.length; i++){
        for(let j=0; j<voyelle.length; j++){
            //recuperer le caractère
            caractere = mots.charAt(i);
            if (voyelle[j]==caractere) { 
                compteur ++;
            }
        }
    }
    return compteur;
}
console.log("Le mot : " + text);
console.log("On a trouvé : " + vowel_count(text) + " voyelles");
console.log("******************************");

// renvoie les caractères en position inverse
function reverse(phrase){
    let rev_phrase = new Array();
    let i=phrase.length-1;
    while (i>=0){
        rev_phrase.push(phrase.charAt(i));
        i--;
    }
    return rev_phrase.join("");
}
console.log("Mot original : **" + text + "**");
console.log("Mot renversé : **" + reverse(text) + "**");
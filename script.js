function generate(){
    var quotes = {
       "- Deepak Chopra" : '"Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions."',
       "- C.S Lewis" : '"I was not born to be free---I was born to adore andd obey."',
       "- Jenny Valentine" : '"Even when you`d lost everything you thought there was to loose, somebody came along and gave you something for free."',
       "- DE~UNKNOWN" : '"Life will beat you to the ground, all you have to do is leave the regrets aknowledge the mistakes, get back up and keep moving"',
       "- ~Noble.V" : '"Yeah mistake are made accept it, Learn the lesson leave the regrets, Regrets are freakin waste of time"'
    }
    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
} 
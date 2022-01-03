D.addev(window, "load", () => {
    //bunch of examples/tests
    console.log("Bunch of tests");
    console.log(D.get("t"));
    console.log(D.getall("t"));
    console.log(`D.get("h1").css()["display"] = ${D.get("h1").css()["display"]}`); //editable
    console.log(`D.get("h1").css("display") = ${D.get("h1").css("display")}`); //copy
    console.log(D.get("t4").child); //single child
    console.log(D.get("t").child); //multiple childs
    console.log(D.get("t4").before());
    console.log(D.get("t2").after());
    console.log(D.fif(5 > 6, "5 is bigger than 6", "6 is bigger than 5"));
    D.get("t").cadd("test"); //adds class
    console.log(D.get("t").clist);
    D.get("t").crem("test"); //removes class
    console.log(D.get("t").clist);
    D.addCookie("test", "test2"); //adds a cookie
    console.log(D.readCookie("test")); //reads it
    D.remCookie("test");
    console.log(D.readCookie("test"));
    D.times(2)(() => console.log("Hello World")); //runs a code 2 times
});
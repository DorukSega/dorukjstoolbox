const D = {
    get: element => (
        element = document.querySelector(element),
        Object.assign(element, {
            css: attr => attr == undefined ? element.style : element.style[attr], //doesnt let you assign sadly
            addev: (event, execution) => element.addEventListener(event, execution, 0), //adds event
            remev: (event, execution) => element.removeEventListener(event, execution, 0), // removes event, 
            child: element.children.length > 1 ? element.children : element.children[0], //returns childrens or first children 
            vistoggle: () => element.style.display == "none" ? element.style.display = "" : element.style.display = "none", //makes element visible or not visible
            onclick: execution => element.addEventListener("click", execution, 0), //adds onclick event and runs what's in execution, use ()=>{codehere} for execution section
            before: () => { for (; element = element.previousSibling, element && 1 !== element.nodeType;); return element }, //returns element before
            after: () => { for (; element = element.nextSibling, element && 1 !== element.nodeType;); return element }, //returns element after
            cadd: (classname) => element.classList.add(classname),
            crem: (classname) => element.classList.remove(classname),
            clist: element.classList,
            cList: element.classList
        })),
    addev: (element, event, execution) => element.addEventListener(event, execution, 0), //adds event
    remev: (element, event, execution) => element.removeEventListener(event, execution, 0), // removes event, 
    getall: element => document.querySelectorAll(element),
    fif: (condition, iftrue, iffalse) => condition ? iftrue : iffalse, //fast if
    ratio: (a, b) => { for (num = b; 1 < num; num--) 0 == a % num && 0 == b % num && (a /= num, b /= num); return [a, b] },
    readCookie: (cookie) => {
        for (var b, d = cookie + "=", e = document.cookie.split(";"), f = 0; f < e.length; f++) {
            for (b = e[f];
                " " == b.charAt(0);) b = b.substring(1, b.length);
            if (0 == b.indexOf(d)) return b.substring(d.length, b.length)
        }
        return null
    },
    addCookie: (cookie, value) => document.cookie = `${cookie} = ${value}; max-age=31536000; SameSite=None; Secure`,
    remCookie: (cookie) => document.cookie = cookie + "=; Max-Age=0",
    times: time => f => 0 < time && (f(), D.times(time - 1)(f)) //runs a code set times, ()=> use this for code
};
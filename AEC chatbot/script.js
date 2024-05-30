var maindiv=document.getElementById("main");
var btn=document.getElementById("chat-btn");
const scrollableContent = document.querySelector('.scrollable-content');
var voice = document.querySelector('.switch');

let isDragging = false;
let startY;
let scrollLeft;
let scrollTop;

// Event listener for mouse down
scrollableContent.addEventListener('mousedown', (e) => {
  isDragging = true;
  startY = e.pageY - scrollableContent.offsetTop;
  scrollLeft = scrollableContent.scrollLeft;
  scrollTop = scrollableContent.scrollTop;
});

// Event listener for mouse up
scrollableContent.addEventListener('mouseup', () => {
  isDragging = false;
});

// Event listener for mouse move
scrollableContent.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const y = e.pageY - scrollableContent.offsetTop;
  const walkY = (y - startY) * 3; // Adjust scrolling speed
  scrollableContent.scrollTop = scrollTop - walkY;
});


// Variables to track touch movement

// Touchstart event
scrollableContent.addEventListener('touchstart', (e) => {
  isDragging = true;
  startY = e.touches[0].pageY - scrollableContent.offsetTop;
  scrollTop = scrollableContent.scrollTop;
});

// Touchmove event
scrollableContent.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const y = e.touches[0].pageY - scrollableContent.offsetTop;
  const moveY = y - startY;
scrollableContent.scrollTop = scrollTop - moveY;
});

// Touchend event
scrollableContent.addEventListener('touchend', () => {
  isDragging = false;
});


// Add event listener for keydown
document.addEventListener('keydown', (e) => {
  // Check if the pressed key is an arrow key
  if ([38, 40].includes(e.keyCode)) {
    e.preventDefault(); // Prevent default scrolling behavior

    // Get the current scroll position
    const currentScrollTop = scrollableContent.scrollTop;

    // Determine the scroll step (adjust as needed)
    const scrollStep = 50; // For example, 50 pixels per scroll

    // Update the scroll position based on the pressed arrow key
    if (e.keyCode === 38) { // Up arrow
        scrollableContent.scrollTop = currentScrollTop - scrollStep;
    } else if (e.keyCode === 40) { // Down arrow
        scrollableContent.scrollTop = currentScrollTop + scrollStep;
    }
  }
});
function openchat(){
    maindiv.style.display="block";
    btn.style.display="none";

    var ptag = document.getElementById("p1");
    var p1tag = document.getElementById("p2");
    var p2tag = document.getElementById("p3");

    let speechObj=new SpeechSynthesisUtterance(ptag.textContent);
    window.speechSynthesis.speak(speechObj);

    let speechObj1 = new SpeechSynthesisUtterance(p1tag.textContent);
    window.speechSynthesis.speak(speechObj1);

    let speechObj2 = new SpeechSynthesisUtterance(p2tag.textContent);
    window.speechSynthesis.speak(speechObj2);

    setTimeout(chat,5500);
}
function chat(){
    var btn1 = document.createElement("button");
    btn1.innerHTML="Admission";
    btn1.setAttribute("class","btn btn-primary");
    btn1.setAttribute("id","btns");
    maindiv.appendChild(btn1);
    //starting of Admission
    btn1.addEventListener("click",() => {
    btn1.style.display="none";
    btn2.style.display="none";
    btn3.style.display="none";
    btn4.style.display="none";
    btn5.style.display="none";
    var pcont = document.createElement('p');
    pcont.textContent = "you asked for Admission";
    pcont.setAttribute("id","usertext");
    maindiv.appendChild(pcont);
    setTimeout(function(){
    var contents = ["Our college have both Under Graduate(UG) & Post Graduate(PG) Courses",
                    "And now admission is open for the Academic year of 2024-2025",
                    "For more about UG & PG Courses"
                    ];
    contents.forEach(function(content) {
        var paragraph = document.createElement('p');
        paragraph.textContent = content;
        paragraph.setAttribute("class","chat-msg");
        maindiv.appendChild(paragraph); 
        
    });
    if(voice.checked){
        speakTexts(contents);
    }

    var ugbtn = document.createElement('button');
    ugbtn.innerHTML = "UG Courses";
    ugbtn.setAttribute("id","btns");
    maindiv.appendChild(ugbtn);

    var pgbtn = document.createElement('button');
    pgbtn.innerHTML = "PG Courses";
    pgbtn.setAttribute("id","btns");
    maindiv.appendChild(pgbtn);

    var others = document.createElement('button');
    others.innerHTML = "Back to Main Menu";
    others.setAttribute("id","btns");
    maindiv.appendChild(others);

    // Starting of UG Courses
    ugbtn.addEventListener("click",() => {
        ugbtn.style.display="none";
        pgbtn.style.display="none";
        others.style.display="none";
        var pcont = document.createElement('p');
        pcont.textContent = "You asked for UG Courses";
        pcont.setAttribute("id","usertext");
        pcont.setAttribute("class","user-text");
        maindiv.appendChild(pcont);
        var ug = document.createElement('p');
        ug.textContent = "There are 5 B E courses and 2 B Tech Courses";
        
        ug.setAttribute("class","chat-msg");
        maindiv.appendChild(ug);
        var ugcourses = ["Artificial Intelligence and Data Science",
                        "Bio-Medical Engineering",
                        "Computer Science and Engineering",
                        "Electronics and Communication Engineering",
                        "Electrical and Electronics Engineering",
                        "Information Technology",
                        "Mechanical Engineering"
                        ];
        var ul = document.createElement('ul');
        ul.setAttribute("class","list");
        ugcourses.forEach(function(courses){
            var li = document.createElement('li');
            li.textContent = courses;
            ul.appendChild(li);
        });
        if(voice.checked){
            let speech = new SpeechSynthesisUtterance(ug.textContent);
            window.speechSynthesis.speak(speech);
            speakTexts(ugcourses);
        }
        setTimeout(function() {
            maindiv.appendChild(ul);
            pgbtn.style.display="block";
            others.style.display="block"
            maindiv.appendChild(pgbtn);
            maindiv.appendChild(others);
        },1500);
    });// Ending of UG Courses

    //Starting of PG Courses
    pgbtn.addEventListener("click",() => {
    ugbtn.style.display="none";
    pgbtn.style.display="none";
    others.style.display="none";
    var user_msg = document.createElement('p');
    user_msg.textContent = "you asked for PG courses";
    user_msg.setAttribute("id","usertext");
    maindiv.appendChild(user_msg);
    var pg = document.createElement('p');
    pg.textContent = "There are 4 PG Programmes";
    pg.setAttribute("class","chat-msg");
    maindiv.appendChild(pg);

    var pgcourses = ["Computer Science and Engineering",
                    "VLSI Design",
                    "Power Electronics and Drives",
                    "Thermal Engineering"
                    ];
    var pgul = document.createElement('ul');
    pgcourses.forEach(function(courses){
        var li = document.createElement('li');
        li.textContent = courses;
        pgul.appendChild(li);
        });
        pgul.setAttribute("class","list");
    if(voice.checked){
        let speech = new SpeechSynthesisUtterance(pg.textContent);
        window.speechSynthesis.speak(speech);
        speakTexts(pgcourses);
    }
    setTimeout(function(){
        maindiv.appendChild(pgul);
        ugbtn.style.display="block";
        others.style.display="block";
        maindiv.appendChild(ugbtn);
        maindiv.appendChild(others)
        },1500);
    }); //End of PG Courses

    // Starting of Others
    others.addEventListener("click",() => {
        ugbtn.style.display="none";
        pgbtn.style.display="none";
        others.style.display="none";
        btn1.style.display="block";
        btn2.style.display="block";
        btn3.style.display="block";
        btn4.style.display="block";
        btn5.style.display="block";
        maindiv.appendChild(btn1);
        maindiv.appendChild(btn2);
        maindiv.appendChild(btn3);
        maindiv.appendChild(btn4);
        maindiv.appendChild(btn5);
    });
    //Ending of Others
},1500);
});//End of Admission

    var btn2 = document.createElement("button");
    btn2.innerHTML="Academic";
    btn2.setAttribute("id","btns");
    btn2.setAttribute("class","btn btn-primary");
    maindiv.appendChild(btn2);
    //starting of Academics
    btn2.addEventListener("click",() => {
    btn1.style.display="none";
    btn2.style.display="none";
    btn3.style.display="none";
    btn4.style.display="none";
    btn5.style.display="none";
    var user_text = document.createElement('p');
    user_text.textContent = "You asked for Academic";
    user_text.setAttribute("id","usertext");
    maindiv.appendChild(user_text);
    var pcont = document.createElement('p');
    pcont.textContent = "Arasu Engineering College in Kumbakonam is known for its dedication to academic excellence and holistic development of students. With a strong emphasis on engineering education, it provides a conducive environment for learning and research.";
    var pcont1 = document.createElement('p');
    pcont1.textContent = "Our college is committed to nurturing talent and fostering innovation, preparing students to excel in their chosen fields and contribute meaningfully to society."
    pcont1.setAttribute("class","chat-msg");
    pcont.setAttribute("class","chat-msg");
    if(voice.checked){
        let speech1 = new SpeechSynthesisUtterance(pcont.textContent);
        window.speechSynthesis.speak(speech1);
        
        let speech2 = new SpeechSynthesisUtterance(pcont.textContent);
        window.speechSynthesis.speak(speech2);
    }
    setTimeout(function(){
    maindiv.appendChild(pcont);
    maindiv.appendChild(pcont1);
    btn1.style.display="block";
    btn2.style.display="block";
    btn3.style.display="block";
    btn4.style.display="block";
    btn5.style.display="block";
    maindiv.appendChild(btn1);
    maindiv.appendChild(btn2);
    maindiv.appendChild(btn3);
    maindiv.appendChild(btn4);
    maindiv.appendChild(btn5);
    },1500);
});//End of Academics

    var btn3 = document.createElement("button");
    btn3.innerHTML="Facilities";
    btn3.setAttribute("id","btns");
    btn3.setAttribute("id","btns");
    maindiv.appendChild(btn3);
    //starting of Facilities
    btn3.addEventListener("click",() =>{
        btn1.style.display="none";
        btn2.style.display="none";
        btn3.style.display="none";
        btn4.style.display="none";
        btn5.style.display="none";

        var infra = document.createElement('button');
        infra.innerHTML = "Infrastructure";
        infra.setAttribute("id","btns");
        maindiv.appendChild(infra);
        //startin of Infrastructure
        infra.addEventListener("click",() =>{
        infra.style.display="none";
        libr.style.display="none";
        hall.style.display="none";
        food.style.display="none";
        cr.style.display="none";
        lab.style.display="none";
        hostel.style.display="none";
        transport.style.display="none";

        var user_msg = document.createElement('p');
        user_msg.textContent = "You asked Infrastructure";
        user_msg.setAttribute('id',"usertext");
        maindiv.appendChild(user_msg);

        var contents = ["Constructed Area : 1,64,750 Sq.ft.",
                        "Our Institution is spread over a sprawling campus with its calm serene surrounding creating a very good study atmosphere.",
                        "Buildings dedicated to classrooms, laboratories, and lecture halls equipped with modern teaching aids",
                        "Spaces for hosting events, seminars, workshops, and guest lectures.",
                        "Here are the Sample Images of Our campus"
                    ];
        contents.forEach(function(content){
            var cntns = document.createElement('p');
            cntns.textContent = content;
            cntns.setAttribute("class","chat-msg");
            setTimeout(function(){
                maindiv.appendChild(cntns);
            },1500);
        });
        if(voice.checked){
            speakTexts(contents);
        }
        const  images = ["./images/infra(1).jpg","./images/infra(2).jpg"];
        images.forEach(url => {
            const image = document.createElement('img');
            image.src = url;
            image.alt="img";
            image.alt="AEC";
            image.setAttribute("id","images");
            setTimeout(function(){
                maindiv.appendChild(image);
            },1600);
        });
        
        setTimeout(function(){
        infra.style.display="block";
        libr.style.display="block";
        hall.style.display="block"
        food.style.display="block";
        cr.style.display="block";
        lab.style.display="block";
        hostel.style.display="block";
        transport.style.display="block";
        main.style.display="block";
        maindiv.appendChild(infra);
        maindiv.appendChild(libr);
        maindiv.appendChild(hall);
        maindiv.appendChild(food);
        maindiv.appendChild(cr);
        maindiv.appendChild(lab);
        maindiv.appendChild(hostel);
        maindiv.appendChild(transport);
        maindiv.appendChild(main);
        },2000);
        });//End of Infrastructre

        var libr = document.createElement('button');
        libr.innerHTML = "Library";
        libr.setAttribute("id","btns");
        maindiv.appendChild(libr);
        //starting of library
        libr.addEventListener("click",() =>{
            infra.style.display="none";
            libr.style.display="none";
            hall.style.display="none";
            food.style.display="none";
            cr.style.display="none";
            lab.style.display="none";
            hostel.style.display="none";
            transport.style.display="none";
            main.style.display="none";
            var user_msg = document.createElement('p');
            user_msg.textContent = "You asked about Library";
            user_msg.setAttribute("id","usertext");
            maindiv.appendChild(user_msg);

            var library = ["We are having a library with all kind of Books and Magaazines","All Indian authors and Foreign Author book are be available","Student can take and use the book any time"];
            library.forEach(function(content){
                var cntns = document.createElement('p');
                cntns.textContent = content;
                cntns.setAttribute("class","chat-msg");
                setTimeout(function(){
                    maindiv.appendChild(cntns);
                },1500);
            });
            if(voice.checked){
                speakTexts(library);
            }
            setTimeout(function(){
                infra.style.display="block";
                libr.style.display="block";
                hall.style.display="block"
                food.style.display="block";
                cr.style.display="block";
                lab.style.display="block";
                hostel.style.display="block";
                transport.style.display="block";
                main.style.display="block";
                maindiv.appendChild(infra);
                maindiv.appendChild(libr);
                maindiv.appendChild(hall);
                maindiv.appendChild(food);
                maindiv.appendChild(cr);
                maindiv.appendChild(lab);
                maindiv.appendChild(hostel);
                maindiv.appendChild(transport);
                maindiv.appendChild(main);
                },2000);
        });//End of library

        var hall = document.createElement('button');
        hall.innerHTML = "Auditoriums";
        hall.setAttribute("id","btns");
        maindiv.appendChild(hall);
        //Starting of Auditoriums
        hall.addEventListener("click",() =>{
            infra.style.display="none";
            libr.style.display="none";
            hall.style.display="none";
            food.style.display="none";
            cr.style.display="none";
            lab.style.display="none";
            hostel.style.display="none";
            transport.style.display="none";
            main.style.display="none";

            var user_msg = document.createElement('p');
            user_msg.textContent = "You asked for Auditoriums";
            user_msg.setAttribute("class","chat-msg");
            maindiv.appendChild(user_msg);

            var Halls = document.createElement('p');
            Halls.textContent = "Our college have Auditoriums,Seminar Halls and a large Dinning Hall";
            Halls.setAttribute("class","chat-msg");
            maindiv.appendChild(Halls);

            if(voice.checked){
                let speech  = new SpeechSynthesisUtterance(Halls.textContent);
                window.speechSynthesis.speak(speech);
            }

            setTimeout(function(){
                infra.style.display="block";
                libr.style.display="block";
                hall.style.display="block"
                food.style.display="block";
                cr.style.display="block";
                lab.style.display="block";
                hostel.style.display="block";
                transport.style.display="block";
                main.style.display="block";
                maindiv.appendChild(infra);
                maindiv.appendChild(libr);
                maindiv.appendChild(hall);
                maindiv.appendChild(food);
                maindiv.appendChild(cr);
                maindiv.appendChild(lab);
                maindiv.appendChild(hostel);
                maindiv.appendChild(transport);
                maindiv.appendChild(main);
                },2000);
        });//End of Auditoriums

        var food = document.createElement('button');
        food.innerHTML = "Food";
        food.setAttribute("id","btns");
        maindiv.appendChild(food);
        //Starting of food
        food.addEventListener("click",() =>{
        infra.style.display="none";
        libr.style.display="none";
        hall.style.display="none";
        food.style.display="none";
        cr.style.display="none";
        lab.style.display="none";
        hostel.style.display="none";
        transport.style.display="none";
        main.style.display="none";

        var user_msg = document.createElement('p');
        user_msg.textContent = "You asked Food facilities";
        user_msg.setAttribute("id","usertext");
        maindiv.appendChild(user_msg);
        var foodcntns = ["We are providing food for the all the students at free of cost",
                        "Our College availing afternoon meal for all the students.",
                        "So students can have their lunch on our college"
                    ];
        foodcntns.forEach(function(foods){
            var food = document.createElement('p');
            food.textContent = foods;
            food.setAttribute("class","chat-msg");
            setTimeout(function(){
                maindiv.appendChild(food);
            },1500);
        });
        if(voice.checked){
            speakTexts(foodcntns);
        }
        setTimeout(function(){
            infra.style.display="block";
            libr.style.display="block";
            hall.style.display="block"
            food.style.display="block";
            cr.style.display="block";
            lab.style.display="block";
            hostel.style.display="block";
            transport.style.display="block";
            main.style.display="block";
            maindiv.appendChild(infra);
            maindiv.appendChild(libr);
            maindiv.appendChild(hall);
            maindiv.appendChild(food);
            maindiv.appendChild(cr);
            maindiv.appendChild(lab);
            maindiv.appendChild(hostel);
            maindiv.appendChild(transport);
            maindiv.appendChild(main);
            },2000);
        });//End of food

        var cr = document.createElement('button');
        cr.innerHTML = "Classrooms";
        cr.setAttribute("id","btns");
        maindiv.appendChild(cr);
        //Starting of Classrooms
        cr.addEventListener("click",() =>{
            infra.style.display="none";
            libr.style.display="none";
            hall.style.display="none";
            food.style.display="none";
            cr.style.display="none";
            lab.style.display="none";
            hostel.style.display="none";
            transport.style.display="none";
            main.style.display="none";

            var user_msg = document.createElement('p');
            user_msg.textContent = "Yor asked for Classrooms";
            user_msg.setAttribute("id","usertext");
            maindiv.appendChild(user_msg);

            var clsroooms =["Our Classrooms are neat and Clean"," Air Circulation is good and windows are placed for fresh air and sunlight","And LCD smartrooms are used to teach practically"];
            clsroooms.forEach(function(rooms){
                var crs = document.createElement('p');
                crs.textContent = rooms;
                crs.setAttribute("class","chat-msg");
                setTimeout(function(){
                    maindiv.appendChild(crs);
                },1500);
            });
            if(voice.checked){
                speakTexts(clsrooms);
            }

            const  images = ["./images/20220421_112830.jpg","../images/20220112_133752.jpg"];
            images.forEach(url => {
                const image = document.createElement('img');
                image.src = url;
                image.alt="img";
                image.alt="AEC";
                image.setAttribute("id","images");
                setTimeout(function(){
                    maindiv.appendChild(image);
                },1600);
             });
             setTimeout(function(){
                infra.style.display="block";
                libr.style.display="block";
                hall.style.display="block"
                food.style.display="block";
                cr.style.display="block";
                lab.style.display="block";
                hostel.style.display="block";
                transport.style.display="block";
                main.style.display="block";
                maindiv.appendChild(infra);
                maindiv.appendChild(libr);
                maindiv.appendChild(hall);
                maindiv.appendChild(food);
                maindiv.appendChild(cr);
                maindiv.appendChild(lab);
                maindiv.appendChild(hostel);
                maindiv.appendChild(transport);
                maindiv.appendChild(main);      
                },2000);    
        });//End of Classrooms

        var lab = document.createElement('button');
        lab.innerHTML = "Laboratory";
        lab.setAttribute("id","btns");
        maindiv.appendChild(lab);
        //Starting of  Lab
        lab.addEventListener("click",() =>{
            infra.style.display="none";
            libr.style.display="none";
            hall.style.display="none";
            food.style.display="none";
            cr.style.display="none";
            lab.style.display="none";
            hostel.style.display="none";
            transport.style.display="none";
            main.style.display="none";

            var user_msg = document.createElement('p');
            user_msg.textContent = "You asked for Laboratory";
            user_msg.setAttribute("id","usertext");
            maindiv.appendChild(user_msg);

            var cntns = ["we are having seperate labs for each and every department",
                        "Every Laboratories are with High Equipments and Efficient properties"
                        ];
            cntns.forEach(function(cntn){
                var cntns = document.createElement('p');
                cntns.textContent = cntn;
                cntns.setAttribute("class","chat-msg");
                setTimeout(function(){
                    maindiv.appendChild(cntns);
                },1500);
            });
            if(voice.checked){
                speakTexts(cntns);
            }
            
                setTimeout(function(){
                    infra.style.display="block";
                    libr.style.display="block";
                    hall.style.display="block"
                    food.style.display="block";
                    cr.style.display="block";
                    lab.style.display="block";
                    hostel.style.display="block";
                    transport.style.display="block";
                    main.style.display="block";
                    maindiv.appendChild(infra);
                    maindiv.appendChild(libr);
                    maindiv.appendChild(hall);
                    maindiv.appendChild(food);
                    maindiv.appendChild(cr);
                    maindiv.appendChild(lab);
                    maindiv.appendChild(hostel);
                    maindiv.appendChild(transport);
                    maindiv.appendChild(main);      
                    },2000);    
        });//Ending of Lab

        var transport = document.createElement('button');
        transport.innerHTML = "Transportation";
        transport.setAttribute("id","btns");
        maindiv.appendChild(transport);
        //starting of Transport
        transport.addEventListener("click",() =>{
            infra.style.display="none";
            libr.style.display="none";
            hall.style.display="none";
            food.style.display="none";
            cr.style.display="none";
            lab.style.display="none";
            hostel.style.display="none";
            transport.style.display="none";
            main.style.display="none";

            var user_msg = document.createElement('p');
            user_msg.textContent = "you asked for transportation";
            user_msg.setAttribute("id","usertext");
            maindiv.appendChild(user_msg);

            var trans = document.createElement('p');
            trans.textContent = "Transportation is availabe all around the kumbakonam.";
            trans.setAttribute("class","chat-msg");

            var places = ["Destinations to","~Kollumangudi","~Jeyankondam","~Koradacheri","~Sirkazhi","~Manalmedu","~Kumbakonam","~Kottaiyur","~Mannargudi",
                        "~Papakkudi","~Aakkuur","~Veppathur(MV)","~Kuthalam(MV)","~Thiruvaiyaru","~Aavoor","~Thanjauvur"
                            ];
            var ul = document.createElement('ul');
            places.forEach(function(place){
            var li = document.createElement('li');
            li.textContent = place;
            ul.appendChild(li);
            });
            ul.setAttribute("class","list");
            if(voice.checked){
                let speech  = new SpeechSynthesisUtterance(trans.textContent);
                window.speechSynthesis.speak(speech);
                speakTexts(places);
            }
            setTimeout(function(){
                maindiv.appendChild(trans);
                maindiv.appendChild(ul);
                infra.style.display="block";
                libr.style.display="block";
                hall.style.display="block"
                food.style.display="block";
                cr.style.display="block";
                lab.style.display="block";
                hostel.style.display="block";
                transport.style.display="block";
                main.style.display="block";
                maindiv.appendChild(infra);
                maindiv.appendChild(libr);
                maindiv.appendChild(hall);
                maindiv.appendChild(food);
                maindiv.appendChild(cr);
                maindiv.appendChild(lab);
                maindiv.appendChild(hostel);
                maindiv.appendChild(transport);
                maindiv.appendChild(main);
            },1500);
        });//End of transport

        var hostel = document.createElement('button');
        hostel.innerHTML = "Hostel";
        hostel.setAttribute("id","btns");
        maindiv.appendChild(hostel);
        //Starting of Hostel
        hostel.addEventListener("click",() => {
            infra.style.display="none";
            libr.style.display="none";
            hall.style.display="none";
            food.style.display="none";
            cr.style.display="none";
            lab.style.display="none";
            hostel.style.display="none";
            transport.style.display="none";
            main.style.display="none";

            var user_msg = document.createElement('p');
            user_msg.textContent = "You asked  Hostel details";
            user_msg.setAttribute("id","usertext");
            maindiv.appendChild(user_msg);

            var hostelcntn = ["Our college have seperate hostel facilites for both boys and girls",
                            "Hostel with play area,indoor and Outdoor games.",
                            "Gymnastics equipments and many others",
                            "Nice rooms with seperate beds,locker for each student"
                                ];
            hostelcntn.forEach(function(cntn){
                var cntns = document.createElement('p');
                cntns.textContent  = cntn;
                cntns.setAttribute("class","chat-msg");
                setTimeout(function(){
                    maindiv.appendChild(cntns);
                },1500);
            });
            if(voice.checked){
                speakTexts(hostelcntn);
            }
            setTimeout(function(){
                infra.style.display="block";
                libr.style.display="block";
                hall.style.display="block"
                food.style.display="block";
                cr.style.display="block";
                lab.style.display="block";
                hostel.style.display="block";
                transport.style.display="block";
                main.style.display="block";
                maindiv.appendChild(infra);
                maindiv.appendChild(libr);
                maindiv.appendChild(hall);
                maindiv.appendChild(food);
                maindiv.appendChild(cr);
                maindiv.appendChild(lab);
                maindiv.appendChild(hostel);
                maindiv.appendChild(transport);
                maindiv.appendChild(main);
            },2000);
        });//End of Hostel

        var main = document.createElement('button');
        main.innerHTML = "Back to Main Menu";
        main.setAttribute("id","btns");
        main.style.display="none";
        maindiv.appendChild(main);
        //Startin of Back Menu 
        main.addEventListener('click',() => {
            infra.style.display="none";
            libr.style.display="none";
            hall.style.display="none";
            food.style.display="none";
            cr.style.display="none";
            lab.style.display="none";
            hostel.style.display="none";
            transport.style.display="none";
            main.style.display="none";
            setTimeout(function(){
                btn1.style.display="block";
                btn2.style.display="block";
                btn3.style.display="block";
                btn4.style.display="block";
                btn5.style.display="block";
                maindiv.appendChild(btn1);
                maindiv.appendChild(btn2);
                maindiv.appendChild(btn3);
                maindiv.appendChild(btn4);
                maindiv.appendChild(btn5);
            },1000);
        });//End of Back menu
    });//Ending of Facilities



    var btn4 = document.createElement("button");
    btn4.innerHTML="Cells";
    btn4.setAttribute("id","btns");
    btn4.setAttribute("class","btns");
    maindiv.appendChild(btn4);
    //Starting of Cells
    btn4.addEventListener("click",() => {
        btn1.style.display="none";
        btn2.style.display="none";
        btn3.style.display="none";
        btn4.style.display="none";
        btn5.style.display="none";

        var user_msg = document.createElement('p');
        user_msg.textContent = "You asked for Cells detail";
        user_msg.setAttribute("id","usertext");
        maindiv.appendChild(user_msg);

        var cellcntn = document.createElement('p');
        cellcntn.textContent = "We have various cells to equip and train our students";
        cellcntn.setAttribute("class","chat-msg");
        setTimeout(function(){
            maindiv.appendChild(cellcntn);
        },1500);
        var ul = document.createElement('ul');
        var cell = ["1.Entrepreneurship Development","2.National Service Scheme","3.National Cadet Crops","4.Women Development Cells","5.Unnat Bharat Abiyan"];
        cell.forEach(function(cntn){
            var li = document.createElement('li');
            li.textContent = cntn;
            ul.appendChild(li);
        });
        if(voice.checked){
            let speech1 = new SpeechSynthesisUtterance(cellcntn.textContent);
            window.speechSynthesis.speak(speech1);
            speakTexts(cell);
        }
        ul.setAttribute("class","list");
        setTimeout(function(){
            maindiv.appendChild(ul);
            btn1.style.display="block";
            btn2.style.display="block";
            btn3.style.display="block";
            btn4.style.display="block";
            btn5.style.display="block";
            maindiv.appendChild(btn1);
            maindiv.appendChild(btn2);
            maindiv.appendChild(btn3);
            maindiv.appendChild(btn4);
            maindiv.appendChild(btn5);
        },2000);
    });//Ending of Cells


    var btn5 = document.createElement("button");
    btn5.innerHTML="Contact";
    btn5.setAttribute("id","btns");
    btn5.setAttribute("id","btns");
    maindiv.appendChild(btn5);
    //Starting of Contact
    btn5.addEventListener("click",() => {
        btn1.style.display="none";
        btn2.style.display="none";
        btn3.style.display="none";
        btn4.style.display="none";
        btn5.style.display="none";

        var user_msg = document.createElement('p');
        user_msg.textContent = "You asked  Contact details";
        user_msg.setAttribute("id","usertext");
        maindiv.appendChild(user_msg);

        var admin = document.createElement('p');
        admin.textContent = "For Admission Queries";
        admin.setAttribute("class","chat-msg");
    
        var admincontact = ["Contact details","0435-2777777","0435-2777778","0435-2777779","7667993333"];
        var ul = document.createElement('ul');
        admincontact.forEach(function(contact){
            var li = document.createElement('li');
            li.textContent = contact;
            ul.appendChild(li);
        });
        ul.setAttribute("class","chat-msg");
        if(voice.checked){
            let speech1 = new SpeechSynthesisUtterance(admin.textContent);
            window.speechSynthesis.speak(speech1);
            speakTexts(admincontact);
        }

        var other = document.createElement('p');
        other.textContent = "For Other Contact Details";
        other.setAttribute("class","chat-msg");

        var otherbtn = document.createElement('button');
        otherbtn.innerHTML = "Others";
        otherbtn.setAttribute("id","btns");
        //Starting of other details
        otherbtn.addEventListener("click",() =>{
            otherbtn.style.display="none";
            backmain.style.display="none";
            var cntn = document.createElement('p');
            cntn.textContent = "For More Details Please visit our official Website.";
            cntn.setAttribute("class","chat-msg");
            maindiv.appendChild(cntn);
            const link = document.createElement('a');
            link.href="https://aec.org.in";
            link.textContent = "Click Here For More";
            link.target='_blank';
            link.setAttribute("class","chat-msg");
            maindiv.appendChild(link);
            setTimeout(function(){
                btn1.style.display="block";
                btn2.style.display="block";
                btn3.style.display="block";
                btn4.style.display="block";
                btn5.style.display="block";
                maindiv.appendChild(btn1);
                maindiv.appendChild(btn2);
                maindiv.appendChild(btn3);
                maindiv.appendChild(btn4);
                maindiv.appendChild(btn5);
            },1000);

        });//End of other details

        setTimeout(function(){
            maindiv.appendChild(admin);
            maindiv.appendChild(ul);
            maindiv.appendChild(other);
            maindiv.appendChild(otherbtn);
            maindiv.appendChild(backmain);
        },1500);

        var backmain = document.createElement('button');
        backmain.innerHTML = "Back To Main Menu";
        backmain.setAttribute("id","btns");
        //Starting of Back main
        backmain.addEventListener("click",() => {
            otherbtn.style.display="none";
            backmain.style.display="none";
            setTimeout(function(){
                btn1.style.display="block";
                btn2.style.display="block";
                btn3.style.display="block";
                btn4.style.display="block";
                btn5.style.display="block";
                maindiv.appendChild(btn1);
                maindiv.appendChild(btn2);
                maindiv.appendChild(btn3);
                maindiv.appendChild(btn4);
                maindiv.appendChild(btn5);
            },1000);
        });//End of back main
    });//End of Contact
}


function speakTexts(contents) {
    const speechSynthesis = window.speechSynthesis;
    let utterance;

    for (let i = 0; i < contents.length; i++) {
      utterance = new SpeechSynthesisUtterance(contents[i]);
      speechSynthesis.speak(utterance);
    }
  }


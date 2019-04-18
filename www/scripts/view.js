var app = function(app) {  // module pattern      
    app.makeView = function(m, stage) {
        var stageW = stage.width;
        var stageH = stage.height;
        const v = {}; 
        
// the buttons in the FOOTER
        STYLE = {
            type:{
                Tabs:{
                    width:160,
                    spacing:20,
                    currentSelected:false
                },
                Button:{
                    width:70,
                    height:70,
                    corner:35,
                    backgroundColor:purple,
                    rollBackgroundColor:pink,
                    label:"",
                    shadowBlur:-1
                }
            }
        }
        
        const manager = v.manager = new Manager();
        

// page 1
        const page1 = v.page1 = new Container(stageW, stageH);        
        let header = new Container().addTo(page1);          
        v.page1.logo = new Label(m.title).addTo(header);
        let content = new Container(1000,600).addTo(page1);
        let landing = frame.asset("landing.png").sca(.40).center(content);
        // v.dial = new Dial().sca(2).center(content);
        // v.dial.currentValue = m.data[0];
        
        let start = v.start = new Button({width:220,height:70, label:"Start baking"})
            .center(content).mov(0,120);


        let footer = v.page1.tabs = new Tabs({            
            tabs:[
                new Button({                    
                    icon: pizzazz.makeIcon("home", "white").alp(.7),
                    rollIcon: pizzazz.makeIcon("home", "black")                  
                }), 
                new Button({                    
                    icon: pizzazz.makeIcon("settings", "white").alp(.7),
                    rollIcon: pizzazz.makeIcon("settings", "black")
                }),
                new Button({                    
                    icon: pizzazz.makeIcon("home", "white").alp(.7),
                    rollIcon: pizzazz.makeIcon("settings", "black")
                })
                ]

                // first "home" is the icon name"
        }).addTo(page1);
        // footer.buttons[0].setIcon("icon", pizzazz.makeIcon("settings", "white"))
        
        manager.add(new Layout(page1, [
            {object:header, maxWidth:90, marginTop:5},
            {object:content, marginTop:2, backgroundColor:green},
            {object:footer, maxWidth:90, marginTop:2}            
        ], 2, yellow, true, null, stage));
        

        // var rect = frame.asset("main-bgrd.png").sca(.25).center(landing).bot()


// page 2
        const page2 = v.page2 = new Container(stageW, stageH);        
        header = new Container().addTo(page2);          
        v.page2.logo = new Label(m.title).addTo(header);
        content = new Container(1000, 600).addTo(page2);        
        landing = frame.asset("pg1.png").sca(.40).center(content);



    //slider Dan made in class DON'T NEED
        // v.slider = new Slider().sca(1.5).center(content);
        // v.slider.currentValue = m.data[1];
        
        let bowl = v.bowl = frame.asset("bowl1.png").sca(.3).center(content).outline();
        let bakingpowder = v.bakingpowder = frame.asset("oil.png").sca(.1).center(content).mov(-350,150).drag();
        let flour = v.flour = frame.asset("flour.png").sca(.8).center(content).mov(-400).drag();
        let sugar = v.sugar = frame.asset("sugar.png").sca(.13).center(content).mov(-350,-150).drag();
        let eggs = v.eggs = frame.asset("eggs.png").sca(.8).center(content).mov(350,150).drag();
        let water = v.water = frame.asset("drop.png").sca(.1).center(content).mov(400).drag();
        let vanilla = v.vanilla = frame.asset("vanilla.png").sca(.12).center(content).mov(350,-150).drag();
        let bowl2 = v.bowl2 = frame.asset("bowl2.png").sca(.29);
        let bowl3 = v.bowl3 = frame.asset("bowl3.png").sca(.3);


        // parachute = frame.asset("parachute.png").sca(.7).center(piecontainer).mov({y: -111});


    // Footer, do i need? probably not //this clones what's on page 1
        footer = v.page2.tabs = v.page1.tabs.clone().addTo(page2);
        manager.add(new Layout(page2, [
            {object:header, maxWidth:90, marginTop:5},
            {object:content, marginTop:2, backgroundColor:blue},
            {object:footer, maxWidth:90, marginTop:2}            
        ], 2, yellow, true, null, stage));
        
        let next = v.page2.next = new Button({
            label:"Next"
        })


// page 3
        const page3 = v.page3 = new Container(stageW, stageH);        
        header = new Container().addTo(page3);          
        v.page3.logo = new Label(m.title).addTo(header);
        content = new Container(1000, 600).addTo(page3);        
        landing = frame.asset("pg2.png").sca(.40).center(content);
        // v.dial = new Dial().sca(2).center(content);
        // v.dial.currentValue = m.data[0];

        let maker = v.maker = frame.asset("maker1.png").sca(.3).center(content).mov(300,10);
        let makerclosed = v.makerclosed = frame.asset("maker2.png").sca(.28);
        let bowl4 = v.bowl4 = frame.asset("bowl4.png").sca(.3).center(content).mov(-300,-100).drag();

        next = v.page3.next = new Button({
            label:"Next"
        })
        

    // Footer, do i need? probably not //this clones what's on page 1
        footer = v.page3.tabs = v.page1.tabs.clone().addTo(page3);
        manager.add(new Layout(page3, [
            {object:header, maxWidth:90, marginTop:5},
            {object:content, marginTop:2, backgroundColor:blue},
            {object:footer, maxWidth:90, marginTop:2}            
        ], 2, yellow, true, null, stage));




// page 4
        const page4 = v.page4 = new Container(stageW, stageH);        
        header = new Container().addTo(page4);          
        v.page4.logo = new Label(m.title).addTo(header);
        content = new Container(1000, 600).addTo(page4);        
        landing = frame.asset("final.jpg").sca(1.8).center(content);
        // v.dial = new Dial().sca(2).center(content);
        // v.dial.currentValue = m.data[0];

 
        

    // Footer, do i need? probably not //this clones what's on page 1
        footer = v.page4.tabs = v.page1.tabs.clone().addTo(page3);
        manager.add(new Layout(page4, [
            {object:header, maxWidth:90, marginTop:5},
            {object:content, marginTop:2, backgroundColor:blue},
            {object:footer, maxWidth:90, marginTop:2}            
        ], 2, yellow, true, null, stage));


        // on the last page!!! only once
        // I THINK THIS IS THE SWIPING MOTION? which i can't do on my mac laptop
        manager.add(v.pages = new Pages([
            {page:page1, swipe:[null, page2, null, null]},
            {page:page2, swipe:[page1, page3, null, null]},
            {page:page3, swipe:[page2, page4, null, null]},
            {page:page4, swipe:[page3, null, null, null]}
        ], "slide", 500).addTo());

// other stuff?
        return v;
        
    }
    return app; // module pattern
}(app||{}); // module pattern
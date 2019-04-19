var app = function(app) {  // module pattern      
    app.makeView = function(m, stage) {
        var stageW = stage.width;
        var stageH = stage.height;
        const v = {}; 
        
        STYLE = {
            type:{
                Tabs:{
                    width:160,
                    spacing:20,
                    currentSelected:false
                },
                Button:{
                    width:220,
                    height:70,
                    corner:35,
                    backgroundColor:"lightpink",
                    rollBackgroundColor:"palevioletred",
                    label:"",
                    shadowBlur:-1
                }
            }
        }
        
        const manager = v.manager = new Manager();
        

// page 1
        const page1 = v.page1 = new Container(stageW, stageH);        
        let content = new Container(1000,600).addTo(page1);
        let landing = frame.asset("landing.png").sca(.40).center(content);
 
        let start = v.start = new Button({label:"Start baking"})
            .center(content).mov(0,120);
        
        manager.add(new Layout(page1, [
            {object:content, marginTop:2},
        ], 2, "lightpink", true, null, stage));
        

// page 2
        const page2 = v.page2 = new Container(stageW, stageH);        
        content = v.content = new Container(1000, 600).addTo(page2);        
        landing = frame.asset("pg1.png").sca(.40).center(content);
        
        let bowl = v.bowl = frame.asset("bowl1.png").sca(.3).center(content);
        let bakingpowder = v.bakingpowder = frame.asset("oil.png").sca(.1).center(content).mov(-350,150).drag();
        let flour = v.flour = frame.asset("flour.png").sca(.8).center(content).mov(-400).drag();
        let sugar = v.sugar = frame.asset("sugar.png").sca(.13).center(content).mov(-350,-150).drag();
        let eggs = v.eggs = frame.asset("eggs.png").sca(.8).center(content).mov(350,150).drag();
        let water = v.water = frame.asset("drop.png").sca(.1).center(content).mov(400).drag();
        let vanilla = v.vanilla = frame.asset("vanilla.png").sca(.12).center(content).mov(350,-150).drag();
        let bowl2 = v.bowl2 = frame.asset("bowl2.png").sca(.29);
        let bowl3 = v.bowl3 = frame.asset("bowl3.png").sca(.3);
        let label1 = v.label1 = new Label("Drag the ingredients into the bowl to make the batter", 45, null, "white").center(content).mov(0,-280);
        let label2 = v.label2 = new Label("Drag the batter to the waffle machine", 45, null, "white").center(content).mov(0,-280);
        let label3 = v.label3 = new Label("You made waffles!!!!", 45, null, "black").center(content).mov(0,-280);

        manager.add(new Layout(page2, [
            {object:content, marginTop:2, backgroundColor:blue},
        ], 2, "lightpink", true, null, stage));
        
        let next = v.page2.next = new Button({
            label:"Next"
        })


// page 3
        const page3 = v.page3 = new Container(stageW, stageH);        
        content = v.contentpg3 = new Container(1000, 600).addTo(page3);        
        landing = frame.asset("pg2.png").sca(.40).center(content);

        let maker = v.maker = frame.asset("maker1.png").sca(.3).center(content).mov(300,10);
        let makerclosed = v.makerclosed = frame.asset("maker2.png").sca(.28);
        let bowl4 = v.bowl4 = frame.asset("bowl4.png").sca(.3).center(content).mov(-300,-100).drag();

        next = v.page3.next = new Button({
            label:"Next"
        })
        
        manager.add(new Layout(page3, [
            {object:content, marginTop:2, backgroundColor:blue},
        ], 2, "lightpink", true, null, stage));




// page 4
        const page4 = v.page4 = new Container(stageW, stageH);        
        content = v.contentpg4 = new Container(1000, 600).addTo(page4);        
        landing = frame.asset("final.jpg").sca(1.8).center(content);

        next = v.page4.next = new Button({
            label:"Play Again"
        }) 
        
        manager.add(new Layout(page4, [
            {object:content, marginTop:2, backgroundColor:blue},
        ], 2, "lightpink", true, null, stage));


        // on the last page!!! only once
        manager.add(v.pages = new Pages([
            {page:page1, swipe:[null, null, null, null]},
            {page:page2, swipe:[null, null, null, null]},
            {page:page3, swipe:[null, null, null, null]},
            {page:page4, swipe:[null, null, null, null]}
        ], "slide", 500).addTo());

        return v;
        
    }
    return app; // module pattern
}(app||{}); // module pattern
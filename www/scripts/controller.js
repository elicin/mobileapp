var app = function(app) {  // module pattern      
    app.makeController = function(m, v, stage) {         
        const c = {};     
        
        // v.page1.tabs.change(function () {
        //     if (v.page1.tabs.text == 2) v.pages.go(v.page2, "down");
        // });     
        
        // Or use HotSpots for lots of navigation
        // can simplify with a loop - see MVC example https://zimjs.com/mvc
        const hs = new HotSpots([
            // {page:v.page1, rect:v.page1.logo, call:()=>{zog("clicking on hotspot")}},
            // {page:v.page2, rect:v.page2.logo, call:()=>{v.pages.go(v.page1, "left");}},
            
                // below makes the "Start" button work and slide to the right

            // on page 1, click button 2, to slide right into page 2
            {page:v.page1, rect:v.start, call:()=>{v.pages.go(v.page2, "right");}},
            // {page:v.page1, rect:v.page1.tabs.buttons[1], call:()=>{v.pages.go(v.page2, "right");}},
            // {page:v.page1, rect:v.page1.tabs.buttons[2], call:()=>{v.pages.go(v.page3, "right");}},

            // on page 2, click button 1, to slide left into page 1
            // {page:v.page2, rect:v.page2.tabs.buttons[0], call:()=>{v.pages.go(v.page1, "left");}},
            // {page:v.page2, rect:v.page2.tabs.buttons[2], call:()=>{v.pages.go(v.page3, "right");}},
            {page:v.page2, rect:v.page2.next, call:()=>{v.pages.go(v.page3, "right");}},

            // on page 3, 
            // {page:v.page3, rect:v.page3.tabs.buttons[0], call:()=>{v.pages.go(v.page1, "left");}},
            // {page:v.page3, rect:v.page3.tabs.buttons[1], call:()=>{v.pages.go(v.page2, "left");}},
            {page:v.page3, rect:v.page3.next, call:()=>{v.pages.go(v.page4, "right");}},

            {page:v.page4, rect:v.page4.next, call:()=>{v.pages.go(v.page1, "left");}}

        ]);
        hs.show();  
        




// page 2 things
        let pp = 0;
        zog(pp);
    Ticker.add(function(){

        v.label1.addTo(v.content);

        if (v.bakingpowder.hitTestCircle(v.bowl, null, 16)) {
            v.bakingpowder.removeFrom();
            pp++;
            zog(pp);
            if (pp == 6){
                v.page2.next.center(v.content).mov(450,-150)
            }
            if (pp >= 2){
                zog(v.content);
                v.bowl2.center(v.content);
            }
            if (pp >= 4){
                v.bowl3.center(v.content);
            }
            stage.update();
        }
        if (v.flour.hitTestCircle(v.bowl, null, 16)){
            v.flour.removeFrom();
            pp++;
            if (pp == 6){
                v.page2.next.center(v.content).mov(450,-150)             
            }
            if (pp >= 2){
                zog(v.content);
                v.bowl2.center(v.content);
            }
            if (pp >= 4){
                v.bowl3.center(v.content);
            }
            stage.update();
        }
        if (v.sugar.hitTestCircle(v.bowl, null, 16)){
            v.sugar.removeFrom();
            pp++;
            if (pp == 6){
                v.page2.next.center(v.content).mov(450,-150)             
            }
            if (pp >= 2){
                zog(v.content);
                v.bowl2.center(v.content);
            }
            if (pp >= 4){
                v.bowl3.center(v.content);
            }
            stage.update();
        }
        if (v.eggs.hitTestCircle(v.bowl, null, 16)){
            v.eggs.removeFrom();
            pp++;
            if (pp == 6){
                v.page2.next.center(v.content).mov(450,-150)             
            }
            if (pp >= 2){
                zog(v.content);
                v.bowl2.center(v.content);
            }
            if (pp >= 4){
                v.bowl3.center(v.content);
            }
            stage.update();
        }
        if (v.water.hitTestCircle(v.bowl, null, 16)){
            v.water.removeFrom();
            pp++;
            if (pp == 6){
                v.page2.next.center(v.content).mov(450,-150)             
            }
            if (pp >= 2){
                zog(v.content);
                v.bowl2.center(v.content);
            }
            if (pp >= 4){
                v.bowl3.center(v.content);
            }
            stage.update();
        }
        if (v.vanilla.hitTestCircle(v.bowl, null, 16)){
            v.vanilla.removeFrom();
            pp++;
            if (pp == 6){
                v.page2.next.center(v.content).mov(450,-150)             
            }
            if (pp >= 2){
                zog(v.content);
                v.bowl2.center(v.content);
            }
            if (pp >= 4){
                v.bowl3.center(v.content);
            }
            stage.update();
        } //vanilla hit test if statment

        v.page2.next.on("click", function(){
            v.page2.next.removeFrom();
            v.bowl2.removeFrom();
            v.bowl3.removeFrom();
            // label1.removeFrom();
            stage.update();
        })


// page 3
        // new Label("Drag the ingredients into the bowl to make the batter", 45, null, "white").center(v.content).mov(0,-300);

        v.label2.addTo(v.contentpg3);

        if (v.bowl4.hitTestRect(v.maker)){
            v.bowl4.removeFrom();
            // pp++;
            v.maker.removeFrom();
            v.makerclosed.center(v.contentpg3).mov(286,75);

            v.page3.next.center(v.contentpg3).mov(450,-150);
            stage.update();

        }

        v.page3.next.on("click", function(){
            v.page3.next.removeFrom();
            v.makerclosed.removeFrom();
 
            stage.update();
        })

// page 4
// v.smoke1.center();

v.label3.addTo(v.contentpg4);

v.page4.next.center(v.contentpg4)           

v.page4.next.on("click", function(){
    
    stage.update();
})


// end2.on("click", function(){
//     location.reload();
// })


    }); //end of ticker

// if all items are removeFrom stage, then bowl image changes again
// if all items are removeFrom stage, next button appears
// ^ add aboves into each if statement
// if pp = 6, make next button appear


// page 3 things

    // Ticker.add(function(){

    //         // if (pp == 6){
    //         // zog("next");
    //         // }
    //     }
    // });


    // THE DIAL DAN MADE IN CLASS !!! DON'T NEED!!! 
        // v.dial.on("change", ()=>{ // not chainable
        //     zog(v.dial.currentValue)
        //     m.data[0] = v.dial.currentValue;
        //     m.updateData();
        // })
        
        // v.dial.change(()=>{ // chainable            
        // })      
        

    // THE SLIDER DAN MADE IN CLASS !!! DON'T NEED !!!
        // v.slider.on("change", ()=>{ // not chainable
        //     m.data[1] = v.slider.currentValue;
        //     m.updateData();
        // })
            
        
        frame.on("resize", () => {  
            
            v.manager.resize();
            
            stage.update();
        });
                
        return c;
    }
    return app; // module pattern
}(app||{}); // module pattern

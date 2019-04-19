var app = function(app) {  // module pattern      
    app.makeController = function(m, v, stage) {         
        const c = {};     
    
        const hs = new HotSpots([
            {page:v.page1, rect:v.start, call:()=>{v.pages.go(v.page2, "right");}},
            {page:v.page2, rect:v.page2.next, call:()=>{v.pages.go(v.page3, "right");}},
            {page:v.page3, rect:v.page3.next, call:()=>{v.pages.go(v.page4, "right");}},
            {page:v.page4, rect:v.page4.next, call:()=>{v.pages.go(v.page1, "left");}}
        ]);
        hs.show();  
        

// page 2
        let pp = 0;
        zog(pp);
    Ticker.add(function(){

        v.label1.addTo(v.content);

        if (v.bakingpowder.hitTestCircle(v.bowl, null, 16)) {
            v.bakingpowder.removeFrom();
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
        }

        v.page2.next.on("click", function(){
            v.page2.next.removeFrom();
            stage.update();
        })


// page 3
        v.label2.addTo(v.contentpg3);

        if (v.bowl4.hitTestRect(v.maker)){
            v.bowl4.removeFrom();
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
        v.label3.addTo(v.contentpg4);

        v.page4.next.center(v.contentpg4)           

        v.page4.next.on("click", function(){
            location.reload();
            stage.update();
        })

    }); //end of ticker
            
    
        frame.on("resize", () => {  
            v.manager.resize();
            stage.update();
        });
                
        return c;
    }
    return app; // module pattern
}(app||{}); // module pattern

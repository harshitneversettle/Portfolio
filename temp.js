class computer {
    constructor(ram,graphiccard,ssd,memory){
        this.ram = ram ,
        this.graphiccard = graphiccard ,
        this.ssd = ssd ,
        this.memory = memory 
    }
}

class computerBuilder{
    constructor(){
        this.ram = "" ,
        this.graphiccard = "" ,
        this.memory = "" ,
        this.ssd = "" 
    }

    setRam(ram){
        this.ram = ram ;
        return this 
    }

    setmemory(memory){
        this.memory = memory ;
        return this 
    }

    setssd(ssd){
        this.ssd = ssd ;
        return ssd 
    }

    setgraphiccard(graphiccard){
        this.graphiccard = graphiccard ;
        return this 
    }
    


    build (){
        return new computer(
            this.cpu ,
            this.ssd ,
            this.graphiccard , 
            this.memory 
        ) ;
    }
}



const gamnmningpc = new computerBuilder().setRam(12).setgraphiccard(12).setmemory(256).setssd("yes")
class spjanken {
	you: string;
	pc: string;
				
	constructor(you: string, pc: string){
		this.you = you;
		this.pc = pc;
	}
											
	jankenResult(){
        if (this.you == this.pc){
            return `You : ${this.you} pc : ${this.pc} あいこ`;
        }else if(this.you == "gu-" && this.pc == "choki" || this.you == "choki" && this.pc == "pa-" || this.you == "pa-" && this.pc == "gu-"){
    //	}else if(pc =="pa-"){
            return `You : ${this.you} pc : ${this.pc}  WIN`;
        }else{
            return `You : ${this.you} pc : ${this.pc} LOSE`;
        }
	}
} 

let a = new spjanken('gu-', 'choki');
let b = a.jankenResult();
let jan = document.getElementById("jandiv");
if (jan != null){
	jan.innerHTML! = b;
}



function janken(Your: string): string {
	var pcarray: Array<string> = ["gu-","choki","pa-"];
	let pc = pcarray[Math.floor(Math.random() * pcarray.length)];
	if (Your == pc){
		return `You : ${Your} pc : ${pc} あいこ`;
	}else if(Your == "gu-" && pc == "choki" || Your == "choki" && pc == "pa-" || Your == "pa-" && pc == "gu-"){
//	}else if(pc =="pa-"){
		return `You : ${Your} pc : ${pc}  WIN`;
	}else{
		return `You : ${Your} pc : ${pc} LOSE`;
	}
}

console.log(janken("choki"));

//function myhand(my: string): string {
//       	return `I: ${my}!`;
//}
//
//console.log(myhand("gu-"));

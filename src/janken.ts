
function janken(Your: string): string {
	const pcarray: Array<string> = ["gu-","choki","pa-"];
	const pc = pcarray[Math.floor(Math.random() * pcarray.length)];
	if (Your == pc){
		return `You : ${Your} pc : ${pc} あいこ`;
	}else if(Your == "gu-" && pc == "choki" || Your == "choki" && pc == "pa-" || Your == "pa-" && pc == "gu-"){
		return `You : ${Your} pc : ${pc}  WIN`;
	}else{
		return `You : ${Your} pc : ${pc} LOSE`;
	}
}

console.log(janken("choki"));
janken("choki");


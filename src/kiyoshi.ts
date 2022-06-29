const kiyoshi = () =>{
	
	//元の配列を定義
	const originArray: Array<string> = ["zun","doko"];
	const cloneArray: Array<string> = [...originArray];
	//配列の要素の順番を入れ替える
	for (let i = cloneArray.length + 2; i >= 0; i--){
	       let rand = Math.floor(Math.random() * 2)
       cloneArray[i] = cloneArray[rand]
	}
	
	//kiyoshi判定
	const kiyoshiArray: Array<string> = ["zun","zun","zun","zun","doko"];
	if (cloneArray == kiyoshiArray){
		return `${cloneArray} kiyoshi!!!!!`;
	}				
	return `${cloneArray} zannen`;
}

console.log(kiyoshi());
//console.log(shuffleArray(["zun","doko"]));

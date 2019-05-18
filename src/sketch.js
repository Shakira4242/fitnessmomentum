async function main(){
	const net = await posenet.load(0.75);
	console.log(net)
}
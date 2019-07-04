async function f(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("returned from f after a second");
        }, 1000);
    });
}

async function main() {
	const result = await f()
	console.log(result);
}

main();

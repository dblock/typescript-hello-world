import * as _ from "lodash";

async function f(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("returned from f after a second");
        }, 1000);
    });
}

async function main() {
	const results = await Promise.all(_.times(10, f));
	console.log(results);
}

main();

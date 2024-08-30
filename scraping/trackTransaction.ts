import provider from "../utils/provider";

const address = "0xYourAddress";

async function trackTransactions() {
    const latestBlock = await provider.getBlockNumber();

    for (let i = latestBlock - 1000; i <= latestBlock; i++) {
        const block = await provider.getBlockWithTransactions(i);
        block.transactions.forEach((tx: any )=> {
            if (tx.to === address || tx.from === address) {
                console.log(`Transaction found: ${tx.hash}`);
                console.log(`From: ${tx.from}, To: ${tx.to}, Value: ${tx.value.toString()}`);
            }
        });
    }
}

trackTransactions().catch(console.error);

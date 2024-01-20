import { RepositoryFactoryHttp, Account } from "symbol-sdk";
import { firstValueFrom } from "rxjs";

const sample = async (): Promise<void> => {  
    const repositoryFactory = new RepositoryFactoryHttp("http://sym-test-01.opening-line.jp:3000");
    const networkType = await firstValueFrom(repositoryFactory.getNetworkType());
    const account = Account.generateNewAccount(networkType!);

    console.log(account);
    console.log(account.address);
    console.log(account.privateKey);
    console.log(account.publicKey);
};
sample().then();

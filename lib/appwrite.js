import { Account, Client } from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.sm.aora",
  projectId: "66717386002c3736b63c",
  databaseId: "667175a30023955af5ba",
  userCollectionId: "667175dc0027c5e6f9d1",
  videoCollectionId: "667176180018b7c0154e",
  storageId: "6671779c0001ee5965cc",
};

const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

const account = new Account(client);

export const createUser = () => {
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};

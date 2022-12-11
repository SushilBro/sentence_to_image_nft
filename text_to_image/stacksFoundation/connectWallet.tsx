import { showConnect,AppConfig,UserSession } from "@stacks/connect";

const appConfig=new AppConfig(["publish_data","store_write"]);
export const userSession=new UserSession({appConfig});

export function authenticate(){
    showConnect({
        appDetails: {
            name: "Text to image NFT",
            icon: "/vercel.svg"
        },
        redirectTo: "/",
        onFinish: () => {
            window.location.reload();
        },
        userSession,
    })
    
}
export function getUserData(){
    return userSession.loadUserData();
}
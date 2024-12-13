type UserMap = {
    name: string;
    age: number;
    email: string;
}
const user5 = new Map<string, UserMap>()
user5.set("A", {name: "GKS", age: 22, email: "gks@12.com" })
user5.set("B", {name: "GK", age: 21, email: "gk@12.com" })
user5.set("C", {name: "G", age: 20, email: "g@12.com" })
const user = user5.get("A");
console.log(user);

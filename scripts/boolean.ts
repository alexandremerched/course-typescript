let admin: boolean = true;

admin = Boolean(undefined);

console.log(admin)

let senha = "1234";
let senhaSegura: boolean;

senhaSegura = (senha.length > 8);

console.log(senhaSegura);
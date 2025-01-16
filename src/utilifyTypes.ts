type User = {
  id: number;
  username: string;
  password: string
}

const user: User = {
  id: 1,
  username: "Pedrinho",
  password: "Thedarknight"
}

type PartilUser = Partial<User>;

// Todo : Para o uso do Partial, vai depende muito do CONTEXTO!!

// Todo : Omit, como nome já diz, server para esconder paramentro
/*
  *type NewUser = Omit<User, 'id'>
   const newUser = NewUser = {
    nome do parametro
   }
*/

//! Pick, serve para escolher 
/*
  *type searchUser = Pick<User, 'username'>
  const newSearchUser = searchUser = {
    username : "Pedrinho"
  }
*/
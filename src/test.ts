const user = {
  name: 'jihoon',
  age: 40,
};

type userKey = keyof typeof user;
Object.keys(user).forEach((v) => {
  console.log(user[v as userKey]);
});

type date = {
  time: Date;
  now: number;
};

const aa: date = {
  time: new Date(),
  now: new Date().getDate(),
};

console.log(aa.time + ':' + aa.now);

type intersection = ({ name: string } & { age: number }) | { job: string };

const bb: intersection = {
  name: 'jihgoon',
  age: 60,
};

const cc: intersection = {
  name: 'lee',
  job: 'developer',
};

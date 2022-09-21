const getPosts = async () => {
  const posts = await fetch(`https://jsonplaceholder.typicode.com/posts`).then(
    (data) => data.json()
  );

  // let myLists = "";
  const root = document.querySelector("#root");
  // posts.forEach((post) => {
  //   myLists += `<p>${post.title}</p>`;
  // });
  const lists = posts
    .filter((post) => post.id > 9)
    .map((post) => {
      return `<div>
      <p>title: ${post.title}</p>
      <p>body: ${post.body}</p>
    </div>`;
    });
  //
  root.innerHTML = lists.join("");
};

// const myArray =  ['hatdog', 'ka', 'ba'];
// 'hatdog ka ba';
// myArray.join(" ");

getPosts();

// promise
const samplePromise = (age = 0) =>
  new Promise((res, rej) => {
    if (age > 18) {
      setTimeout(() => {
        return res("legal age");
      }, 5000);

      return;
    }
    setTimeout(() => {
      return rej("minor age");
    }, 5000);
  });

const callThePromise = async () => {
  try {
    const a = await samplePromise(15);
  } catch (err) {
    console.log(err);
  } finally {
    console.log(" final");
  }
};

// const callThePromise = () => {
//   let a;
//   samplePromise(20).then((res) => {
//     a = res;
//     console.log(a);
//   });
// };

callThePromise();

const changeColor = () => {
  // id = #
  // class = .
  const el = document.querySelector("#title");
  el.style.color = "blue";
  const a = "my variable";

  console.log(`${a} is very wrong`); // concat

  const root = document.querySelector("#root");

  root.innerHTML = `<p style="color: red" id="title" class="wala-lang">test</p>`;
};

const sampleArray = [1, 2, 3]; // sanple array

const address = {
  street: "42",
  city: "San Mateo",
  province: "Rizal",
}; // sample object

const sArrayOfObjects = [
  {
    name: "Jesson Jei Rebua",
    age: 26,
  },
  {
    name: "Vince Eman Rebua",
    age: 18,
  },
  {
    name: "Franz Carmen Rebua",
    age: 17,
  },
];

let totalAge = 0;
// foreach
sArrayOfObjects.forEach((item, i) => {
  console.log(item, i);
  totalAge = totalAge + item.age;
});
// maps
const names = sArrayOfObjects.map((item) => ({
  name: item.name,
}));
console.log(names, "my maps");

//filter
const legalAge = sArrayOfObjects.filter((person) => person.age > 25);
console.log(legalAge);

// every
const listIsAllLegalAge = sArrayOfObjects.every((person) => person.age > 15);
console.log(listIsAllLegalAge);

// some
const listhasAllLegalAge = sArrayOfObjects.some((person) => person.age > 18);
console.log(listhasAllLegalAge, "some");

// destructuring
const { city: syudad /* alias */, province } = address;
console.log(syudad, province);

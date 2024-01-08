// Array destructing
       const countries = ['India','Germany','Japan','China'];
       const [a, b, c, d] = countries;
       console.log(d);

        // Object destructing
        const person = {
            name : "Amaan",
            favLanguage : "JS",
            age : 22,
        };
        const { name, favLanguage, age} = person;
        console.log(name, favLanguage, age);
        
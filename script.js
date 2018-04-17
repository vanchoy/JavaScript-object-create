// Lecture: Creating Objects - Object.create
// Another way of creating objects that inherit from a prototype - object.create method

// With the object.create method things work a bit different.
// In this case, we first define an object that will act as the prototype and then create a new object based on that very prototype.
var personProto = {  // Prototype object
    calculateAge: function () {
        console.log(2016 - this.yearOfBirth);
    }
};

//**** #1 way of creating an object ****//
// So we simply say Object.create, and then we simply pass it the object that we define to be the prototype object which will be personProto.
var john = Object.create(personProto);
// Filling the john object with data. This is not ideal way of filling the object with data. The object we created was empty and then we had to fill it here with the data, but there is another way to do that, because object.create accepts a second parameter.
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

//**** #2 way of creating an object and filling with data  ****/
// Of course the prototype is, again, personProto, but then we can pass a second argument which is an object specifying the data that we want to have in the object.
var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
});


// Both objects share the same prototype, because both have the calculateAge() method, and then they both have their own type of data.
// The difference between object.create and the function constructor pattern is that object.create builds an object that inherits directly from the one that we passed into the first argument. While, on the other hand, the function constructor the newly created object inherits from the constructor's prototype property, so that is the big difference.
// One of the biggest benefits of object.create is that it allows us to implement a really complex inheritant structure in an easier way than the function constructors because it allows us to directly specify which object should be a prototype.

// So, function constructors and object.create are the most common ways of creating objects.

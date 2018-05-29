// Create new objects to represent campaign data

// Objects for Image gallery
let headshot = {
  alt: "A photo of Elizabeth",
  src: "images/elizabeth.jpg"
}
let familyPhoto = {
  alt: "The Sanger family",
  src: "images/family.jpg"
}
let constituentPhoto = {
  alt: "Some of Elizabeth's constituents",
  src: "images/constituents.jpg"
}
const images = [headshot, familyPhoto, constituentPhoto];

// Objects for Platform statements
let taxes = {
  issue: "Taxes",
  position: "I will lower taxes"
}
let jobs = {
  issue: "Jobs",
  position: "I will create lots of new jobs"
}
let infrastructure = {
  issue: "Infrastructure",
  position: "I will improve our infrastructure"
}
let healthcare = {
  issue: "Health Care",
  position: "I will lower health care costs and improve the quality of care"
}
let crime = {
  issue: "Crime and Enforcement",
  position: "I will give our law enforcement the tools they need to reduce crime rates and keep us safe"
}
let platforms = [taxes, jobs, infrastructure, healthcare, crime];

// Object for Candidate info
let candidate = {
  firstName: "Elizabeth",
  lastName: "Sanger",
  districtState: "TN",
  districtNumber: 5,
  missionStatement: "I want to represent people",
  biography: "Elizabeth was born somewhere nearby and has a heart for the people here. After graduating from a good school with an impressive degree, she worked at a job that taught her to appreciate all the things that are important to you. Elizabeth enjoys spending time with her family and pets and has a few other nice, generic hobbies that are very common among her constituents.",
  platforms,
  images
}




// Objects for Volunteer database
let alice = {
  firstName: "Alice",
  lastName: "Apple",
  address: "123 Sesame St",
  email: "alice.apple@gmail.com",
  phoneNumber: "555-123-4567",
  availability: "Weekdays",
  activities: ["Phone surveys", "Door-to-door canvassing"]
}
let bob = {
  firstName: "Bob",
  lastName: "Banana",
  address: "314 Pi Ave",
  email: "bananaboat@yahoo.com",
  phoneNumber: "555-314-1569",
  availability: "Weekends",
  activities: ["Polling", "Putting up signs"]
}
const volunteers = [alice, bob];

// Objects for Calendar of events
let event1 = {
  name: "Shaking hands",
  date: "June 8th, 2018",
  time: "4:00 pm"
}
let event2 = {
  name: "Kissing babies",
  date: "June 8th, 2018",
  time: "5:00 pm"
}
let event3 = {
  name: "Handing out flyers",
  date: "June 9th, 2018",
  time: "10:00 am"
}
let event4 = {
  name: "Being especially patriotic",
  date: "July 4th, 2018",
  time: "All day"
}
const calendar = [event1, event2, event3, event4];

// Overall Campaign object
let campaign = {
  volunteers,
  calendar,
  registerURL: "www.registertovoteforme.com",
  donateURL: "www.giveusmoneyplease.com"
}
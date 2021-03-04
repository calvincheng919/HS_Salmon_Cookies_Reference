# HS_Salmon_Cookies_Reference
High School Salmon Cookies project reference repo

- This reference repo contains material that will be updated daily
- This reference repo contains assets needed for the highschool Salmon Cookies project

### 03.01.2021

- Create Team Agreement
- Create team repository called ```salmon-cookies```
- Add partner as collaborator
- Copy link to repo - submit link
- Clone this repo locally and update it daily

### 03.02.2021

- Reading assignment
- Create a blog repo to contain all of your reading 

  #### Today's reading assignment
  Intro to the DOM - [document object model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

    Example blog entry:
    1. I learned that the DOM underlies the entire webpage and defines every single item on the html document.
    2. DOM stands for document object model. Using the DOM, I can target and control everything on the webpage with JavaScript and CSS.

  #### Academic Honesty

  - Attribute everything (give credit to your source)

  In order of preference
  1. Understand the code, then put the code away and reproduce it from scratch
  2. Re-type the entire code by hand
  3. Copy and paste - Say in comments - “I copied and pasted the following code”

  Note: it is not acceptable to copy/paste and annotate the entire project. You will be asked to explain everything. 

  ### 03.04.2021

  - Create a Person object with properties
  - One of those properties is a function, which is referred to as a method inside of an object
  - When referring to itself inside of the object, you can use 'this' keyword, i.e., this.name, this.email

  ```
  let Person = {
    name: "Calvin",
    age: 49,
    getMyInfo: function(){
      console.log(this.name, this.getMyInfo)
    }
  }

  ```
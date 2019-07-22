# Manager App 

## React-Native Redux - Employee Management App

#### Description
---------
The Manager app is a Mobile employee management system application. It allows managers to add their employees' name, work shift, and phone number to keep track of their employees' status. After they've built their list of employees, they can text them when their shift days are updated. They can also remove the employees and add as needed.

#### Tech Specifications
---------
* Built in React-Native. 
  * The app makes use of Firebase, for authentication, and its database as well for storing accounts/users and employees.
  * React Redux is used for Application level state. 
  * Redux-Thunk middleware is used for Asynchronous calls and returns for dispatching actions with Firebase.
  * React-Native-Router-Flux is used for naviagtion purposes and allowing the user to smoothly navigate between pages and for CRUD.
  * Lodash is used for mapping and object to array modifaction. 

#### Screenshots
---------

![alt text](https://github.com/Twistedben/Employee-Manager-App/blob/master/screenshots/employee_list.png "List of Employees")
----------
![alt text](https://github.com/Twistedben/Employee-Manager-App/blob/master/screenshots/employee_create.png "Create a new Employee")
----------
![alt text](https://github.com/Twistedben/Employee-Manager-App/blob/master/screenshots/employee_update.png "Interact with Employee and Update")

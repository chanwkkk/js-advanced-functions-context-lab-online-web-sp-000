/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 // Your code here

 function createEmployeeRecord(record){
   let employee = {
     firstName: record[0],
     familyName: record[1],
     title: record[2],
     payPerHour: record[3],
     timeInEvents: [],
     timeOutEvents: [],
   }
   return employee
 }

 function createEmployeeRecords(records){
    return records.map(em=>createEmployeeRecord(em))
 }

<<<<<<< HEAD
 function createTimeInEvent(time){
=======
 function createTimeInEvent(employee,time){
>>>>>>> a451d0e7b9c3bf9896ce1b7a73340db32c70e78d
    let newTimeinEvent = {
      type: "TimeIn",
      date: time.slice(0,10),
      hour: parseInt(time.slice(11))
    }


<<<<<<< HEAD
    this.timeInEvents.push(newTimeinEvent)
    return this

 }

 function createTimeOutEvent(time){
=======
    employee.timeInEvents.push(newTimeinEvent)
    return employee

 }

 function createTimeOutEvent(employee,time){
>>>>>>> a451d0e7b9c3bf9896ce1b7a73340db32c70e78d
    let newTimeOutEvent = {
      type: "TimeOut",
      date: time.slice(0,10),
      hour: parseInt(time.slice(11))
    }


<<<<<<< HEAD
    this.timeOutEvents.push(newTimeOutEvent)
    return this

 }

 function hoursWorkedOnDate(time){
   let date = time.slice(0,10)
   let timeInObj = this.timeInEvents.find(x=>x.date==date)
   let timeOutObj = this.timeOutEvents.find(x=>x.date==date)
=======
    employee.timeOutEvents.push(newTimeOutEvent)
    return employee

 }

 function hoursWorkedOnDate(employee,time){
   let date = time.slice(0,10)
   let timeInObj = employee.timeInEvents.find(x=>x.date==date)
   let timeOutObj = employee.timeOutEvents.find(x=>x.date==date)

   return (timeOutObj.hour - timeInObj.hour)/100
 }


 function wagesEarnedOnDate(time){
   let hours = hoursWorkedOnDate.call(this,time)
   return this.payPerHour*hours
 }

 // function allWagesFor(employee){
 //   let workDates = employee.timeInEvents.map(time=>time.date+" "+time.hour)
 //   let reducer = (accumulator,date)=>accumulator+wagesEarnedOnDate(employee,date)
 //   return workDates.reduce(reducer,0)
 // }

 function calculatePayroll(employees){
<<<<<<< HEAD
   return employees.reduce((accumulator,em)=>accumulator+allWagesFor.call(em),0)
=======
   return employees.reduce((accumulator,em)=>accumulator+allWagesFor(em),0)
>>>>>>> a451d0e7b9c3bf9896ce1b7a73340db32c70e78d
 }

 function findEmployeeByFirstName(records, firstName){
   return records.find(r=>r.firstName == firstName)
 }

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

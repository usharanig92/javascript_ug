const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
      //... More employee records can be added here
    ];

function displayEmployees(){
    const totalemployees = employees.map((emp,index) => `<p>id: ${emp.id} name: ${emp.name} age: ${emp.age} department: ${emp.department} salary: ${emp.salary}</p>`).join('')
    document.getElementById("employeesDetails").innerHTML = totalemployees
}

function calculateTotalSalaries(){
    const totalSalaries = employees.reduce((acc,employee) => acc + employee.salary, 0)
    document.getElementById("employeesDetails").innerHTML = totalSalaries
}

function displayHREmployees(){
    const HREmployee = employees.filter((emp) => emp.department === "HR")
    const HREmployeedisplay = HREmployee.map((emp,index) => `<p>id:${emp.id} name: ${emp.name} age: ${emp.age} department: ${emp.department} salary: ${emp.salary} </p>`)
    document.getElementById("employeesDetails").innerHTML = HREmployeedisplay
}

function findEmployeeById(id){
    const employee = employees.find(employee => employee.id === id)
    document.getElementById("employeesDetails").innerHTML = `<p>id:${employee.id} name: ${employee.name} age: ${employee.age} department: ${employee.department} salary: ${employee.salary} </p>`
}
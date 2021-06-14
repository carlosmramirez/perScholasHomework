package oopconcepts;

public class Employee extends Person implements PersonInterface {
	int empId;
	int empSalary;
	
	Address addr;
	
	public float calculate(float principal, float taxRate) {
		float interest = principal * taxRate;
		return interest;
	}
	
	public double calculate(double overtime, double hours) {
		double overTime = overtime * hours;
		return overTime;
	}
	
	public double calculate(int bonus) {
		return bonus + empSalary;
	}
	
	public boolean isFullTime(int hours) {
		return hours >= 40;
	}
	
	public Employee(String name, int age, char gender, int id, int salary) {
		super(name, age, gender);
		empId = id;
		empSalary = salary;
	}
	
	public void createAddress() {
		addr = new Address();
		
		addr.street = "123 Street";
		addr.city = "New York";
		addr.zipCode = 10033;
	}
	
	public void display() {
		System.out.println(ORGANIZATION);
		super.display();
		System.out.println("Employee Id: " + empId);
		System.out.println(addr.street);
		System.out.println(addr.city);
		System.out.println(addr.zipCode);
		System.out.println("Employee Salary: " + empSalary);
	}
}

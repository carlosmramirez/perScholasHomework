package oopconcepts;

import java.util.Scanner;

public class Starter {

	public static void main(String[] args) {
		String empName, studentName, userMajor;
		int empId, studentId;
		int userSalary;
		int userBonus;
		int empHours, studentHours;
		int empAge, studentAge;
		char empGender, studentGender;
		
		int subj1, subj2, subj3;
		int userNumOfCourses;
	
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Please input employee name: ");
		empName = scan.next();
		
		System.out.println("Please input employee id: ");
		empId = scan.nextInt();
		
		System.out.println("Please input employee salary: ");
		userSalary = scan.nextInt();
		
		System.out.println("Please input hours worked: ");
		empHours = scan.nextInt();
		
		System.out.println("Please input employee bonus: ");
		userBonus = scan.nextInt();
		
		System.out.println("Please input employee age: ");
		empAge = scan.nextInt();
		
		System.out.println("Please input employee gender initial: ");
		empGender = scan.next().charAt(0);
		
		System.out.println("Please input student name: ");
		studentName = scan.next();
//		
		System.out.println("Please input student id: ");
		studentId = scan.nextInt();
//		
		System.out.println("Please input student age: ");
		studentAge = scan.nextInt();
//		
		System.out.println("Please input student major: ");
		userMajor = scan.next();
//		
		System.out.println("Please input student gender initial: ");
		studentGender = scan.next().charAt(0);
//		
		System.out.println("Please input credit hours: ");
		studentHours = scan.nextInt();
		
		System.out.println("Please input subject 1 score: ");
		subj1 = scan.nextInt();
		
		System.out.println("Please input subject 2 score: ");
		subj2 = scan.nextInt();
		
		System.out.println("Please input subject 3 score: ");
		subj3 = scan.nextInt();
		
		System.out.println("Please input number of courses: ");
		userNumOfCourses = scan.nextInt();
		
		scan.close();	
		
//		Person1 person1 = new Person1();
//		person1.setPname(userName);
//		person1.setPgender(userGender);
//		person1.setPage(userAge);
//		System.out.println("Name: " + person1.getPname());
//		System.out.println("Age: " + person1.getPage());
//		System.out.println("Gender: " + person1.getPgender());
		
		Employee employee1 = new Employee(empName, empAge, empGender, empId, userSalary);
		employee1.createAddress();
		employee1.display();
		System.out.println("Is full time: " + employee1.isFullTime(empHours));
		System.out.println("Total Salary: " + employee1.calculate(userBonus));
		System.out.println("Taxes: " + employee1.calculate(userSalary * 40, 0.2));
		System.out.println("Overtime: " + employee1.calculate(userSalary * 2, 10));
		
		System.out.println();
		System.out.println();
		
		Student student1 = new Student(studentName, studentAge, studentGender, userMajor, studentId, subj1, subj2, subj3, userNumOfCourses); 
		student1.display();
		System.out.println("Is full time: " + student1.isFullTime(studentHours));
		
	}

}

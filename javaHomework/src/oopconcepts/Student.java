package oopconcepts;

public class Student extends Person implements PersonInterface {
	String major;
	int studentId;
	int subj1, subj2, subj3;
	double totalScore;
	
	public double calculate(int num) {
		return (subj1 + subj2 + subj3) / num;
	}
	
	public boolean isFullTime(int hours) {
		return hours >= 12;
	}
	
	public Student(
			String name,
			int age, 
			char gender, 
			String major, 
			int id, 
			int subj1,
			int subj2, 
			int subj3,
			int numOfCourses
	) {
		super(name, age, gender);
		studentId = id;
		this.major = major;
		this.subj1 = subj1;
		this.subj2 = subj2;
		this.subj3 = subj3;
		this.totalScore = calculate(numOfCourses);
		
	}
	
	public void display() {
		System.out.println(ORGANIZATION);
		super.display();
		System.out.println("Major: " + major);
		System.out.println("Student ID: " + studentId);
		System.out.println("Subject 1 Score: " + subj1);
		System.out.println("Subject 2 Score: " + subj2);
		System.out.println("Subject 3 Score: " + subj3);
		System.out.println("Total Score: " + totalScore);
	}
}

package oopconcepts;

public class Person {
	
	static int count = 0;
	
	String pname;
	int page;
	char pgender;
	
	public Person() {
		count++;
	}
	
	public Person(String name, int age, char gender) {
		pname = name;
		page = age;
		pgender = gender;
		count++;
	}
	
	public void display() {
		System.out.println("Name: " + pname);
		System.out.println("Age: " + page);
		System.out.println("Gender: " + pgender);
//		System.out.println(count);
	}
	
	public static void displayTotalCount() {
		System.out.println(count);
	}
	
	

}

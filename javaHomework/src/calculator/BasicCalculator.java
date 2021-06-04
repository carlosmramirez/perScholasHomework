package calculator;

import java.util.Scanner;

public class BasicCalculator {
	
	static int add() {
		int num1, num2;
		Scanner scan = new Scanner(System.in);
		System.out.println("Please provide the 1st integer");
		num1 = scan.nextInt();
		
		System.out.println("Please provide the 2nd integer");
		num2 = scan.nextInt();
				
		return num1 + num2;
	}
	
	static int subtract() {
		int num1, num2;
		Scanner scan = new Scanner(System.in);
		System.out.println("Please provide the 1st integer");
		num1 = scan.nextInt();
		
		System.out.println("Please provide the 2nd integer");
		num2 = scan.nextInt();
		
		return num1 - num2;
	}
	
	static int multiply() {
		int num1, num2;
		Scanner scan = new Scanner(System.in);
		System.out.println("Please provide the 1st integer");
		num1 = scan.nextInt();
		
		System.out.println("Please provide the 2nd integer");
		num2 = scan.nextInt();
		
		return num1 * num2;
	}
	
	static void divide() {
		int num1, num2, quotient, remainder;
		Scanner scan = new Scanner(System.in);
		System.out.println("Please provide the 1st integer");
		num1 = scan.nextInt();
		
		System.out.println("Please provide the 2nd integer");
		num2 = scan.nextInt();
		
		quotient = num1 / num2;
		remainder = num1 % num2;
		System.out.print("Result: Quotient: " + quotient + " Remainder: " + remainder);
	}
	
	static void exit() {
		System.exit(0);
	}
	
	static int getUserChoice() {
		int userOperationChoice;
		Scanner scan = new Scanner(System.in);

		System.out.println("Please select an integer from the list to perform an operation: \n"
				+ "1. Add \n"
				+ "2. Subtract \n"
				+ "3. Multiply \n"
				+ "4. Divide \n"
				+ "5. Exit");
		userOperationChoice = scan.nextInt();
		
		return userOperationChoice;
	}
	
	public static void main(String[] args) {
		int userOperationChoice = getUserChoice();
		
		while (userOperationChoice <= 5) {
			switch (userOperationChoice) {
			  case 1:
			    System.out.println("Result: " + add());
			    userOperationChoice = getUserChoice();
			    break;
			  case 2:
			    System.out.println("Result: " + subtract());
			    userOperationChoice = getUserChoice();
			    break;
			  case 3:
			    System.out.println("Result: " + multiply());
			    userOperationChoice = getUserChoice();
			    break;
			  case 4:
				divide();
				System.out.println();
				userOperationChoice = getUserChoice();
			    break;
			  case 5: 
				exit();
				break;
			  default:
			    System.out.println("Not a valid operator integer selector!");
			}
		}
	}
}

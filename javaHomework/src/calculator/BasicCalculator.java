package calculator;

import java.util.Scanner;

public class BasicCalculator {
	
	static int add(Scanner scan) {
		int num1, num2;
		
		System.out.println("Please provide the 1st integer");
		num1 = scan.nextInt();
		
		System.out.println("Please provide the 2nd integer");
		num2 = scan.nextInt();
		
		return num1 + num2;
	}
	
	static int subtract(Scanner scan) {
		int num1, num2;
//		Scanner scan = new Scanner(System.in);
		System.out.println("Please provide the 1st integer");
		num1 = scan.nextInt();
		
		System.out.println("Please provide the 2nd integer");
		num2 = scan.nextInt();
//		scan.close();
		
		return num1 - num2;
	}
	
	static int multiply(Scanner scan) {
		int num1, num2;
//		Scanner scan = new Scanner(System.in);
		System.out.println("Please provide the 1st integer");
		num1 = scan.nextInt();
		
		System.out.println("Please provide the 2nd integer");
		num2 = scan.nextInt();
//		scan.close();
		
		return num1 * num2;
	}
	
	static void divide(Scanner scan) {
		int num1, num2, quotient, remainder;
//		Scanner scan = new Scanner(System.in);
		System.out.println("Please provide the 1st integer");
		num1 = scan.nextInt();
		
		System.out.println("Please provide the 2nd integer");
		num2 = scan.nextInt();
//		scan.close();
		
		quotient = num1 / num2;
		remainder = num1 % num2;
		System.out.print("Result: Quotient: " + quotient + " Remainder: " + remainder);
	}
	
	static void exit() {
		System.exit(0);
	}
	
	static int getUserChoice(Scanner scan) {
		int userOperationChoice;
//		Scanner scan = new Scanner(System.in);

		System.out.println("Please select an integer from the list to perform an operation: \n"
				+ "1. Add \n"
				+ "2. Subtract \n"
				+ "3. Multiply \n"
				+ "4. Divide \n"
				+ "5. Exit");
		userOperationChoice = scan.nextInt();
//		scan.close();
		
		return userOperationChoice;
	}
	
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);

		int userOperationChoice = getUserChoice(scan);
		
		while (userOperationChoice != 5) {
			switch (userOperationChoice) {
			  case 1:
			    System.out.println("Result: " + add(scan));
			    userOperationChoice = getUserChoice(scan);
			    break;
			  case 2:
			    System.out.println("Result: " + subtract(scan));
			    userOperationChoice = getUserChoice(scan);
			    break;
			  case 3:
			    System.out.println("Result: " + multiply(scan));
			    userOperationChoice = getUserChoice(scan);
			    break;
			  case 4:
				divide(scan);
				System.out.println();
				userOperationChoice = getUserChoice(scan);
			    break;
			  case 5: 
				exit();
				break;
			  default:
			    System.out.println("Not a valid operator integer selector!");
			    getUserChoice(scan);
			}
			
		}
		scan.close();
	}
}

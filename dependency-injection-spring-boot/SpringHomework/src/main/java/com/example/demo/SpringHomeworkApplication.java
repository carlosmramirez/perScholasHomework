package com.example.demo;

import java.util.Scanner;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class SpringHomeworkApplication {

	public static void main(String[] args) {
		String carMake, carModel, carColor;
		int numDoors, carHP, carCylinders;
		String motoMake, motoModel, motoColor, motoType;
		int motoHP, motoCylinders;
		
		ConfigurableApplicationContext Context = SpringApplication.run(SpringHomeworkApplication.class, args);
		
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Car Make:");
		carMake = scan.nextLine();
		
		System.out.println("Car Model:");
		carModel = scan.nextLine();
		
		System.out.println("Car Color:");
		carColor = scan.nextLine();
		
		System.out.println("Car Doors:");
		numDoors = scan.nextInt();
		
		System.out.println("Car HP:");
		carHP = scan.nextInt();
		
		System.out.println("Car Cylinders:");
		carCylinders = scan.nextInt();
		
		scan.nextLine();
		
		System.out.println("Moto Make:");
		motoMake = scan.nextLine();
		
		System.out.println("Moto Model:");
		motoModel = scan.nextLine();
		
		System.out.println("Moto Color:");
		motoColor = scan.nextLine();
		
		System.out.println("Moto Type:");
		motoType = scan.nextLine();
		
		System.out.println("Moto HP:");
		motoHP = scan.nextInt();
		
		System.out.println("Moto Cylinders:");
		motoCylinders = scan.nextInt();
		
		
		scan.close();
		
		
		Car car = Context.getBean(Car.class);
		car.setCarMake(carMake);
		car.setCarModel(carModel);
		car.setColor(carColor);
		car.setNumDoors(numDoors);
		car.setEngineSpecs(carHP, carCylinders);
		car.display();
		car.startEngine();
		
		System.out.println();
		
		Motorcycle moto = Context.getBean(Motorcycle.class);
		moto.setMotoMake(motoMake);
		moto.setMotoModel(motoModel);
		moto.setColor(motoColor);
		moto.setType(motoType);
		moto.setEngineSpecs(motoHP, motoCylinders);
		moto.display();
		moto.startEngine();
		
				
	}

}

package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Car {
	private String carMake, carModel, color;
	private int numDoors;
	
	@Autowired
	private Engine engine;
	
	public String getCarMake() {
		return carMake;
	}

	public void setCarMake(String carMake) {
		this.carMake = carMake;
	}

	public String getCarModel() {
		return carModel;
	}

	public void setCarModel(String carModel) {
		this.carModel = carModel;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}
	
	public int getNumDoors() {
		return numDoors;
	}
	
	public void setNumDoors(int numDoors) {
		this.numDoors = numDoors;
	}
	
	public void setEngineSpecs(int hp, int cyl) {
		engine.setCylinders(hp);
		engine.setHorsepower(cyl);
	}
	
	public void display() {
		System.out.println("CAR");
		System.out.println("Make: " + carMake);
		System.out.println("Model: " + carModel);
		System.out.println("Color: " + color);
		engine.display();
	}

	public void startEngine() {
		engine.startEngine();
	}
	
}

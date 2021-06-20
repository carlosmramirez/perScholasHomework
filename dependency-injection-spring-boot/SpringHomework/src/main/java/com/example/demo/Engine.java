package com.example.demo;

import org.springframework.stereotype.Component;

@Component
public class Engine {
	private int horsepower;
	private int cylinders;
	
	public int getHorsepower() {
		return horsepower;
	}
	public void setHorsepower(int horsepower) {
		this.horsepower = horsepower;
	}
	public int getCylinders() {
		return cylinders;
	}
	public void setCylinders(int cylinders) {
		this.cylinders = cylinders;
	}
	
	public void display() {
		System.out.println("Horsepower: " + horsepower);
		System.out.println("Cylinders: " + cylinders);
	}
	
	public void startEngine() {
		System.out.println("Engine has started");
	}
	
}

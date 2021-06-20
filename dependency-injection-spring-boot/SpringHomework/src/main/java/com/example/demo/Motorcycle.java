package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Motorcycle {
	private String motoMake, motoModel, color, type;
	
	@Autowired
	private Engine engine;
	
	public String getMotoMake() {
		return motoMake;
	}

	public void setMotoMake(String motoMake) {
		this.motoMake = motoMake;
	}

	public String getMotoModel() {
		return motoModel;
	}

	public void setMotoModel(String motoModel) {
		this.motoModel = motoModel;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	
	public void setEngineSpecs(int hp, int cyl) {
		engine.setCylinders(hp);
		engine.setHorsepower(cyl);
	}
	
	public void display() {
		System.out.println("MOTORCYCLE");
		System.out.println("Make: " + motoMake);
		System.out.println("Model: " + motoModel);
		System.out.println("Color: " + color);
		System.out.println("Type: " + type);
		engine.display();
	}
	
	public void startEngine() {
		engine.startEngine();
	}
	
}

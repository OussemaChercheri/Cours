package com.chercheri.designpatterns.decorator;

public class DecaratorMain {

    public static void main(String[] args) {
        Boisson espresso = new Epresso();
        System.out.println("Description: " + espresso.getDescription() + " | Prix: "+ espresso.cout());

        espresso = new Chocolat(espresso);
        System.out.println("Description: " + espresso.getDescription() + " | Prix: "+ espresso.cout());

        espresso = new Lait(espresso);
        System.out.println("Description: " + espresso.getDescription() + " | Prix: "+ espresso.cout());
    }
}

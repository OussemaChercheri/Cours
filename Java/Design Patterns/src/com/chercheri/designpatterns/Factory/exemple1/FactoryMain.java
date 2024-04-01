package com.chercheri.designpatterns.Factory.exemple1;

public class FactoryMain {

    public static void main(String[] args) {
        Computer pc = ComputerFactory.getComputer("pc");
        System.out.println("Ma configuration PC: " + pc);

        Computer server = ComputerFactory.getComputer("server");
        System.out.println("Ma configuration SERVER: " + server);

        Computer pcGamer = ComputerFactory.getComputer("gamer");
        System.out.println("Ma configuration PCGAMER: " + pcGamer);

        Computer imagonaire = ComputerFactory.getComputer("imaginaire");
        System.out.println("Ma configuration IMAGINAIRE: " + imagonaire);
    }
}

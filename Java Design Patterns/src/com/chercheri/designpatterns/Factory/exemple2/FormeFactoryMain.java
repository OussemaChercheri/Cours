package com.chercheri.designpatterns.Factory.exemple2;

public class FormeFactoryMain {
    public static void main(String[] args) {
        Forme cercle = FormeFactory.getForme("cercle");
        cercle.dessiner();

        Forme carre = FormeFactory.getForme("carre");
        carre.dessiner();
    }
}
